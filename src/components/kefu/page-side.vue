<template>
<div class="page-side" v-loading="loading">
	<el-menu @select="handleSelect" :default-active="tabActive" v-if="items != null">
		<template v-for="item in items">
		<el-menu-item :index="item.name">
			<i :class="item.icon"></i>&nbsp;&nbsp;<label class="menu-text">{{item.title}}</label>
		</el-menu-item>
		</template>
	</el-menu>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	data() {
    return {
      loading: true,
      path: './menu',
      items: null
    } 
  },
  computed:{
    ...mapGetters({
      tabActive: 'GET_TAB_ACTIVE'
    })
  },
  mounted() {
    this.listItems();   
  },
  methods: {
    ...mapActions({
      addTabs: 'ADD_TABS'
    }),
  	handleSelect(key, keyPath) {
  		this.items.forEach((item) => {
  			if(item.haschild === 0 && item.name === key){
					this.addTabs(item);
				}
	  	});
    }
  }
}
</script>
