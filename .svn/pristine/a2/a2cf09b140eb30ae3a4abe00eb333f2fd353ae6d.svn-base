<template>
  <el-pagination
	  layout="total, sizes, prev, pager, next, jumper"
	  :current-page="page"
	  :page-size="pagesize"
	  :page-sizes="[20, 40, 60, 80]"
	  :total="count"
	  @size-change="handleSizeChange"
		@current-change="handleCurrentChange"
	  >
	</el-pagination>
</template>
<script>
export default{
	props: {
		count:{
		  type: Number,
		  default: 0			
		}
	},
	data() {
		return {
			page: 1,
			pagesize: 20
	  } 
	},
	methods: {
		handleSizeChange(pagesize){
			let query = $.extend({}, this.$route.query);
			this.pagesize =	query.pagesize = pagesize;
			this.$router.push({name:this.$route.name, query:query});
		},
		handleCurrentChange(page){
			let query = $.extend({}, this.$route.query);
			this.page =	query.page = page;
			this.$router.push({name:this.$route.name, query:query});
		}
	}
}
</script>