<template>
<div class="column">
    <div class="widget radius-bordered">
        <div class="widget-header">
            <span class="widget-caption">权限细粒度列表</span>
        </div>
        <div class="widget-body">
            <el-row class="content-tools">              
                <el-col :span="8">
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
      privileges: null,
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