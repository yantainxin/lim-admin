<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-row v-if="item != null" class="item-detail">
    <d-text label="ID">{{item.channelId}}</d-text>
    <d-text label="渠道号">{{item.channelNumber}}</d-text>
    <d-text label="网站名称">{{item.channelWebname}}</d-text>
    <d-text label="网站域名"><el-tag v-for="tag in item.channelDomain.split(',')" :key = "item.channelId" type="primary">{{tag}}</el-tag></d-text>
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
      path: './system/channel/channel',
      item: null
    } 
  },
  mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url, {id:this.$route.query.id}); 
  }
}
</script>