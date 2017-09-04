import Vue from 'vue';
import VueRouter from 'vue-router';

// import error from './error.vue';
// import index from './index.vue';
// import login from './login.vue';
// import main from './main.vue';
// import desk from './page-desk.vue';
//在线客服
// import chat from './chat/chat.vue';

// //留言管理
// import messageboard from './messageboard/messageboard.vue';
// import messageboardManage from './messageboard/messageboard-manage.vue';
// import messageboardView from './messageboard/messageboard-view.vue';
// //下载中心
// import download from './download/download.vue';
// import downloadManage from './download/download-manage.vue';
// import downloadView from './download/download-view.vue';
// //工单中心
// import order from './order/order.vue';
// import orderManage from './order/order-manage.vue';
// import orderModify from './order/order-modify.vue';
// import orderImport from './order/order-import.vue';
// //import orderView from './order/order-view.vue';
// //历史记录
// import history from './history/history.vue';
// import historyManage from './history/history-manage.vue';
// import historyView from './history/history-view.vue';

// //游客中心
// import tourist from './tourist/tourist.vue';
// import touristManage from './tourist/tourist-manage.vue';
// import touristView from './tourist/tourist-view.vue';

Vue.use(VueRouter);

const routes = [
  {name: 'index', path: '/', component: function(resolve){  
     require(['./index.vue'], resolve)}
   },
  {name: 'login', path: '/login', component: function(resolve){  
     require(['./login.vue'], resolve)}
   },
  {name: 'main', path: '/main', component: function(resolve){  
     require(['./main.vue'], resolve)}
  , children:[
    {name: 'desk', path: '/desk', component: function(resolve){  
     require(['./page-desk.vue'], resolve)}
   },
    //在线客服
    {name: 'chat', path: '/chat', component: function(resolve){  
     require(['./chat/chat.vue'], resolve)}
  },
    //留言管理
    {name: 'messageboard', path: '/messageboard', component: function(resolve){  
     require(['./messageboard/messageboard.vue'], resolve)}
   , children:[
      {name: 'messageboardManage', path: '/messageboard-manage', component: function(resolve){  
     require(['./messageboard/messageboard-manage.vue'], resolve)}
   },
      {name: 'messageboardModify', path: '/messageboard-modify', component: function(resolve){  
     require(['./messageboard/messageboard-modify.vue'], resolve)}
   },
      {name: 'messageboardView', path: '/messageboard-view', component: function(resolve){  
     require(['./messageboard/messageboard-view.vue'], resolve)}
   }
    ]},
    //下载中心
   {name: 'download', path: '/download', component: function(resolve){  
     require(['./download/download.vue'], resolve)}
  , children:[
      {name: 'downloadManage', path: '/download-manage', component: function(resolve){  
     require(['./download/download-manage.vue'], resolve)}
  },
      {name: 'downloadView', path: '/download-view', component: function(resolve){  
     require(['./download/download-view.vue'], resolve)}
  }
    ]},
    //工单中心
    {name: 'order', path: '/order', component: function(resolve){
     require(['./order/order.vue'], resolve)}
  , children:[
      {name: 'orderManage', path: '/order-manage', component: function(resolve){  
     require(['./order/order-manage.vue'], resolve)}
  },
      {name: 'orderModify', path: '/order-modify', component: function(resolve){  
     require(['./order/order-modify.vue'], resolve)}
  },
      {name: 'orderImport', path: '/order-import', component: function(resolve){  
     require(['./order/order-import.vue'], resolve)}
  },
     {name: 'orderView', path: '/order-view', component: function(resolve){  
     require(['./order/order-view.vue'], resolve)}}
    ]},
    //历史记录
    {name: 'history', path: '/history', component: function(resolve){  
     require(['./history/history.vue'], resolve)}
  , children:[
      {name: 'historyManage', path: '/history-manage', component: function(resolve){  
     require(['./history/history-manage.vue'], resolve)}
  },
      {name: 'historyView', path: '/history-view', component: function(resolve){  
     require(['./history/history-view.vue'], resolve)}
  }
    ]},
    //游客中心
    {name: 'tourist', path: '/tourist', component: function(resolve){  
     require(['./tourist/tourist.vue'], resolve)}
  , children:[
      {name: 'touristManage', path: '/tourist-manage', component: function(resolve){  
     require(['./tourist/tourist-manage.vue'], resolve)}
  },
      {name: 'touristView', path: '/tourist-view', component: function(resolve){  
     require(['./tourist/tourist-view.vue'], resolve)}
  }
    ]}
  ]},
  {name: 'error', path: '*', component: function(resolve){  
     require(['./error.vue'], resolve)}
   }
];

export default new VueRouter({
   history:true, 
   routes
});
