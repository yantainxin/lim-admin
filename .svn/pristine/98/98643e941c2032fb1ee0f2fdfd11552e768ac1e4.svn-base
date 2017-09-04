<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
    <el-row v-if="item != null" class="item-detail">
        <d-text label="ID">{{item.downloadId}}</d-text>
        <d-text label="文件名称">{{item.downloadName}}</d-text>
        <d-text label="上传日期">{{item.downloadCreatetime}}</d-text>
        <d-text label="文件大小">{{item.downloadSize}} KB</d-text>
        <d-text label="下载文件">
        <el-button size="small" title="下载" @click="_download(item.downloadId)">
          <i class="iconfont icon-download"></i>&nbsp;&nbsp;{{item.downloadName}}
          <iframe style="display:none" class="diframe"></iframe>
          </el-button>
        </d-text>
    </el-row>
</el-row>
</div>
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
            loading:true,
            path: './download/download',
            item: null
        }
    },
    mounted(){
        let url = this.config.userpath + this.path.substr(1) + 'Init.action';
        this.viewItem(url);
    },
    methods:{
    _download(id){
      let url = this.config.userpath + this.path.substr(1) + 'File.action?id='+id;
      $('.diframe').attr('src', url);
    }
  }
}
</script>