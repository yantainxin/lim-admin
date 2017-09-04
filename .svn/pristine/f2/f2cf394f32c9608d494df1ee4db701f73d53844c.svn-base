<template>
  <div class="member">
    <div class="widget radius-bordered">
      <div class="widget-header">
        <span class="widget-caption">会员列表</span>
      </div>
      <div class="widget-body">
        <el-row class="content-tools">              
          <el-col :span="8">
              <!-- <s-search routeName="memberManage"></s-search> -->
          </el-col>
          <el-col :span="16" class="text-right">
              <el-button-group><d-privilege v-if="privileges != null" :options="privileges" ></d-privilege></el-button-group>
          </el-col>
        </el-row>
        <el-form ref="memberForm" class="export" v-if="willShow" label-width="200px">
          <hr>
          <el-col :span="20">
          <el-form-item label="用户自定义" prop="columnPid">
          <s-checkbox-group name="options" v-model="property" :options="options"></s-checkbox-group>
          </el-form-item>
          </el-col>
          <el-col :span="4">
              <el-button type="submit" @click.native="exportExcel()">确定导出</el-button><iframe style="display:none"></iframe>
          </el-col>
        </el-form>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            privileges: null,
            willShow:false,
            property: [],
            options: [{'value':'ID', 'label':'ID'}, {'value':'会员编号', 'label':'会员编号'}, {'value':'会员账号', 'label':'会员账号'},{'value':'会员邮箱', 'label':'会员邮箱'}, {'value':'移动电话', 'label':'移动电话'}, {'value':'地址', 'label':'地址'}],
            // exportPath:'/basicinfo/member/memberExport.action',
        }
    },
    computed:{
    ...mapGetters({
      tabItems: 'GET_TABS',
      tabActive: 'GET_TAB_ACTIVE'
    })
  },
    mounted() {
        this.getPrivilege({pos: 0});
    },
    methods: {
        show:function(){
          this.willShow = !this.willShow;
        },
        exportExcel(){
            this.formExport();
        }
    }
}
</script>