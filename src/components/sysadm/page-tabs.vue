<template>
<div class="page-tabs">
  <el-row>  
      <div class="navbar">        
        <el-dropdown class="navbar-menu" @command="haddleCommand">
          <el-button size="small"><i class="iconfont icon-list"></i></el-button>
          <el-dropdown-menu slot="dropdown">
            <template v-for="(item, index) in tabItems">
              <el-dropdown-item v-if="tabActive === item.name" class="is-active" :command="item.name">
              {{item.title}}
              </el-dropdown-item>  
              <el-dropdown-item v-else :command="item.name">{{item.title}}</el-dropdown-item>             
            </template>
          </el-dropdown-menu>
        </el-dropdown>
        <el-tabs class="navbar-section" v-model="tabActive" type="card" @tab-click="handleClick" @tab-remove="haddleRemove" style="
    margin-left: 2px;">  
          <template v-for="(item, index) in tabItems">
            <el-tab-pane v-if="index === 0" :key="item.id" :name="item.name" :label="item.title"></el-tab-pane>
            <el-tab-pane v-else :key="item.id" :name="item.name" :label="item.title" closable></el-tab-pane> 
          </template>
        </el-tabs>
      </div>
  </el-row>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed:{
    ...mapGetters({
      tabActive: 'GET_TAB_ACTIVE',
      tabItems: 'GET_TABS'
    })
  },
  mounted(){
    if(this.tabItems === null || this.tabItems.length === 0){
      this.addTabs({id:1, title:'桌面', name:'desk', icon:'fa fa-desk', pid:null, haschild:0});
    }
  },
  methods: {
    ...mapActions({
      addTabs: 'ADD_TABS',
      activeTabs: 'ACTIVE_TABS',
      removeTabs: 'REMOVE_TABS'
    }),
    haddleRemove(name) {
      this.removeTabs({name: name});
    },
    handleClick(tab, e) {
      this.haddleCommand(tab.name);
    },
    haddleCommand(name) {
      if(name != this.tabActive){        
        this.activeTabs({name: name});
      }
    }
  }
}
</script>