<template>
  <header class="page-head el-row bg-primary">
    <div class="header-logo pull-left"><img width="165" class="img-responsive" src="../../../static/image/logo.png" alt="鸭梨LIM"></div>
    <div class="header-menu pull-left cursor-pointer" @click="handleClick"><i class="iconfont icon-list"></i></div>
    <div class="header-user pull-right">
      <el-popover ref="popover" placement="bottom" trigger="click" class="text-center">
        <el-row class="text-center">点击下图可更换头像</el-row>
        <el-upload class="uploader text-center" list-type="picture-card" 
            accept=".gif, .jpeg, .png, .jpg" :show-file-list="false" :action="uploadurl"
            :on-success="handleAvatarSuccess" :on-error="errorMsg" :before-upload="beforeAvatarUpload">
            <img v-if="personal.kefuPhoto" :src="personal.kefuPhoto">
            <i v-else class="avatar iconfont icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="text-left text-silver-dark">
          <i class="iconfont icon-admin"></i> {{personal.kefuRealname}}，欢迎您！<br>
          <i class="iconfont icon-phone"></i> {{personal.kefuPhone?personal.kefuPhone:'暂未填写'}}<br>
          <i class="iconfont icon-email"></i> {{personal.kefuEmail?personal.kefuEmail:'暂未填写'}}
        </div>
      </el-popover>
      <label v-popover:popover class="cursor-pointer">      
        <d-maps v-model="personal.kefuLevel" :options="[{'value':0, 'label':'[客服]'}, {'value':1, 'label':'[客服组长]'}, {'value':2, 'label':'[客服班长]'}]"></d-maps>
        <img v-if="personal.kefuPhoto" :src="personal.kefuPhoto" class="img-rounded">
        <i v-else class="iconfont icon-admin"></i>  
        {{personal.kefuRealname}}，欢迎您！
      </label>
<!--       <label>
        <el-dropdown>
          <span class="el-dropdown-link cursor-pointer">
           <i class="fa fa-md fa-question-circle-o"></i> 帮助
          </span>
          <el-dropdown-menu slot="dropdown" class="help">
            <el-dropdown-item ><i class="fa fa-md fa-newspaper-o"></i> 如何操作</el-dropdown-item>
            <el-dropdown-item ><i class="fa fa-md fa-paint-brush"></i> 意见反馈</el-dropdown-item>
            <el-dropdown-item ><i class="fa fa-md fa-send"></i> 鸭梨官网</el-dropdown-item>
            <el-dropdown-item ><i class="fa fa-md fa-vcard"></i> 关于我们</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </label> -->
      <label>
        <el-button type="text" @click="userLogout()"><i class="iconfont icon-exit"></i> 注销</el-button>
      </label>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default{
  data() {
    return {
      path: './user/kefu',
      uploadurl:''
    }
  },
  computed:{
    ...mapGetters({
      personal: 'GET_PERSONAL',
      tabActive: 'GET_TAB_ACTIVE'
    })
  },
  mounted(){
    this.uploadurl = this.config.host + '/kefu/kefuAvatarModify.action';
  },
  methods: {
     ...mapActions({
      clearTabs: 'CLEAR_TABS',
      clearPersonal: 'CLEAR_PERSONAL',      
      clear: 'CLEAR'
    }),
    handleClick(){
      $('.page-container').toggleClass('menu-compact');
    },
    handleAvatarSuccess(res, file) {
      if(res.code == 200){
        if(sessionStorage.hasOwnProperty('personal')) {
          var personal = JSON.parse(sessionStorage.getItem('personal'));
          personal.kefuPhoto =  res.data;
        }
      }
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB');
      }
      return isLt2M;
    },
    errorMsg(){
      this.$message.error('头像上传失败');
    }
  }
}
</script>