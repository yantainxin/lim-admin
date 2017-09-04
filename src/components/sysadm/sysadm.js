import Vue from 'vue'
import VueBus from 'vue-bus'
import $ from 'jquery'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'

import store from '../../vuex/store'
import config from '../../common/config.js'
import dataSource from '../../common/data.source.js'
import formTags from '../../common/form.tags.js'
import formAction from '../../common/form.action.js'

import router from './router.js'
import sysadm from './sysadm.vue'

import 'lib/layer/layer.js'
// import 'lib/layui/layui.js'
// import 'lib/layui/layui.config.js'
// import 'lib/ueditor/ueditor.config.js'
// import 'lib/ueditor/ueditor.all.min.js'
//import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(VueBus);
Vue.use(dataSource);
Vue.use(formAction);

Vue.prototype.config = config;
Vue.config.productionTip = false;
Vue.http.options.credentials = true;//接口时注释
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.headers = {'Content-Type':'application/x-www-form-urlencoded; application/json; charset=UTF-8;'};
Vue.http.options.emulateJSON = true;// post的时候会把JSON对象转成formdata

router.beforeEach((to, from, next) => {
	if(to.name == 'error') {
		
	}	else if(to.name == 'index' || to.name == 'login') {
		if(sessionStorage.hasOwnProperty('personal')){
			router.push({ name: 'main' });
		}
	}	else {
		if(!sessionStorage.hasOwnProperty('personal')){
			location.href = '/index.html'
			// router.push({ name: 'index' });
		} else {
			let personal = JSON.parse(sessionStorage.getItem('personal'));
			if($.inArray(to.name, personal.adminPrivilege) === -1){
				router.push({ name: 'error' });
			}
		}
	}
	next();
})

/* eslint-disable no-new */
new Vue({
	store,
	el: '#sysadm',
	router: router,
	template: '<sysadm/>',
	components: { sysadm }
});


