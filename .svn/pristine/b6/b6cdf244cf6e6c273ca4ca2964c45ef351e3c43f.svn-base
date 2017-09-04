<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-row v-if="item != null"class="item-detail">
    <d-text label="ID">{{item.staffId}}</d-text>
    <d-text label="编号">{{item.staffNo}}</d-text>
    <d-text label="姓名">{{item.staffRealname}}</d-text>
    <d-text label="性别" v-if="item.staffSex == 0">男</d-text>
    <d-text label="性别" v-if="item.staffSex == 1">女</d-text>
    <d-text label="手机号码">{{item.staffPhone}}</d-text>
    <d-text label="邮箱">{{item.staffEmail}}</d-text>
    <d-text label="客服">
        <d-maps v-model="item.staffIskefu" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
    </d-text>
    <d-text label="状态">
        <d-maps v-model="item.staffIskefu" :options="[{'value':0, 'label':'在职'}, {'value':1, 'label':'停职'}]"></d-maps>
    </d-text>
    <d-text label="所属部门">{{item.sectionid}}</d-text>
    <d-text label="公司网站ID">{{item.companyWebId}}</d-text>
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
            path: './basicinfo/staff/staff',
            item: null
        } 
    },
    mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url, {uid:this.$route.query.id}); 
  }
}
</script>