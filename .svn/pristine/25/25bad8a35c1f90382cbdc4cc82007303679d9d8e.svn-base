<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
    <el-row v-if="item != null" class="item-detail">
		<d-text label="访客ID">{{item.historyCustomerid}}</d-text>
		<d-text label="会话类型">{{item.historyCustomertype}}</d-text>
		<d-text label="接待客服">{{item.historyKefuname}}</d-text>
		<d-text label="会话开始时间">{{item.historyBegintime}}</d-text>
		<d-text label="会话结束时间">{{item.historyEndtime}}</d-text>
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
			return new Date(this.item.historyCreatetime).toLocaleString('chinese',{hour12:false}); 
	}
  },
	data() {
	    return{
	    	loading:true,
				path: './history/history',
				route: 'historyManage',
				item: null
		}
	},
	mounted(){
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url); 
	}
}
</script>