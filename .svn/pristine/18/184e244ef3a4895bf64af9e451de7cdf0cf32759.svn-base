<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
<el-form v-if="item != null && rules != null" :model="item" :rules="rules" ref="adminForm" label-width="200px">
  <el-form-item label="用户名" prop="adminUsername">
    <s-textfield v-model="item.adminUsername" placeholder="请填写长度为2-10的用户名称"></s-textfield>
  </el-form-item>
  <el-form-item label="真实姓名" prop="adminRealname">
    <s-textfield v-model="item.adminRealname" placeholder="请填写真实姓名"></s-textfield>
  </el-form-item>
  <el-form-item label="性别" prop="adminSex">
  <s-radio-group v-model="item.adminSex" :options="[{'value':0, 'label':'男'}, {'value':1, 'label':'女'}]"></s-radio-group>
  </el-form-item>
  <el-form-item label="移动电话" prop="adminPhone">
    <s-textfield v-model="item.adminPhone" placeholder="请填写正确的手机号码"></s-textfield>
  </el-form-item>
  <el-form-item label="邮箱" prop="adminEmail">
    <s-textfield v-model="item.adminEmail" placeholder="请填写正确的用户邮箱"></s-textfield>
  </el-form-item>
  <el-form-item label="角色" prop="adminRoleIds">
    <s-transfer v-if="roles != null" v-model="item.adminRoleIds" :options="roles" :titles="['备选项', '已选项']" :props="{key: 'roleId', label: 'roleName'}"></s-transfer>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="formSubmit('adminForm')">确认</el-button>
    <el-button @click="formReset('adminForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-row>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      path: './permissions/admin/admin',
      route: 'adminManage',
      rules: null,
      item: null,
      roles: null
    }
  },
  mounted() {
    this.getData('roles', './permissions/role/role-items.json');
    this.initForm();
  },
  watch: {
    $route (to, form){
      this.initItem();
    }
  }
}
</script>