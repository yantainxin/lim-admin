<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-row v-if="item != null"class="item-detail">
    <d-text label="ID">{{item.skillId}}</d-text>
    <d-text label="技能组名称">{{item.skillName}}</d-text>
    <d-text label="在线咨询"><d-maps v-model="item.skillIsconsult" :options="[{'value':1, 'label':'是'}, {'value':0, 'label':'否'}]"></d-maps></d-text>
    <d-text label="技能组描述">{{item.skillDescription}}</d-text>
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
			path: './management/skill/skill',
			item: null
		} 
	},
	mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url, {id:this.$route.query.id}); 
  }
}
</script>