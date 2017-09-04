<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
    <el-row v-if="item != null" class="item-detail">
        <d-text label="游客ID">{{item.touristId}}</d-text>
        <d-text label="游客昵称">{{item.touristName}}</d-text>
        <d-text label="游客名字">{{item.touristUname}}</d-text>
<!--         <d-text label="游客邮箱">{{item.touristEmail}}</d-text> -->
        <d-text label="游客电话">{{item.touristPhone}}</d-text>
        <d-text label="游客留言">{{item.touristContent}}</d-text>
        <d-text label="操作状态">
            <d-maps v-model="item.messageBoardStatus" :options="[{'value':0, 'label':'待处理'}, {'value':1, 'label':'已处理'}, {'value':2, 'label':'已关闭'}]"></d-maps>
        </d-text>
        <d-text label="处理人">{{item.messageBoardProcessor}}</d-text>
        <d-text label="备注信息">{{item.messageBoardReplyContent}}</d-text>
        <d-text v-if="item.messageBoardCreatetime" label="创建时间">{{item.messageBoardCreatetime}}</d-text>
        <d-text v-if="item.messageBoardUpdatetime" label="处理时间">{{item.messageBoardUpdatetime}}</d-text>
    </el-row>
</el-row>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  computed: {
    ...mapGetters({
      personal: 'GET_PERSONAL'
    })
  },
  data() {
    return {
      loading: true,
      path: './messageboard/messageboard',
      item: null
    }
  },
  mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url);
  }
}
</script>