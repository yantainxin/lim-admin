<template> 
 <div class="desk"> 
  <div class="widget radius-bordered"> 
   <div class="widget-header"> 
    <span class="widget-caption">桌面</span> 
   </div> 
   <div class="widget-body"> 
    <el-row :gutter="10"> 
     <el-col :span="16"> 
      <el-card class="box-card text-center text-white"> 
       <el-row :gutter="10"> 
        <template v-for="order in orderdata"> 
         <el-col :span="6" class="box-padding" :style="'background:' + order.background">
           {{order.count}} 
          <h6>今天{{order.orderdetailStatu}}</h6> 
          <i :class="order.icon"></i> 
         </el-col> 
        </template> 
       </el-row> 
      </el-card> 
      <el-card class="box-card"> 
       <el-row> 
        <el-col :span="16"> 
         <el-button-group> 
          <el-button size="small" @click="changeRange(1)">
           昨天
          </el-button> 
          <el-button size="small" @click="changeRange(0)">
           今天
          </el-button> 
          <el-button size="small" @click="changeRange(7)">
           最近一周
          </el-button> 
          <el-button size="small" @click="changeRange(1*30)" autofocus>
           最近一个月
          </el-button> 
          <el-button size="small" @click="changeRange(3*30)">
           最近三个月
          </el-button> 
         </el-button-group> 
        </el-col> 
        <el-col :span="8" class="text-right"> 
         <el-date-picker v-model="value6" size="small" type="daterange" placeholder="选择日期范围" @change="changeDate" :picker-options="pickerOptions0"></el-date-picker> 
        </el-col> 
       </el-row> 
       <hr /> 
       <div class="lineCharView"><canvas class="lineChar"></canvas> </div>
      </el-card>

      <el-row :gutter="10"> 
       <el-col :span="12"> 
        <el-card class="box-card"> 
         <!-- <span>访问量</span>
            <hr> --> 
         <canvas class="pieChar"></canvas> 
        </el-card> 
       </el-col> 
       <el-col :span="12"> 
        <el-card class="box-card"> 
         <!-- <span>访问量</span>
            <hr> --> 
         <canvas class="radarChar"></canvas> 
        </el-card> 
       </el-col> 
      </el-row>

      <el-card class="box-card bar-char"> 
       <!-- <span>访问量</span>
          <hr> --> 
       <canvas class="barChar"></canvas> 
      </el-card> 


     </el-col> 
     <el-col :span="8"> 
      
      <el-card class="box-card"> 
       <el-row>
        <el-col :span="12">
         <span>人工接待数：<b>223</b></span>
        </el-col> 
        <el-col :span="12">
         <span>机器人接待数：<b>94</b></span>
        </el-col> 
       </el-row> 
      </el-card> 
      <el-card class="box-card"> 
       <el-row>
        <template v-for="kefu in kefudata"> 
         <el-col :span="12">
          <span>{{kefu.kefuIsstate}}：<b>{{kefu.count}}</b></span>
         </el-col>
        </template> 
       </el-row> 
      </el-card> 
      <el-card class="box-card"> 
       <span>最近访客</span> 
       <!-- <router-link :to="{name:'touristManage'}" class="pull-right">更多访客详情</router-link> --> 
       <hr /> 
       <el-row> 
        <template v-for="tourist in touristdata">
          <el-col :lg="8" :md="12" class="char-tourist">
            <img class="pull-left box-margin-right" :src="tourist.touristPhoto" />
            {{tourist.touristName}}<br>{{tourist.touristCreatetime}}
          </el-col>
        </template> 
       </el-row> 
      </el-card> 
     </el-col> 
    </el-row> 
   </div> 
  </div> 
 </div> 
</template>

<script> 
import charSource from '../../common/char.source.js'
import { mapGetters, mapActions } from 'vuex'
export default {
  computed:{
    ...mapGetters({
      personal: 'GET_PERSONAL',
      tabActive: 'GET_TAB_ACTIVE'
    })
  },
  data(){
    return{
      kefudata:{},
      orderdata:{},
      touristdata:{},
      defaultNday:30,
      beginDate:'',
      endDate:'',
      value6: '',
      pickerOptions0: {
         disabledDate(time) {
          //24时(h)=86400000毫秒(ms),
          return time.getTime() > Date.now() +86400000 - 8.64e7 || (new Date(time.getTime()).getFullYear() <= new Date().getFullYear() - 1) ;
         }
      }
    }
  },
  mounted(){
    let obj = this;
    /*---------游客访问量(折线图)--------------*/
    this.changeRange(1*30);

    /*----------客服状态数-------------------------*/
    this.getSource(this.config.userpath +'/diagram/kefu-statuSum.json', {}, function(res) {
      this.kefudata = res.data;
    })

    /*-----------工单状态---------------------------*/
    this.getSource(this.config.userpath + '/diagram/order-statuSum.json', {}, function(res) {
      this.orderdata = res.data;
    });

    /*-----------游客访问(显示头像)-------------------------------*/
    this.getSource(this.config.userpath + '/diagram/tourist-newly.json', {}, function(res) {
      this.touristdata = res.data;
    });
    /*------------新增-------------------------------*/
    charSource.pieChar();
    charSource.radarChar();  
    charSource.barChar();
  },
  methods:{
    changeDate(daterange){
      this.beginDate= daterange.split(' - ')[0], this.endDate=daterange.split(' - ')[1];
      this.getSource(this.config.userpath +'/diagram/tourist-monthSum.json', {'beginDate':this.beginDate,'endDate':this.endDate}, function(res) {
        $('.lineChar').remove();
        $('.lineCharView').append('<canvas class="lineChar"></canvas>');
        charSource.lineChar(res.data);
    })
    },
    changeRange(n){
      console.log(n,this.defaultNday,123);
     var Nowdate=new Date(), month_n = new Date(Nowdate - 1000 * 60 * 60 * 24 * n),
     M=Number(Nowdate.getMonth())+1,
     M_n=Number(month_n.getMonth())+1;
     this.beginDate=month_n.getFullYear()+"-"+(M_n<10 ? "0" + M_n : M_n)+"-"+(month_n.getDate()<10 ? "0"+ month_n.getDate() : month_n.getDate()),

     this.endDate=Nowdate.getFullYear()+"-"+(M<10 ? "0" + M : M)+"-"+(Nowdate.getDate()<10 ? "0"+ Nowdate.getDate() : Nowdate.getDate());
     this.getSource(this.config.userpath +'/diagram/tourist-monthSum.json', {'beginDate':this.beginDate,'endDate':this.endDate}, function(res) {
        $('.lineChar').remove();
        $('.lineCharView').append('<canvas class="lineChar"></canvas>');
        charSource.lineChar(res.data);
    })
    },
    changeD(d){
      var day = new Date();
      if(d == -1){
        day.setTime(day.getTime()-24*60*60*1000);//昨天
      } else if(d == 0){
        day.setTime(day.getTime());//今天
      }

     this.beginDate = day.getFullYear()+"-" + (day.getMonth()+1 <10 ? "0" + (day.getMonth()+1) : (day.getMonth()+1) ) + "-" 
        + (day.getDate() < 10 ? "0" + day.getDate() : day.getDate());
     this.endDate = day.getFullYear()+"-" + (day.getMonth()+1 <10 ? "0" + (day.getMonth()+1) : (day.getMonth()+1) ) + "-" 
        + (day.getDate() < 10 ? "0" + day.getDate() : day.getDate());
       this.getSource(this.config.userpath +'/diagram/tourist-monthSum.json', {'beginDate':this.beginDate,'endDate':this.endDate}, function(res) {
      charSource.lineChar(res.data);
    })
    }
  }
}
</script>