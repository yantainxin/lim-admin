<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
<el-form v-if="item != null && rules != null" :model="item" :rules="rules" ref="messageBoardFrom" label-width="200px">
  <el-form-item label="游客ID">
    <s-textfield v-model="item.touristId" disabled></s-textfield>
  </el-form-item>
  <el-form-item label="游客名字">
    <s-textfield v-model="item.touristName" disabled></s-textfield>
  </el-form-item>
  <el-form-item label="游客真实名字">
    <s-textfield v-model="item.touristUname" disabled></s-textfield>
  </el-form-item>
  <!--
  <el-form-item label="游客邮箱">
    <s-textfield v-model="item.touristEmail" disabled></s-textfield>
  </el-form-item>
  -->
  <el-form-item label="游客电话">
    <s-textfield v-model="item.touristPhone" disabled></s-textfield>
  </el-form-item>
  <el-form-item label="游客留言">
    <s-textarea v-model="item.touristContent" disabled></s-textarea>
  </el-form-item>
  <el-form-item label="创建时间">
    <s-textfield v-model="item.messageBoardCreatetime" disabled></s-textfield>
  </el-form-item>
  <el-form-item label="操作状态">
      <s-radio-group v-model="item.messageBoardStatus" :options="[{'value':0, 'label':'待处理'}, {'value':1, 'label':'已处理'}, {'value':2, 'label':'已关闭'}]"></s-radio-group>
  </el-form-item>
  <el-form-item label="备注信息">
    <s-textarea v-model="item.messageBoardReplyContent"></s-textarea>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="formSubmit('messageBoardFrom')">确认</el-button>
    <el-button @click="formReset('messageBoardFrom')">重置</el-button>
  </el-form-item>
</el-form>
</el-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  data() {
    return {
      loading: true,
      path: './messageboard/messageboard',
      route: 'messageboardManage',
      rules: {},
      item: null
    }
  },
  computed: {
    ...mapGetters({
      personal: 'GET_PERSONAL'
    })
  },
  mounted() {
    this.initItem();
  }
}
</script>