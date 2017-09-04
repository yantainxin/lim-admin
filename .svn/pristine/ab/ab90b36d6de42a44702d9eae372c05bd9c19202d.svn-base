<template>
<div class="item-box">
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-row v-if="item != null"class="item-detail">
    <d-text label="客服接单上限">{{item.orderKefumax}}</d-text>
    <d-text label="工单创建时间上限">{{item.orderCreatelimit}}</d-text>
    <d-text label="客服受理工单时间上限">{{item.orderSeizedlimit}}</d-text>
    <d-text label="超时提示语">{{item.orderOvertimetip}}</d-text>

    <d-text label="用户上传附件">      
      <d-maps v-model="item.orderIsupload" :options="[{'value':0, 'label':'关闭'}, {'value':1, 'label':'开启'}]"></d-maps>
    </d-text>

    <d-text label="离线客服参与系统派单">
        <d-maps v-model="item.orderIsaccept" :options="[{'value':0, 'label':'关闭'}, {'value':1, 'label':'开启'}]"></d-maps>
    </d-text>
        
    <d-text label="工单超时是否提醒客服">
        <d-maps v-model="item.orderIswarnkefu" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
    </d-text>

    <d-text label="工单超时是否提醒组长">
        <d-maps v-model="item.orderIswarnchargeman" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
    </d-text>

    <d-text label="工单超时是否提醒班长">
        <d-maps v-model="item.orderIswarnmonitor" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
    </d-text>

    <d-text label="处理超时是否提醒客服">
        <d-maps v-model="item.orderIshandlewarnkefu" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
    </d-text>

    <d-text label="处理超时是否提醒组长">
        <d-maps v-model="item.orderIshandlewarnchargeman" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
    </d-text>

    <d-text label="处理超时是否提醒班长（早晚班班长）">
        <d-maps v-model="item.orderIshandlewarnmonitor" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
    </d-text>

    <d-text label="工单关闭后是否允许编辑">
        <d-maps v-model="item.orderIsedit" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
    </d-text>

    <d-text label="批量导出工单时，是否导出工单备注">
        <d-maps v-model="item.orderIsexportremarks" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
    </d-text>

    <d-text label="重要工单是否标记">
        <d-maps v-model="item.orderImportantsign" :options="[{'value':0, 'label':'否'}, {'value':1, 'label':'是'}]"></d-maps>
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
			path: './setting/orderattr/orderattr',
			item: null
		} 
	},
	mounted() {
    let url = this.config.userpath + this.path.substr(1) + 'Init.action';
    this.viewItem(url, {id:this.$route.query.id}); 
  }
}
</script>