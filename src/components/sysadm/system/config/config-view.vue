<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-row v-if="item != null"class="item-detail">
    <d-text label="网站名称">{{item.configName}}</d-text>
    <d-text label="网站别名">{{item.configAlias}}</d-text>
    <d-text label="网址">{{item.configUrl}}</d-text>
    <d-text label="联系人">{{item.configLinkman}}</d-text>
    <d-text label="固定电话">{{item.configTel}}</d-text>
    <d-text label="传真">{{item.configFax}}</d-text>
    <d-text label="状态">
      <d-maps v-model="item.staffIskefu" :options="[{'value':0, 'label':'关闭'}, {'value':1, 'label':'开启'}]"></d-maps>
    </d-text>
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
      path: './system/config/config',
      item: null
    } 
  },
  mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url, {web_id: this.personal.companyid}); 
  }
}
</script>