<template>
  <div class="error">
  <div class="floater"></div>
  <div class="main_box">
    <div class="car">
      <div class="msgbord">
        <div class="code">{{res.code}}</div>
        <div class="msg">{{res.msg}}</div>
        <router-link :to="{name:'index'}">重新登录</router-link>        
        <router-link :to="{name:'index'}">返回上页</router-link>
      </div>
      <div class="wheel wheel_l"></div>
      <div class="wheel wheel_r"></div>
    </div>
    <div class="road"></div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      res: {
        code: '404',
        msg: '页面不存在'
      }
    }
  }
}
</script>
<style>
/*body*/
.error {background:url(../../../static/image/error_bottom.png) #32b7fc bottom repeat-x; height: 100%;}
.floater{float: left; height: 50%;}
.main_box{ color: #fff; height: 350px; top:-175px; clear: both; position: relative; background:url(../../../static/image/error_bg.jpg) repeat-x;}
.car{ position: relative; background: url(../../../static/image/error_pear.png) repeat-x; width: 500px; height: 350px; margin:0 auto; z-index: 100;}
.car .msgbord { position: absolute; width: 275px;height: 160px; top: 75px; left: 205px; color: #FFBA00; line-height: 1.1; text-align:center;}
.car .msgbord .code {font-size: 60px; }
.car .msgbord .msg {height: 80px}
.car .wheel{
  position: absolute;
  top:325px;
  width: 70px;
  height: 70px; 
  background: url(../../../static/image/error_wheel.png);
  -webkit-transform: rotate(360deg);
  animation: rotation 3s linear infinite;
  -moz-animation: rotation 3s linear infinite;
  -webkit-animation: rotation 3s linear infinite;
  -o-animation: rotation 3s linear infinite;
}
.car .wheel_l{left:60px;}
.car .wheel_r{left:280px;}

.road{
  position: absolute;
  top: 300px;
  width:100%;
  height:150px;
  background:url(../../../static/image/error_roat.png) repeat-x;
  -webkit-animation:1s move infinite linear;
}

@-webkit-keyframes rotation{
  from {-webkit-transform: rotate(0deg);}
  to {-webkit-transform: rotate(360deg);}
}
@-webkit-keyframes move {
    from { background-position: 0; }
    to { background-position: -104px; }
}
</style>