<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-row v-if="item != null"class="item-detail">
    <d-text label="名称">{{item.privilegeName}}</d-text>
    <d-text label="链接">{{item.privilegeUrl}}</d-text>
    <d-text label="类型">
      <d-maps v-model="item.privilegeType" :options="[{'value':0, 'label':'路由类型'}, {'value':1, 'label':'链接类型'}, {'value':2, 'label':'按钮类型'}]"></d-maps>
    </d-text>
    <d-text label="位置">
      <d-maps v-model="item.privilegePosition" :options="[{'value':0, 'label':'头部栏'}, {'value':1, 'label':'列表栏'}]"></d-maps>
    </d-text>
    <d-text label="描述">{{item.privilegeDescription}}</d-text>
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
      path: './navigation/privilege/privilege',
      item: null
    } 
  },
  mounted() {
    this.viewItem();
  }
}
</script>