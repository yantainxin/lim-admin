<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-row v-if="item != null"class="item-detail">
    <d-text label="ID">{{item.fastreplyId}}</d-text>
    <d-text label="快捷回复内容">{{item.fastreplyContent}}</d-text>
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
      path: './thinktank/fastreply/fastreply',
      item: null
    } 
  },
  mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url, {id:this.$route.query.id}); 

  }
}
</script>