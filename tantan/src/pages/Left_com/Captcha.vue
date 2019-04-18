<template>
    <div style="backgrounf:#f6f5f1; height:667px;">
        <!-- 头部 -->
        <div class="head">
            <div class="ZuoBiao" @click="returns">
                <img class="ZuoBiaoImage" src="../../assets/leftsign.png" alt="">
            </div>
            <h4 class="headline">验证码登录</h4>
        </div>
        <!-- 手机号码显示 -->
        <div class="Captchaprompt">
            <p>验证码已通过短信发送至手机：</p>
            <strong>+86 <span>13838383388</span></strong>
        </div>
        <!-- 验证码输入框 -->
        <div class="Captchainput">
            <input type="text" class="text1">
            <input type="text" class="text2">
            <input type="text" class="text3">
            <input type="text" class="text4">
        </div>

        <!-- 倒计时 -->
        <div class="countdown">
            <p>重新发送(60)</p>
        </div>

        <div style="width:100%;textt-align:center;">
            <hr style="text-align:center;width:80%;margin:0 10%;background:#ecebe6;">
        </div>
       
        <!-- 密码登录 -->
        <div class="Tologin">
            <!-- @click=""点击跳转到首页 -->
            <h6  class="loginText">密码登录</h6>
        </div>

    </div>
</template>
<style scoped>
.head {
  width: 100%;
  height: 50px;
  background: #d84d37;
  line-height: 50px;
  clear: both;
  text-align: center;
}
.head .ZuoBiao {
  width: 25px;
  height: 50px;
  float: left;
  margin: 5px 0 5px 0;
}
.head .ZuoBiao .ZuoBiaoImage {
  width: 25px;
  height: 25px;
}
.head .headline {
  text-align: center;
  color: #fff;
}
.Captchaprompt {
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 18px;
}
.Captchaprompt p {
    margin-top: 35px;
  color: #9b9b9b;
  line-height: 30px;
}
.Captchaprompt strong {
  color: #4a4a4a;
}
.Captchainput{
    width: 100%;
    height: 100px;
    clear: both;
    text-align: center;
}
.Captchainput input{
    outline: none;
    float: left;
    width:17.90%;
    height: 100%;
    margin: 0 3%;
    border-radius: 10px;
}
.countdown{
    width: 100%;
    height: 100px;
    line-height: 130px;
    text-align: center;
    color: #c5c5c5;
    }
.Tologin{
    width: 100%;
    margin-top: 30px;
    height: 50px;
}
.Tologin .loginText{
    text-align: center;
    color: #6ea9e5;
    font-size:14px;
}
</style>
<script>
export default {
    methods: {
         returns(){
        this.$router.go(-1)
        }
    },
   
}
</script>

