<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
<el-form v-if="item != null && rules != null" :model="item" :rules="rules" ref="kefuForm" label-width="200px">
  <el-form-item label="用户名" prop="kefuUsername">
    <s-textfield v-model="item.kefuUsername" placeholder="请填写长度为2-10的客服用户名" disabled></s-textfield>
  </el-form-item>
  <el-form-item label="真实姓名" prop="kefuRealname">
    <s-textfield v-model="item.kefuRealname" placeholder="请填写长度为2-10的客服姓名"></s-textfield>
  </el-form-item>
  <el-form-item label="昵称" prop="kefuNickname">
    <s-textfield v-model="item.kefuNickname" placeholder="请填写长度为2-10的客服昵称"></s-textfield>
  </el-form-item>
<!--   <el-form-item label="在线状态" prop="kefuIsstate">
    <s-switch v-model="item.kefuIsstate"></s-switch>
  </el-form-item>
 -->
  <el-form-item label="等级" prop="kefuLevel">
    <s-select v-model="item.kefuLevel" :options="[{'value':0, 'label':'客服'}, {'value':1, 'label':'客服组长'}, {'value':2, 'label':'客服班长'}]"></s-select>
  </el-form-item>
<!--  <el-form-item label="移动电话" prop="kefuPhone">
    <s-textfield v-model="item.kefuPhone" placeholder="请填写正确的手机号码"></s-textfield>
  </el-form-item>
   <el-form-item label="同时最大接单数" prop="kefuMaxoforder">
    <s-input-number v-model="item.kefuMaxoforder"></s-input-number>
  </el-form-item>
  <el-form-item label="机器人状态" prop="kefuIsrobot">
    <s-switch v-model="item.kefuIsrobot"></s-switch>
  </el-form-item> -->
  <el-form-item label="技能组" prop="kefuSkillIds">
    <s-transfer v-if="skills != null" v-model="item.kefuSkillIds" :options="skills" :titles="['备选项', '已选项']" :props="{key: 'skillId', label: 'skillName'}"></s-transfer>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="formSubmit('kefuForm')">确认</el-button>
    <el-button @click="formReset('kefuForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-row>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      path: './management/kefu/kefu',
      route: 'kefuManage',
      rules: null,
      item: null,
      skills:null
    }
  },
  mounted() {
    this.getData('skills', './management/skill/skill-items.json');
    this.initForm();
  },
  watch: {
    $route (to, form){
      this.initItem();
    }
  }
}
</script>