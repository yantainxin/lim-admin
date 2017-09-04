import Vue from 'vue';
import VueRouter from 'vue-router';

// import error from './error.vue';
// import index from './index.vue';
// import login from './login.vue';
// import main from './main.vue';
// import desk from './page-desk.vue';

//坐席管理
// import skill from './management/skill/skill.vue';
// import skillManage from './management/skill/skill-manage.vue';
// import skillModify from './management/skill/skill-modify.vue';
// import skillImport from './management/skill/skill-import.vue';
// import skillView from './management/skill/skill-view.vue';

// import kefu from './management/kefu/kefu.vue';
// import kefuManage from './management/kefu/kefu-manage.vue';
// import kefuModify from './management/kefu/kefu-modify.vue';
// import kefuImport from './management/kefu/kefu-import.vue';
// import kefuView from './management/kefu/kefu-view.vue';

//系统管理
// import config from './system/config/config.vue';
// import configView from './system/config/config-view.vue';

// import channel from './system/channel/channel.vue';
// import channelManage from './system/channel/channel-manage.vue';
// import channelModify from './system/channel/channel-modify.vue';
// import channelImport from './system/channel/channel-import.vue';
// import channelView from './system/channel/channel-view.vue';
// //工单查询
// import order from './order/order.vue';
// import orderManage from './order/order-manage.vue';
// import orderModify from './order/order-modify.vue';
// import orderImport from './order/order-import.vue';
// import orderView from './order/order-view.vue';
// 导航管理
// import column from './navigation/column/column.vue';
// import columnManage from './navigation/column/column-manage.vue';
// import columnModify from './navigation/column/column-modify.vue';
// import columnView from './navigation/column/column-view.vue';

// import privilege from './navigation/privilege/privilege.vue';
// import privilegeManage from './navigation/privilege/privilege-manage.vue';
// import privilegeModify from './navigation/privilege/privilege-modify.vue';
// import privilegeView from './navigation/privilege/privilege-view.vue';
// //权限管理
// import admin from './permissions/admin/admin.vue';
// import adminManage from './permissions/admin/admin-manage.vue';
// import adminModify from './permissions/admin/admin-modify.vue';
// import adminImport from './permissions/admin/admin-import.vue';
// import adminView from './permissions/admin/admin-view.vue';

// import role from './permissions/role/role.vue';
// import roleManage from './permissions/role/role-manage.vue';
// import roleModify from './permissions/role/role-modify.vue';
// import roleView from './permissions/role/role-view.vue';
// //基础智库管理
// import fastreply from './thinktank/fastreply/fastreply.vue';
// import fastreplyManage from './thinktank/fastreply/fastreply-manage.vue';
// import fastreplyModify from './thinktank/fastreply/fastreply-modify.vue';
// import fastreplyImport from './thinktank/fastreply/fastreply-import.vue';
// import fastreplyView from './thinktank/fastreply/fastreply-view.vue';

// import robot from './thinktank/robot/robot.vue';
// import robotManage from './thinktank/robot/robot-manage.vue';
// import robotModify from './thinktank/robot/robot-modify.vue';
// import robotImport from './thinktank/robot/robot-import.vue';
// import robotView from './thinktank/robot/robot-view.vue';
// //基本信息
// import company from './basicinfo/company/company.vue';
// import companyView from './basicinfo/company/company-view.vue';

// import section from './basicinfo/section/section.vue';
// import sectionManage from './basicinfo/section/section-manage.vue';
// import sectionView from './basicinfo/section/section-view.vue';

// import staff from './basicinfo/staff/staff.vue';
// import staffManage from './basicinfo/staff/staff-manage.vue';
// import staffView from './basicinfo/staff/staff-view.vue';

// import member from './basicinfo/member/member.vue';
// import memberManage from './basicinfo/member/member-manage.vue';
// import memberView from './basicinfo/member/member-view.vue';
// //游客列表
// import tourist from './tourist/tourist.vue';
// import touristManage from './tourist/tourist-manage.vue';
// import touristView from './tourist/tourist-view.vue';
// //设置中心
// import kefutime from './setting/kefutime/kefutime.vue';
// import kefutimeModify from './setting/kefutime/kefutime-modify.vue';
// import kefutimeView from './setting/kefutime/kefutime-view.vue';

// import greeting from './setting/greeting/greeting.vue';
// import greetingModify from './setting/greeting/greeting-modify.vue';
// import greetingView from './setting/greeting/greeting-view.vue';

// import setting from './setting/setting/setting.vue';
// import settingModify from './setting/setting/setting-modify.vue';
// import settingView from './setting/setting/setting-view.vue';

// import orderattr from './setting/orderattr/orderattr.vue';
// import orderattrModify from './setting/orderattr/orderattr-modify.vue';
// import orderattrView from './setting/orderattr/orderattr-view.vue';
// //个人管理
// import person from './person/person.vue';
// import personModify from './person/person-modify.vue';


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
    
    {name: 'skill', path: '/skill', component: function(resolve){  
     require(['./management/skill/skill.vue'], resolve)}
  , children:[
      {name: 'skillManage', path: '/skill-manage', component: function(resolve){  
     require(['./management/skill/skill-manage.vue'], resolve)}
  },
      {name: 'skillModify', path: '/skill-modify', component: function(resolve){  
     require(['./management/skill/skill-modify.vue'], resolve)}
  },
      {name: 'skillImport', path: '/skill-import', component: function(resolve){  
     require(['./management/skill/skill-import.vue'], resolve)}
  },
      {name: 'skillView', path: '/skill-view', component: function(resolve){  
     require(['./management/skill/skill-view.vue'], resolve)}
  }
    ]},
    {name: 'kefu', path: '/kefu', component: function(resolve){  
     require(['./management/kefu/kefu.vue'], resolve)}
  , children:[
      {name: 'kefuManage', path: '/kefu-manage', component: function(resolve){  
     require(['./management/kefu/kefu-manage.vue'], resolve)}
  },
      {name: 'kefuModify', path: '/kefu-modify', component: function(resolve){  
     require(['./management/kefu/kefu-modify.vue'], resolve)}
  },
      {name: 'kefuImport', path: '/kefu-import', component: function(resolve){  
     require(['./management/kefu/kefu-import.vue'], resolve)}
  },
      {name: 'kefuView', path: '/kefu-view', component: function(resolve){  
     require(['./management/kefu/kefu-view.vue'], resolve)}
   }
    ]},
    //系统管理
    {name: 'config', path: '/config', component: function(resolve){  
     require(['./system/config/config.vue'], resolve)}
  , children:[
      {name: 'configView', path: '/config-view', component: function(resolve){  
     require(['./system/config/config-view.vue'], resolve)}
  }
    ]},
    {name: 'channel', path: '/channel', component: function(resolve){  
     require(['./system/channel/channel.vue'], resolve)}
  , children:[
      {name: 'channelManage', path: '/channel-manage', component: function(resolve){  
     require(['./system/channel/channel-manage.vue'], resolve)}
  },
      {name: 'channelModify', path: '/channel-modify', component: function(resolve){  
     require(['./system/channel/channel-modify.vue'], resolve)}
  },
      {name: 'channelImport', path: '/channel-import', component: function(resolve){  
     require(['./system/channel/channel-import.vue'], resolve)}
  },
      {name: 'channelView', path: '/channel-view', component: function(resolve){  
     require(['./system/channel/channel-view.vue'], resolve)}
  }
    ]},
    //工单查询
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
     require(['./order/order-view.vue'], resolve)}
  }
    ]},
    //导航管理
    {name: 'column', path: '/column', component: function(resolve){  
     require(['./navigation/column/column.vue'], resolve)}
  , children:[
      {name: 'columnManage', path: '/column-manage', component: function(resolve){  
     require(['./navigation/column/column-manage.vue'], resolve)}
  },
      {name: 'columnModify', path: '/column-modify', component: function(resolve){  
     require(['./navigation/column/column-modify.vue'], resolve)}
  },
      {name: 'columnView', path: '/column-view', component: function(resolve){  
     require(['./navigation/column/column-view.vue'], resolve)}
  }
    ]},
    {name: 'privilege', path: '/privilege', component: function(resolve){  
     require(['./navigation/privilege/privilege.vue'], resolve)}
  , children:[
      {name: 'privilegeManage', path: '/privilege-manage', component: function(resolve){  
     require(['./navigation/privilege/privilege-manage.vue'], resolve)}
  },
      {name: 'privilegeModify', path: '/privilege-modify', component: function(resolve){  
     require(['./navigation/privilege/privilege-modify.vue'], resolve)}
  },
      {name: 'privilegeView', path: '/privilege-view', component: function(resolve){  
     require(['./navigation/privilege/privilege-view.vue'], resolve)}
  },
    ]},
    //权限管理
    {name: 'admin', path: '/admin', component: function(resolve){  
     require(['./permissions/admin/admin.vue'], resolve)}
  , children:[
      {name: 'adminManage', path: '/admin-manage', component: function(resolve){  
     require(['./permissions/admin/admin-manage.vue'], resolve)}
  },
      {name: 'adminModify', path: '/admin-modify', component: function(resolve){  
     require(['./permissions/admin/admin-modify.vue'], resolve)}
  },
      {name: 'adminImport', path: '/admin-import', component: function(resolve){  
     require(['./permissions/admin/admin-import.vue'], resolve)}
  },
      {name: 'adminView', path: '/admin-view', component: function(resolve){  
     require(['./permissions/admin/admin-view.vue'], resolve)}
  }
    ]},
    {name: 'role', path: '/role', component: function(resolve){  
     require(['./permissions/role/role.vue'], resolve)}
  , children:[
      {name: 'roleManage', path: '/role-manage', component: function(resolve){  
     require(['./permissions/role/role-manage.vue'], resolve)}
  },
      {name: 'roleModify', path: '/role-modify', component: function(resolve){  
     require(['./permissions/role/role-modify.vue'], resolve)}
  },
      {name: 'roleView', path: '/role-view', component: function(resolve){  
     require(['./permissions/role/role-view.vue'], resolve)}
  }
    ]},
    //基础智库管理
    {name: 'fastreply', path: '/fastreply', component: function(resolve){
     require(['./thinktank/fastreply/fastreply.vue'], resolve)}
  , children:[
      {name: 'fastreplyManage', path: '/fastreply-manage', component: function(resolve){  
     require(['./thinktank/fastreply/fastreply-manage.vue'], resolve)}
  },
      {name: 'fastreplyModify', path: '/fastreply-modify', component: function(resolve){  
     require(['./thinktank/fastreply/fastreply-modify.vue'], resolve)}
  },
      {name: 'fastreplyImport', path: '/fastreply-import', component: function(resolve){  
     require(['./thinktank/fastreply/fastreply-import.vue'], resolve)}
  },
      {name: 'fastreplyView', path: '/fastreply-view', component: function(resolve){  
     require(['./thinktank/fastreply/fastreply-view.vue'], resolve)}
  }
    ]},
    {name: 'robot', path: '/robot', component: function(resolve){  
     require(['./thinktank/robot/robot.vue'], resolve)}
  , children:[
      {name: 'robotManage', path: '/robot-manage', component: function(resolve){  
     require(['./thinktank/robot/robot-manage.vue'], resolve)}
  },
      {name: 'robotModify', path: '/robot-modify', component: function(resolve){  
     require(['./thinktank/robot/robot-modify.vue'], resolve)}
  },
      {name: 'robotImport', path: '/robot-import', component: function(resolve){  
     require(['./thinktank/robot/robot-import.vue'], resolve)}
  },
      {name: 'robotView', path: '/robot-view', component: function(resolve){  
     require(['./thinktank/robot/robot-view.vue'], resolve)}
  }
    ]},
    {name: 'download', path: '/download', component: function(resolve){  
     require(['./thinktank/download/download.vue'], resolve)}
  , children:[
      {name: 'downloadManage', path: '/download-manage', component: function(resolve){  
     require(['./thinktank/download/download-manage.vue'], resolve)}
  },
      {name: 'downloadModify', path: '/download-modify', component: function(resolve){  
     require(['./thinktank/download/download-modify.vue'], resolve)}
  },
      {name: 'downloadView', path: '/download-view', component: function(resolve){  
     require(['./thinktank/download/download-view.vue'], resolve)}
  }
    ]},
    //基本信息
    {name: 'company', path: '/company', component: function(resolve){  
     require(['./basicinfo/company/company.vue'], resolve)}
  , children:[
      {name: 'companyView', path: '/company-view', component: function(resolve){  
     require(['./basicinfo/company/company-view.vue'], resolve)}
  }
    ]},
    {name: 'section', path: '/section', component: function(resolve){  
     require(['./basicinfo/section/section.vue'], resolve)}
  , children:[
      {name: 'sectionManage', path: '/section-manage', component: function(resolve){  
     require(['./basicinfo/section/section-manage.vue'], resolve)}
  },
      {name: 'sectionView', path: '/section-view', component: function(resolve){  
     require(['./basicinfo/section/section-view.vue'], resolve)}
  }
    ]},
    {name: 'staff', path: '/staff', component: function(resolve){  
     require(['./basicinfo/staff/staff.vue'], resolve)}
  , children:[
      {name: 'staffManage', path: '/staff-manage', component: function(resolve){  
     require(['./basicinfo/staff/staff-manage.vue'], resolve)}
  },
      {name: 'staffView', path: '/staff-view', component: function(resolve){  
     require(['./basicinfo/staff/staff-view.vue'], resolve)}
  }
    ]},
    {name: 'member', path: '/member', component: function(resolve){  
     require(['./basicinfo/member/member.vue'], resolve)}
  , children:[
      {name: 'memberManage', path: '/member-manage', component: function(resolve){  
     require(['./basicinfo/member/member-manage.vue'], resolve)}
  },
      {name: 'memberView', path: '/member-view', component: function(resolve){  
     require(['./basicinfo/member/member-view.vue'], resolve)}
  }
    ]},
    //游客列表
    {name: 'tourist', path: '/tourist', component: function(resolve){  
     require(['./tourist/tourist.vue'], resolve)}
  , children:[
      {name: 'touristManage', path: '/tourist-manage', component: function(resolve){  
     require(['./tourist/tourist-manage.vue'], resolve)}
  },
      {name: 'touristView', path: '/tourist-view', component: function(resolve){  
     require(['./tourist/tourist-view.vue'], resolve)}
  }
    ]},
    //设置中心
    {name: 'kefutime', path: '/kefutime', component: function(resolve){  
     require(['./setting/kefutime/kefutime.vue'], resolve)}
  , children:[
      {name: 'kefutimeModify', path: '/kefutime-modify', component: function(resolve){  
     require(['./setting/kefutime/kefutime-modify.vue'], resolve)}
  },
      {name: 'kefutimeView', path: '/kefutime-view', component: function(resolve){  
     require(['./setting/kefutime/kefutime-view.vue'], resolve)}
  }
    ]},
    {name: 'greeting', path: '/greeting', component: function(resolve){  
     require(['./setting/greeting/greeting.vue'], resolve)}
  , children:[
      {name: 'greetingModify', path: '/greeting-modify', component: function(resolve){  
     require(['./setting/greeting/greeting-modify.vue'], resolve)}
  },
      {name: 'greetingView', path: '/greeting-view', component: function(resolve){  
     require(['./setting/greeting/greeting-view.vue'], resolve)}
  }
    ]},
    {name: 'setting', path: '/setting', component: function(resolve){  
     require(['./setting/setting/setting.vue'], resolve)}
  , children:[
      {name: 'settingModify', path: '/setting-modify', component: function(resolve){  
     require(['./setting/setting/setting-modify.vue'], resolve)}
  },
      {name: 'settingView', path: '/setting-view', component: function(resolve){  
     require(['./setting/setting/setting-view.vue'], resolve)}
  }
    ]},
    {name: 'orderattr', path: '/orderattr', component: function(resolve){  
     require(['./setting/orderattr/orderattr.vue'], resolve)}
  , children:[
      {name: 'orderattrModify', path: '/orderattr-modify', component: function(resolve){  
     require(['./setting/orderattr/orderattr-modify.vue'], resolve)}
  },
      {name: 'orderattrView', path: '/orderattr-view', component: function(resolve){  
     require(['./setting/orderattr/orderattr-view.vue'], resolve)}
  }
    ]},
    {name: 'sensitiveword', path: '/sensitiveword', component: function(resolve){  
     require(['./setting/sensitiveword/sensitiveword.vue'], resolve)}
  , children:[
      {name: 'sensitivewordModify', path: '/sensitiveword-modify', component: function(resolve){  
     require(['./setting/sensitiveword/sensitiveword-modify.vue'], resolve)}
  },
      {name: 'sensitivewordView', path: '/sensitiveword-view', component: function(resolve){  
     require(['./setting/sensitiveword/sensitiveword-view.vue'], resolve)}
  }
    ]},
    //个人管理
    {name: 'person', path: '/person', component: function(resolve){  
     require(['./person/person.vue'], resolve)}
  , children:[
      {name: 'personModify', path: '/person-modify', component: function(resolve){  
     require(['./person/person-modify.vue'], resolve)}
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