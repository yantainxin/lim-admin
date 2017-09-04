<template>
<el-row class="content-body" v-loading="loading" element-loading-text="拼命加载中">
  <el-table v-if="items != null" :data="items" border stripe>
  <el-table-column align="center" prop="channelId" label="ID" sortable width="100"></el-table-column>
  <el-table-column header-align="center" prop="channelWebname" label="网站名称" sortable></el-table-column>
  <el-table-column header-align="center" prop="channelDomain" label="网站域名">
     <template scope="scope">
       <template v-for="tags in scope.row.channelDomain.split(',')">
          <el-tag type="primary">{{tags}}</el-tag>       
       </template>
    </template>
  </el-table-column>
  <el-table-column align="center" label="操作" width="180">
      <template scope="scope">
      <d-privilege v-if="privileges != null" :options="privileges" :query="{id: scope.row.channelId}" size="small" :isLabel="false"></d-privilege>
    </template>
  </el-table-column>
  </el-table>                   
  <d-pagination :count="count"></d-pagination>

  

</el-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  data() {
      return {
          loading: true,
          path: './system/channel/channel',
          count: 0,
          items: null,
          privileges:null,
          skillItems: null
      } 
  },
  computed:{
    ...mapGetters({
      tabItems: 'GET_TABS',
      tabActive: 'GET_TAB_ACTIVE'
    })
  },
  mounted(){
    this.listItems();
    this.getPrivilege({pos: 1});
    this.$bus.$on('channelDelete', (option) => {
      this.reomveItem(option);
    });
  },
  watch:{
    $route() {
      this.listItems();
    }
  }
}
</script>
