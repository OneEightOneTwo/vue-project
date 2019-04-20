<template>
  <div>
    <!-- 头部 -->

    <div class="cephalosome">
      <!-- 菜单键 -->
      <div @click="returns">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <!-- 昵称 -->
      <div>
        <h6 class="nickname">Onexiu</h6>
      </div>
      <!-- 编辑 -->
      <div>
        <span>编辑</span>
      </div>
    </div>

    <!-- 头像 -->
    <div class="slideshow">
     <img src="../../assets/kksk.gif" alt="">
    </div>

    <!-- 个人信息状态 -->
    <div class="information">
      <!-- 昵称 -->
      <span class="nickname petname">
        <strong>awsl</strong>
      </span>
      <p>
        <span class="age">
          <i class="iconfont icon-nan"></i>24
        </span>
        <span class="constellation">是学生</span>
      </p>
      <span class="dynamic">现在活跃</span>
    </div>

    <!-- 学历认证 -->
    <div class="certification">
      <span>
        <i class="iconfont icon-xueli"></i>
      </span>
      <span>点击认证学生身份</span>
      <span>
        <van-icon name="arrow"/>
      </span>
    </div>
    <!-- xxx喜欢了你 人数-->
    <div class="likenum">
      <span>
        <i class="iconfont icon-xinaixin"></i>
      </span>
      <span>
        <em>999999人</em> 喜欢了你
      </span>
      <span>
        <div class="Wholikes">谁喜欢我？</div>
      </span>
    </div>

    <!-- 我的相册 -->
    <div class="photoalbum">
      <div>
        <i class="iconfont icon-pengyouquan"></i>
      </div>
      <div>
        <span>我的相册</span>
      </div>

      <div>
        <ul class="album">
          <li>
            <img src="" alt>
          </li>
          <li>
            <img src="" alt>
          </li>
          <li>
            <img src="" alt>
          </li>
        </ul>
      </div>

      <div>
        <van-icon name="arrow"/>
      </div>
    </div>
    <!-- 我的信息 -->
    <div class="footer">
      <div class="mymessage">
        <span class="message">我的信息</span>
      </div>
      <div class="constellation">
        <span class="message">星座</span>
        <span>天平座</span>
      </div>
      <div class="constellation">
        <span class="message">位置</span>
        <span>value</span>
      </div>
      <div class="constellation">
        <span class="message">查找范围</span>
        <span>value</span>
      </div>
      <div class="constellation">
        <span class="message">年龄</span>
        <span>value</span>
      </div>
      <div class="constellation">
        <span class="message">显示性别</span>
        <span>value</span>
      </div>
      <div class="constellation">
        <span class="message">开启震动</span>
        <span>value</span>
      </div>
      <div class="constellation">
        <span class="message">自动播放视频</span>
        <span>value</span>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/icon/iconfont.css";
export default {
  methods: {
    returns() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.cephalosome {
  width: 100%;
  height: 50px;
  background: #d84d37;
  display: flex;
}
.cephalosome div {
  text-align: center;
  line-height: 50px;
  color: #ffffff;
}
.cephalosome div:nth-child(1) {
  flex: 2;
  font-size: 22px;
}
.cephalosome div:nth-child(2) {
  flex: 6;
  font-size: 22px;
}
.cephalosome div:nth-child(3) {
  flex: 2;
  font-size: 16px;
}
.slideshow {
  width: 100%;
}
.slideshow img {
  width: 100%;
  height: 250px;
}

/* 个人信息状态  */
.information {
  width: 100%;
  height: 100px;
}
.information > span {
  padding-left: 20px;
  display: inline-block;
}
.information > p {
  padding-left: 20px;
}
.information .petname {
  margin-top: 10px;
  font-size: 20px;
  color: #4a4a4a;
}
.information p .age {
  width: 85px;
  height: 30px;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  display: inline-block;
  line-height: 30px;
  background: #84b9f2;
  margin-right: 10px;
}
.information p .constellation {
  width: 85px;
  height: 30px;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  display: inline-block;
  line-height: 30px;
  background: #058727;
  margin-right: 10px;
}
.information .dynamic {
  color: #a6a6a6;
}

/* 学历认证 */
.certification {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #5bcfe0;
  display: flex;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
.certification span {
  display: inline-block;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  color: #fff;
}
.certification span:nth-child(1) {
  flex: 2;
}
.certification span:nth-child(1) i {
  font-size: 25px;
}
.certification span:nth-child(2) {
  flex: 6;
  text-align: left;
}
.certification span:nth-child(3) {
  flex: 2;
  font-size: 25px;
}
/* xxx喜欢了你 人数 */
.likenum {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid #ebebeb;
}
.likenum span {
  display: inline-block;
  font-size: 18px;
  text-align: center;
}
.likenum span:nth-child(1) {
  flex: 2;
}
.likenum span:nth-child(1) i {
  font-size: 25px;
  color: #d84d37;
  padding-left: 8px;
}
.likenum span:nth-child(2) {
  flex: 5;
  text-align: left;
  color: #999999;
}
.likenum span:nth-child(2) em {
  color: #d84d37;
  font-style: normal;
}
.likenum span:nth-child(3) {
  flex: 3;
  font-size: 18px;
  color: #999999;
}
.likenum span:nth-child(3) .Wholikes {
  display: inline-block;
  width: 95px;
  margin: 10px 0;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  background: #f6f5f0;
}
/* 我的相册 */
.photoalbum {
  width: 100%;
  height: 60px;
  display: flex;
}
.photoalbum div {
  padding: 5px 0;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  color: #757575;
}
.photoalbum div:nth-child(1) {
  flex: 2;
  font-size: 26px;
}
.photoalbum div:nth-child(1) i {
  font-size: 22px;
  text-align: left;
}
.photoalbum div:nth-child(2) {
  flex: 2.5;
  text-align: left;
}
.photoalbum div:nth-child(3) {
  flex: 5;
}
.photoalbum div:nth-child(3) .album {
  width: 100%;
  height: 55px;
  margin: 1.5px 0;
}
.photoalbum div:nth-child(3) .album li {
  width: 55px;
  height: 55px;
  margin: 0 3px;
  float: left;
}
.photoalbum div:nth-child(3) .album li img {
  width: 55px;
  height: 55px;
}
.photoalbum div:nth-child(4) {
  flex: 0.5;
}
.footer {
  width: 100%;
  height: 200px;
  background: #f6f5f1;
}
.mymessage {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #f6f5f1;
}
.mymessage .message {
  color: #9b9b9b;
  padding-left: 20px;
  font-size: 15px;
}
.constellation {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #fff;
  display: flex;
}
.constellation span {
  color: #9b9b9b;
  padding-left: 20px;
  font-size: 15px;
}
.constellation span:nth-child(1) {
  flex: 3;
}
.constellation span:nth-child(2) {
  flex: 7;
  text-align: left;
  color: #535353;
}
</style>


