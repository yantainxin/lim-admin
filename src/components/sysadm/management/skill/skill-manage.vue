<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
	<el-table v-if="items != null" :data="items" border stripe>
    <el-table-column align="center" prop="skillId" label="ID" sortable width="100"></el-table-column>
    <el-table-column header-align="center" prop="skillName" label="名称" sortable></el-table-column>
    <el-table-column header-align="center" label="在线咨询" sortable>
      <template scope="scope">
        <d-maps v-model="scope.row.skillIsconsult" :options="[{'value':1, 'label':'是'}, {'value':0, 'label':'否'}]"></d-maps>
      </template>
    </el-table-column>
    <el-table-column header-align="center" prop="skillDescription" label="描述" sortable></el-table-column>
    <el-table-column align="center" label="操作" width="180">
    	<template scope="scope">
    		<d-privilege v-if="privileges != null" :options="privileges" :query="{id: scope.row.skillId}" size="small" :isLabel="false"></d-privilege>
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
			path: './management/skill/skill',
			count: 0,
			items: null,
			privileges:null,
		} 
	},
	computed:{
    ...mapGetters({
      tabItems: 'GET_TABS',
      tabActive: 'GET_TAB_ACTIVE'
    })
  },
	mounted(){
	  this.listItems();
	  this.getPrivilege({pos: 1});
  	this.$bus.$on('skillDelete', (option) => {
  		this.reomveItem(option, '删除技能组信息可能会造成用户无法咨询客服，如确实需要删除，请确认此技能组未被任何应用渠道使用。确定要删除么？');
  	});
	},
  watch:{
    $route(){
      this.listItems();
    }
  }
}
</script>