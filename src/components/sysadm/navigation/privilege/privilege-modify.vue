<template>
  <el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中" v-if="item != null && rules != null">
    <el-form :model="item" :rules="rules" ref="privilegeForm" label-width="200px">
    <el-form-item label="类型" prop="privilegeType">
        <s-radio-group v-model="item.privilegeType" :options="[{'value':0, 'label':'路由'}, {'value':1, 'label':'链接'},{'value':2, 'label':'按钮'}]"></s-radio-group>
      </el-form-item>
      <el-form-item label="位置" prop="privilegePosition">
        <s-radio-group v-model="item.privilegePosition" :options="[{'value':0, 'label':'头部栏'}, {'value':1, 'label':'列表栏'}]"></s-radio-group>
      </el-form-item>
      <el-form-item label="名称" prop="privilegeName">
        <s-textfield v-model="item.privilegeName"></s-textfield>
      </el-form-item>
      <el-form-item label="链接" prop="privilegeUname">
        <s-textfield v-model="item.privilegeUname"></s-textfield>
      </el-form-item>
      
      <el-form-item label="描述" prop="privilegeDescription">
        <s-textarea v-model="item.privilegeDescription"></s-textarea>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="formSubmit('privilegeForm')">确认</el-button>
        <el-button @click="formReset('privilegeForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      path: './navigation/privilege/privilege',
      route: 'columnManage',
      rules: null,
      item: null
    }
  },
  mounted() {
    this.initForm();
  },
  watch: {
    $route (to, form){
      this.initItem();
    }
  }
}
</script>