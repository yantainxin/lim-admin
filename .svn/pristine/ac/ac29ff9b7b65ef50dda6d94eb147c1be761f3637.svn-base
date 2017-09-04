<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
<el-form v-if="item != null && rules != null" :model="item" :rules="rules" ref="orderForm" label-width="200px">
  <el-form-item label="工单标题">
    <s-input v-model="item.orderdetailTitle" disabled></s-input>
  </el-form-item>
  <el-form-item label="工单编号">
    <s-input v-model="item.orderdetailNo" disabled></s-input>
  </el-form-item>
  <el-form-item label="客户Id">
    <s-input v-model="item.orderdetailCustomerid" disabled></s-input>
  </el-form-item>
  <el-form-item label="客户类型">
    <s-input v-model="item.orderdetailCustomertype" disabled></s-input>
  </el-form-item>
  <el-form-item label="客户来源">
    <s-input v-model="item.orderdetailReferer" disabled></s-input>
  </el-form-item>
  <el-form-item label="处理技能组">
    <s-input v-model="item.orderdetailSkillgroupname" disabled></s-input>
  </el-form-item>
  <el-form-item label="工单内容">
    <s-input v-model="item.orderdetailContent" disabled></s-input>
  </el-form-item>
  <el-form-item label="创建时间">
    <s-input v-model="item.orderdetailCreatetime" disabled></s-input>
  </el-form-item>
<!--   <el-form-item label="最晚解决时间">
    <s-input v-model="item.orderdetailLasttime" disabled></s-input>
  </el-form-item> -->
  <el-form-item label="工单状态" prop="orderdetailStatus">
    <s-radio-group v-model="item.orderdetailStatus" :options="[{'value':0, 'label':'待受理'}, {'value':1, 'label':'已受理'}, {'value':2, 'label':'已解决'}, {'value':3, 'label':'已超时'}, {'value':4, 'label':'已取消'}]"></s-radio-group>
  </el-form-item>
  <el-form-item label="处理人">
    <s-select v-model="item.orderdetailProcessorid" :options="kefuItems" :props="{label:'kefuRealname', value: 'kefuId'}" placeholder="请选择"></s-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="formSubmit('orderForm')">确认</el-button>
    <el-button @click="formReset('orderForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-row>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      path: './order/order',
      route: 'orderManage',
      rules: null,
      item: null,
      kefuItems: null
    }
  },
  mounted() {
    this.initForm();
  },
  watch: {
    $route (to, form){
      this.initItem();
    },
    item() {
      if (this.item !== null) {
        this.getData('kefuItems', './management/kefu/kefu-items.json');
      }
    }
  }
}
</script>