<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
    <el-row v-if="item != null" class="item-detail">
    <d-text label="ID">{{item.touristId}}</d-text>
    <d-text label="游客名">{{item.touristName}}</d-text>
    <d-text label="访问IP地址">{{item.touristIp}}</d-text>
    <d-text label="访问时间">{{createTime}}</d-text>
    <d-text label="来源地址">{{item.touristFrom}}</d-text>
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
    }),
    createTime(){
        return new Date(this.item.touristCreatetime).toLocaleString('chinese',{hour12:false}); 
    }
  },
    data() {
        return {
            loading:true,
            path: './tourist/tourist',
            route: 'touristManage',
            item: null
        } 
    },
    mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url); 
  }
}
</script>