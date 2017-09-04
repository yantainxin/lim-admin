<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-row v-if="item != null"class="item-detail">
    <d-text label="名称">{{item.columnName}}</d-text>
    <d-text label="链接">{{item.columnUname}}</d-text>
    <d-text label="描述">{{item.columnDescription}}</d-text>
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
			path: './navigation/column/column',
			item: null
		} 
	},
	mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url, {id:this.$route.query.id});
  }
}
</script>