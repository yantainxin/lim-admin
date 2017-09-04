<template>
<div class="downloadcenter">
    <div class="widget radius-bordered">
        <div class="widget-header">
            <span class="widget-caption">下载中心</span>
        </div>
        <div class="widget-body">
            <el-row class="content-tools">              
                <el-col :span="8">
                    <el-tooltip class="item" effect="dark" content="如检索时间，则填写“2017-06-25”或“20170625”;如检索大小，则填“19.37”" placement="right">
                    <s-search routeName="downloadManage"></s-search>
                    </el-tooltip>
                </el-col>
                <el-col :span="16" class="text-right">
                <el-button-group><d-privilege v-if="privileges != null" :options="privileges" ></d-privilege></el-button-group>
              </el-col>
            </el-row>
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
      privileges:null,
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
  }
}
</script>