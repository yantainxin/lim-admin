<template>
  <div class="error">
  <div class="floater"></div>
  <div class="main_box">
    <div class="main_bg">
      <div class="fof">{{code}}</div>
      <span>{{msg}}</span>
    </div>
    <div class="main_circle_l Rotation"></div>
    <div class="main_circle_r Rotation"></div>
    <div class="road"></div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: '404',
      msg: '页面不存在'
    }
  },
  mounted(){
    
  }
}
</script>
<style>
/*body*/
.error {background:url(../../../static/image/error_bottom.png) #32b7fc bottom repeat-x; height: 100%;}
.floater{float: left; height: 50%; margin-bottom: -200px;}

.main_box{ color: #fff; height: 350px; clear: both; position: relative; background:url(../../../static/image/error_bg.jpg) repeat-x;}
.main_bg{ background: url(../../../static/image/error_pear.png) repeat-x; width: 500px; height: 350px; margin-top: -175px; margin-left: -250px; position: absolute; top: 50%; left: 50%; z-index: 100;}
.main_circle_l{width: 70px;height: 70px; margin-top: 150px;margin-left: -185px; position: absolute; top: 50%;left: 50%; z-index: 99; background: url(../../../static/image/error_wheel.png)}
.main_circle_r{width: 70px;height: 70px; margin-top: 155px;margin-left: 25px; position: absolute; top: 50%;left: 50%; z-index: 99; background: url(../../../static/image/error_wheel.png)}
@-webkit-keyframes rotation{
from {-webkit-transform: rotate(0deg);}
to {-webkit-transform: rotate(360deg);}
}
.Rotation{
-webkit-transform: rotate(360deg);
animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}
.road{width:100%; height:150px; background:url(../../../static/image/error_roat.png) repeat-x; margin-top: 120px; position: absolute;top: 50%;-webkit-animation:1s move infinite linear;}
@-webkit-keyframes move{
    from { background-position: 0; }
    to { background-position: -104px; }
}

.fof{color:#FFBA00; font-size: 80px; position: absolute; top: 50%; left: 50%; margin-top: -105px; margin-left: -45px; text-align: center;width: 275px}
.main_bg span{color:#FFBA00; font-size: 14px; position: absolute; top: 50%; left: 50%; margin-top: 0px; margin-left: -45px; width: 275px; line-height: 30px;text-align: center;}
</style>