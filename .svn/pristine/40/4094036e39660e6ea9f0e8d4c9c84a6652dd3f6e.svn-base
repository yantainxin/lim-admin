<template>
 <el-tabs v-model="activeName" @tab-click="handleClick" v-loading="loading" element-loading-text="拼命加载中">
    <el-tab-pane label="个人信息" name="personalInfo">
      <el-row class="content-body" v-if="item != null">
        <el-row class="item-detail">
          <d-text label="用户名">{{personal.adminUsername}}</d-text>
          <d-text label="真实姓名">{{personal.adminRealname}}</d-text>
          <d-text label="性别" v-if="personal.adminSex == 0">男</d-text>
          <d-text label="性别" v-if="personal.adminSex == 1">女</d-text>
          <d-text label="电话">{{personal.adminPhone}}</d-text>
          <d-text label="邮箱">{{personal.adminEmail}}</d-text>
        </el-row>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="密码修改" name="personalPwd">
      <el-row class="content-body" v-if="item != null">
        <el-form :model="item" :rules="rules1" ref="personForm" label-width="200px">
          <el-form-item label="原密码" prop="personPwd">
            <s-password v-model="item.personPwd" placeholder="请键入原密码"></s-password>
          </el-form-item>
          <el-form-item label="新密码" prop="personNewPwd">
            <s-password v-model="item.personNewPwd" placeholder="请键入新密码"></s-password>
          </el-form-item>
          <el-form-item label="确认密码" prop="personRepwd">
            <s-password v-model="item.personRepwd" placeholder="请再次确认密码"></s-password>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="formSubmit('personForm')">确认</el-button>
            <el-button @click="formReset('personForm')">重置</el-button>
          </el-form-item>
        </el-form>
        </el-row>
    </el-tab-pane>
  </el-tabs>
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
      loading: true,
      activeName: 'personalInfo',
      path: './person/person',
      item: null,
      rules1: {
        personPwd:[
          {type: 'string',required: true,message : '请输入原密码',trigger: 'blur'}, 
          {type: 'string', pattern: '^(\\w){6,20}$', message : '只能输入6-20个字母、数字、下划线', trigger: 'blur'}
        ],
        personNewPwd:[
          {type: 'string', required: true, message : '新密码不能为空',trigger:' blur'},
          {type: 'string', pattern: '^(\\w){6,20}$', message : '只能输入6-20个字母、数字、下划线', trigger: 'blur'}
        ],
        personRepwd:[
        {type: 'string',required: true,message : '验证码不能为空',trigger: 'blur'},
        {validator:this.validatorPwd,message : '两次密码输入不一致',trigger: 'blur'}
        ]
      }
    } 
  },
  mounted() {
    this.initForm(); 
  },
  watch: {
    $route (to, form){
      this.initItem();
    }
  },
  methods: {
    validatorPwd(rule, value, callback){
       if(value != this.item.personNewPwd){
        callback(new Error(rule.message));
      } else {
        callback();
      }
    },
    handleClick(tab, event) {
      //console.log(tab, event);
    }
  }
}
</script>