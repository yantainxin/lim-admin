<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
<el-form v-if="item != null && rules != null" :model="item" :rules="rules" ref="channelForm" label-width="200px">
  <el-form-item label="渠道名称" prop="channelWebname">
    <s-textfield v-model="item.channelWebname" placeholder="请填写渠道名称"></s-textfield>
  </el-form-item>



<!--   <el-form-item label="渠道域名" prop="channelDomain">
    <el-tooltip content="请填写域名域名地址，不带“http://”，如：im.newyali.com，绑定多个请用英文“,”隔开。">
    <s-textfield v-model="item.channelDomain" placeholder="请填写域名域名地址，不带“http://”，如：im.newyali.com，绑定多个请用英文“,”隔开。"></s-textfield>
    </el-tooltip>
  </el-form-item> -->


  <el-form-item label="渠道域名" prop="channelDomain">
    <el-tag
  :key="item.id"
  v-if="item.channelDomain != ''"
  v-for="tag in item.channelDomain.split(',')"
  :closable="true"
  :close-transition="false"
  @close="handleClose(tag)"
  type="primary"
>
{{tag}}
</el-tag>
  <el-input
    class="input-new-tag"
    v-if="inputVisible"
    v-model="inputValue"
    ref="saveTagInput"
    placeholder="域名不带“http://”，如：im.newyali.com，绑定多个请用英文逗号隔开。回车或点击空白处即可"
    @keyup.enter.native="handleInputConfirm"
    @blur="handleInputConfirm"
  >
  </el-input>
<el-button v-if="inputVisible ==''" class="button-new-tag" size="small" @click="showInput">新增域名</el-button>
<!-- <el-input
  type="textarea"
  class="input-new-tag"
  v-if="textareaVisible"
  v-model="textareaValue"
  ref="saveTagTextarea"
  placeholder="请填写域名，域名不带“http://”。如：im.newyali.com，绑定多个请用英文逗号隔开。点击空白处即可完成"
  @keyup.enter.native="handleTextareaConfirm"
  @blur="handleTextareaConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showTextarea">新增多个域名</el-button> -->
<el-button v-if="item.channeldomain !=''" class="button-clear-tag" size="small" @click="clearAll">清空所有域名</el-button>
  </el-form-item>
  <el-form-item label="启用会员系统" prop="channelIsmember">
    <s-switch v-model="item.channelIsmember"></s-switch>
  </el-form-item>
  <template v-if="item.channelIsmember == 1">
    <el-form-item label="好友列表接口" prop="channelMemberurl">
      <s-textfield v-model="item.channelMemberurl" placeholder="如果应用中使用到会员系统，好友列表接口"></s-textfield>
    </el-form-item>
    <el-form-item label="个人信息接口" prop="channelMemberinfourl">
      <s-textfield v-model="item.channelMemberinfourl" placeholder="如果应用中使用到会员系统，请填写个人详细信息接口"></s-textfield>
    </el-form-item>
    <el-form-item label="在线状态接口" prop="channelMemberstatusurl">
      <s-textfield v-model="item.channelMemberstatusurl" placeholder="如果应用中使用到会员系统，请填写修改在线状态接口"></s-textfield>
    </el-form-item>
    <el-form-item label="签名变更接口" prop="channelMembersignurl">
      <s-textfield v-model="item.channelMembersignurl" placeholder="如果应用中使用到会员系统，请填写修改签名接口"></s-textfield>
    </el-form-item>
  </template>
  <el-form-item>
    <el-button type="primary" @click="formSubmit('channelForm')">确认</el-button>
    <el-button @click="formReset('channelForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-row>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      path: './system/channel/channel',
      route: 'channelManage',
      rules: null,
      item: null,
      inputVisible: false,
      inputValue: '',
      textareaVisible: false,
      // textareaValue: ''
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
      handleClose(tag) {
        console.log(888,tag);
        console.log(999,this.item.channelDomain,this.item.channelDomain.split(',').indexOf(tag));
        if(this.item.channelDomain.split(',').indexOf(tag) != 0){
         this.item.channelDomain =  this.item.channelDomain.replace(','+tag,'');
        } else if(this.item.channelDomain.split(',').length > 1 ){
         this.item.channelDomain =  this.item.channelDomain.replace(tag+',','');
        } else {
          this.item.channelDomain =  this.item.channelDomain.replace(tag,'');
        }
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      showTextarea() {
        this.textareaVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagTextarea.$refs.textarea.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          if (this.item.channelDomain != ''){
            this.item.channelDomain += ','+inputValue;
            console.log('input11',this.item.channelDomain);
          }
          else{
             this.item.channelDomain += inputValue;
            console.log('input22',this.item.channelDomain);
           }
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      handleTextareaConfirm() {
        let textareaValue = this.textareaValue,obj = this;
        if (textareaValue && textareaValue.indexOf(',')) {
          console.log(textareaValue,777777);
          textareaValue.split(',').forEach(function(t,i){
              if (t != '') {
                if(obj.item.channelDomain !=''){
                  obj.item.channelDomain += ','+t;
                }
                else{
                  obj.item.channelDomain += t;
                }
              }
          })
        } else if(textareaValue && textareaValue.indexOf(',') == -1){
          console.log('-1');
          if(obj.item.channelDomain ==''){
            console.log('kong');
            obj.item.channelDomain += textareaValue;
            console.log(obj.item.channelDomain);
          }
          else{
            console.log('nkong');
            obj.item.channelDomain += ','+textareaValue;
            console.log(obj.item.channelDomain);
          }
        }
        this.textareaVisible = false;
        this.textareaValue = '';
      },
      clearAll(){
        console.log(111,this.item.channelDomain);
        this.item.channelDomain = '';
      }
    }
}
</script>