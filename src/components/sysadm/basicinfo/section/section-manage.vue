<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
    <el-table v-if="items != null" :data="items" border stripe>
    <el-table-column header-align="center" prop="sectionName" label="名称">
      <template scope="scope">
        <i v-if="scope.row.haschild === 1 && scope.row.isopen === 0" class="iconfont icon-folder" :style="'margin-left:' + 24 * (scope.row.level - 1) + 'px'" @click="haddleSelect(scope.$index)"></i>
        <i v-else-if="scope.row.haschild === 1 && scope.row.isopen == 1" class="iconfont icon-folder-open" :style="'margin-left:' + 24 * (scope.row.level - 1) + 'px'" @click="haddleSelect(scope.$index)"></i>
        <i v-else class="iconfont icon-file" :style="'margin-left:' + 24 * (scope.row.level - 1) + 'px'"/></i>
        {{scope.row.sectionName}}
      </template>
    </el-table-column>
    <el-table-column header-align="center" prop="sectionDescription" label="描述"></el-table-column>
<!--     <el-table-column align="center" label="操作" width="180">
      <template scope="scope">
        <d-privilege v-if="privileges != null" :options="privileges" :query="{id: scope.row.sectionId}" size="small" :isLabel="false"></d-privilege>
      </template>
    </el-table-column> -->
  </el-table>
</el-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  computed:{
    ...mapGetters({
      personal: 'GET_PERSONAL',
      tabItems: 'GET_TABS',
      tabActive: 'GET_TAB_ACTIVE'
    })
  },
  data() {
    return {
      loading: true,
      path: './basicinfo/section/section',
      count: 0,
      items: null,
      privileges:null,
    } 
  },
  mounted(){
    let url = this.config.userpath + this.path.substr(1) + '-items.action';
    this.listItems(url, {pid:0, level:0});
    this.getPrivilege({pos: 1});
    this.$bus.$on('sectionDelete', (option) => {
      this.reomveItem(option);
    });
  },
  methods: {
    haddleSelect(index){
      let url = this.config.userpath + this.path.substr(1) + '-items.action';
      this.listTrees(url, {pid: this.items[index].sectionId, level: this.items[index].level}, index);
    }
  }
}
</script>