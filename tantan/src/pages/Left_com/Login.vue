<template>
<div style="background:#f3f2ed;height:667px;">
<!-- 左右滑动 -->
<div>
  <h4> <span class="wordRight">右</span> 滑喜欢</h4>
  <h4><span class="wordLeft">左</span>滑不喜欢</h4>
</div>
<!-- 原图 -->
<div class="master">
    <img class="masterMap" src="../../assets/tanlogin.png" alt="">
</div>
<!-- 登录/注册 -->
<div>
  <div class="WeChat">微信登陆</div>
  <div @click="registered" class="register">手机注册</div>
</div>

<h6 class="protocol">
  <span>点击登录即同意探探的</span>
  <strong>用户协议与隐私条款</strong>
</h6>
</div>
</template>
<script>
  export default {
    methods: {
        registered(){
            this.$router.push({name:'registered',parent:{id:1}})
        }
    },
}
</script>
<style scoped>
h4:nth-child(1) {
  padding-top: 30px;
}
h4 {
  width: 100%;
  text-align: center;
  color: #a4a49d;
}
.wordRight {
  color: #d4442e;
}
.wordLeft {
  color: #4a4a4a;
}
.master {
  margin-top: 30px;
  height: 338px;
  width: 100%;
  position: relative;
  clear: both;
}
.master .masterMap {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
}


.WeChat{
  width: 90%;
  height: 50px;
  margin: 20px 5% 0 5%;
  background: #53b875;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
.register{
  width: 90%;
  height: 50px;
  margin: 10px 5%;
  border: 1px #c1b7b2 solid;
  background: #f3f2ed;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: #8f8585;
}
.protocol{
  margin-top: 58px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 12px;
  color: #c6c7c2;
}
.protocol strong{
  color: #939393;  
}
</style>
