<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
	<el-table v-if="items != null" :data="items" border stripe>
    <el-table-column align="center" prop="orderdetailId" label="ID" sortable width="100"></el-table-column>
    <el-table-column header-align="center" prop="orderdetailNo" label="编号" sortable></el-table-column>
    <el-table-column header-align="center" prop="orderdetailTitle" label="工单主题" sortable></el-table-column>
    <el-table-column header-align="center" prop="orderdetailReferer" label="客户来源" sortable></el-table-column>
    <!-- <el-table-column header-align="center" prop="orderdetailLasttime" label="处理截止时间" sortable></el-table-column> -->
    <el-table-column header-align="center" prop="orderdetailSolvetime" label="处理时间" sortable></el-table-column>
    <el-table-column header-align="center" prop="orderdetailSkillgroupname" label="处理技能组" sortable></el-table-column>
    <el-table-column header-align="center" prop="orderdetailStatus" label="工单状态" sortable>
      <template scope="scope">
        <d-maps v-model="scope.row.orderdetailStatus" :options="[{'value':0, 'label':'待受理'}, {'value':1, 'label':'已受理'}, {'value':2, 'label':'已解决'}, {'value':3, 'label':'已超时'}, {'value':4, 'label':'已取消'}]"></d-maps>
      </template>
    </el-table-column>
    <el-table-column align="center" label="操作" width="180">
    	<template scope="scope">
    	   <router-link v-if="scope.row.orderdetailStatus == 0 || scope.row.orderdetailStatus == 1" class="el-button el-button--info el-button--small" :to="{name:'orderModify', query:{id: scope.row.orderdetailId}}" tag="button"><i class="iconfont icon-edit"></i></router-link>
		    <router-link v-else class="el-button el-button--small" :to="{name:'orderView', query:{id: scope.row.orderdetailId}}" tag="button"><i class="iconfont icon-detail"></i></router-link>
      </template>
    </el-table-column>
  </el-table>					
  <d-pagination :count="count"></d-pagination>
</el-row>
</template>
<script>
export default{
	data() {
		return {
			loading: true,
			path: './order/order',
			count: 0,
			items: null
		} 
	},
	mounted(){
	  this.listItems(null, this.$route.query);
	},
	watch:{
		$route(){
			this.listItems();
		}
	}
}
</script>