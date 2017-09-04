<template>
<div class="kefu">
	<div class="widget radius-bordered">
		<div class="widget-header">
			<span class="widget-caption">人工坐席</span>
		</div>
		<div class="widget-body">
			<el-row class="content-tools">				
				<el-col :span="8">
				<el-tooltip class="item" effect="dark" content="如检索评价得分，则填写“7.89”" placement="right">
					<s-search routeName="kefuManage"></s-search>
					</el-tooltip>
				</el-col>
				<el-col :span="16" class="text-right">
				<el-button-group><d-privilege v-if="privileges != null" :options="privileges" ></d-privilege></el-button-group>
				</el-col>
			</el-row>
			
			<el-form ref="kefuForm" class="export" v-if="willShow" label-width="200px" method="post" >
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
	    	options: [{'value':'ID', 'label':'ID'}, {'value':'昵称', 'label':'昵称'}, {'value':'在线状态', 'label':'在线状态'},{'value':'工号', 'label':'工号'}, {'value':'等级', 'label':'等级'}, {'value':'同时最大接单数', 'label':'同时最大接单数'},{'value':'机器人服务', 'label':'机器人服务'}, {'value':'评价平均分', 'label':'评价平均分'}, {'value':'移动电话', 'label':'移动电话'}],
	    	exportPath:'/management/kefu/kefuExport.action'
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