<template>
  <div class="wrapper" v-if="hasSession">
      <page-head></page-head>
      <el-row class="page-container">
        <page-side></page-side>
        <div class="page-body">
          <page-tabs></page-tabs>
          <page-main></page-main>
        </div>
      </el-row>
  </div>
</template>

<script>
import pageHead from './page-head.vue'
import pageSide from './page-side.vue'
import pageTabs from './page-tabs.vue'
import pageMain from './page-main.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'sysadm',
  components: {pageHead, pageSide, pageTabs, pageMain},
  data(){
    return {
      menuType: '',
      hasSession : sessionStorage.hasOwnProperty('personal'),
    }
  },
  mounted(){
    this.$nextTick(function () {
      $('.page-side').height($(window).height() - $('.page-head').outerHeight(true));
      $('.page-main').height($(window).height() - $('.page-head').outerHeight(true) - $('.page-tabs').outerHeight(true));
    });
  },
  computed:{
    ...mapGetters({
      tabActive: 'GET_TAB_ACTIVE'
    })
  },
  watch: {
    tabActive() {
      this.$router.push({name: this.tabActive});
    }
  }

}
</script>