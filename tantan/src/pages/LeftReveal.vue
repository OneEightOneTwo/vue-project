<template>
  <header v-show="state.isleftshow">
    <div class="zzc" @click="hideleft"></div>
    <div style="background:#2f2e2c; height:100%;position:relative;z-index: 1003;">
      <!-- 头像 头部 -->
      <div class="head">
        <div class="headportrait">
          <img class="images" src="../assets/logo.png" alt>
        </div>
      </div>
      <p class="nickname">
        <strong>Onexiu</strong>
      </p>
      <p class="redact">点击查看/编辑</p>
      <!-- 选项 导航 -->

      <div class="options">
        <p class="Tantan">
          <span>
            <i class="iconfont icon-yaoyiyao"></i>探探
          </span>
        </p>
      </div>

      <div class="options">
        <p class="prerogative">
          <span>
            <i class="iconfont icon-renzheng"></i>激活特权
          </span>
        </p>
      </div>

      <div class="options">
        <p class="attestation">
          <span>
            <i class="iconfont icon-huangguan"></i>认证中心
          </span>
        </p>
      </div>

      <div class="options">
        <p class="anonymity">
          <span>
            <i class="iconfont icon-xinfeng"></i>匿名暗恋表白
          </span>
        </p>
      </div>

      <div class="options">
        <p class="logins" @click="login">
          <span>
            <i class="iconfont icon-shezhi"></i>登陆
          </span>
        </p>
      </div>

      <div class="options">
        <p class="green">
          <span>
            <i class="iconfont icon-xinshou"></i>新手引导
          </span>
        </p>
      </div>

      <div class="options">
        <p class="recommend">
          <span>
            <i class="iconfont icon-upload"></i>推荐给好友
          </span>
        </p>
      </div>
    </div>
  </header>
</template>
<script>
import state from '../observable.js'
export default {
  methods: {
    login() {
      //点击转跳登录注册页
        this.$router.push({ name: "login", parent: { id: 1 } });
    },
    hideleft(){
      this.state.isleftshow = false;
    }
  },
  computed: {
    state() {
      return state;
    }
  },
};
</script>
<style scoped>
@import "../assets/TantanLeft_icon/iconfont.css";
.zzc{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 17%;
  z-index: 1001;
}
header {
  width: 85%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 1px;
  z-index: 1002;
}
.head {
  width: 100%;
  height: 7rem;
  padding-top: 20px;
}
/* 头像 */
.headportrait {
  width: 7rem;
  height: 7rem;
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px 0px #fff;
}
.headportrait .images {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
}
/* 昵称 */
.nickname {
  margin-top: 15px;
  text-align: center;
  color: #fff;
}
/* 编辑 */
.redact {
  text-align: center;
  color: #fff;
  color: #bdbcbb;
  margin-bottom: 40px;
}
.options {
  width: 100%;
  height: 50px;
  margin: 5px 0;
}
.options p {
  height: 50px;
  width: 100%;
  line-height: 50px;
  display: inline-block;
  font-size: 18px;
}
.options p span {
  padding-left: 20px;
  color: #efeeee;
}
.options p span i {
  font-size: 20px;
  padding-right: 30px;
  color: #fff;
}
</style>

