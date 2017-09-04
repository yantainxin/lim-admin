<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-row v-if="item != null"class="item-detail">
    <d-text label="工单标题">{{item.orderdetailTitle}}</d-text>
    <d-text label="工单编号">{{item.orderdetailNo}}</d-text>
    <d-text label="客户Id">{{item.orderdetailCustomerid}}</d-text>
    <d-text label="客户类型">{{item.orderdetailCustomertype}}</d-text>
    <d-text label="客户来源">{{item.orderdetailReferer}}</d-text>
    <d-text label="处理技能组">{{item.orderdetailSkillgroupname}}</d-text>
    <d-text label="工单内容">{{item.orderdetailContent}}</d-text>
    <d-text label="创建时间">{{item.orderdetailCreatetime}}</d-text>
    <d-text label="工单状态" prop="orderdetailStatus">
      <d-maps v-model="item.orderdetailStatus" :options="[{'value':0, 'label':'待受理'}, {'value':1, 'label':'已受理'}, {'value':2, 'label':'已解决'}, {'value':3, 'label':'已超时'}, {'value':4, 'label':'已取消'}]"></d-maps>
    </d-text>
    <d-text label="处理人"><d-maps v-model="item.orderdetailProcessorid" :options="kefuItems" :props="{label:'kefuRealname', value: 'kefuId'}" ></d-maps>
    </d-text>

  <!--   <d-text label="最晚解决时间">
      {{item.orderdetailLasttime}}
    </d-text> -->
    <!-- <d-text v-if="item.orderdetailStatus != null" label="回复时间">{{item.orderdetailReplytime}}</d-text> -->
    <d-text v-if="item.orderdetailStatus > 1" label="处理时间">{{item.orderdetailSolvetime}}</d-text>
  </el-row>
</el-row>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  computed:{
    ...mapGetters({
      personal: 'GET_PERSONAL'
    })
  },
  data() {
    return {
      loading:true,
      path: './order/order',
      item: null,
      kefuItems: null
    } 
  },
  mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url, {id:this.$route.query.id});
    this.getData('kefuItems', './management/kefu/kefu-items.json');
  }
}
</script>