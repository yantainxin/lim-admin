<template>
  <el-row class="wrapper" v-loading="loading" :element-loading-text="loadingText" fullscreen>
  </el-row>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loading: true,
      loadingText: '正在进行身份校验，请稍等...',
      path: './user/kefu',
      route: 'desk'
    }
  },
  mounted() {
    this.userLoginApi(this.$route.query);
  },
  methods: {
    ...mapActions({
      setPersonal: 'SET_PERSONAL'
    })
  }
}
</script>