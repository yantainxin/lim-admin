<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
	<el-table v-if="items != null" :data="items" border stripe>
    <el-table-column align="center" prop="orderdetailId" label="ID" sortable width="100"></el-table-column>
    <el-table-column header-align="center" prop="orderdetailNo" label="编号" sortable></el-table-column>
    <el-table-column header-align="center" prop="orderdetailTitle" label="工单主题" sortable></el-table-column>
    <el-table-column header-align="center" prop="orderdetailReferer" label="客户来源" sortable></el-table-column>
    <!-- <el-table-column header-align="center" prop="orderdetailLasttime" label="处理截止时间" sortable></el-table-column> -->
    <!-- <el-table-column header-align="center" prop="orderdetailSolvetime" label="处理时间" sortable></el-table-column> -->
    <el-table-column header-align="center" prop="orderdetailSkillgroupname" label="处理技能组" sortable></el-table-column>
    <el-table-column header-align="center" label="工单状态" sortable>
      <template scope="scope">
        <d-maps v-model="scope.row.orderdetailStatus" :options="[{'value':0, 'label':'待受理'}, {'value':1, 'label':'已受理'}, {'value':2, 'label':'已解决'}, {'value':3, 'label':'已超时'}, {'value':4, 'label':'已取消'}]"></d-maps>
      </template>
    </el-table-column>
    <el-table-column align="center" label="操作" width="180">
    	<template scope="scope">
    		<d-privilege v-if="privileges != null" :options="privileges" :query="{id: scope.row.orderdetailId}" size="small" :isLabel="false"></d-privilege>
      </template>
    </el-table-column>
  </el-table>					
  <d-pagination :count="count"></d-pagination>
</el-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
	data() {
		return {
			loading: true,
			path: './order/order',
			count: 0,
			items: null,
			privileges:null
		} 
	},
	computed:{
    ...mapGetters({
      tabItems: 'GET_TABS',
      tabActive: 'GET_TAB_ACTIVE'
    })
  },
	mounted(){

	  this.listItems(null, this.$route.query);
	  this.getPrivilege({pos: 1});
  	this.$bus.$on('orderDelete', (option) => {
  		this.reomveItem(option);
  	});
	},
	watch:{
		$route(){
			this.listItems();
		}
	}
}
</script>