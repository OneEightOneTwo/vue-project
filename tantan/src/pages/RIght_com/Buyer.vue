<template>
  <div v-show="state.isActionsheet" class="bigbox" style="width:100%;height:100%;">
    <div class="burerFar" style="width:100%;height:100%;" @click="hidebuyer"></div>
    <div class="burer">
      <div class="burImg"></div>
      <p class="burer-p1">查看谁喜欢我</p>
      <p class="burer-p2">查看喜欢你的人，右滑直接匹配</p>
      <div class="burerMain">
        <div
          class="burerMain-div"
          :style="aa?'':style"
          :class="{
                'burerMain-divHou':aa
            }"
          @click="gai1"
        >
          <div class="discounts">
            <h2>3</h2>个月
          </div>
          <p class="burerMain-p1">特惠￥108</p>
          <p class="burerMain-p2" :style="aa?'':style">￥48/月</p>
        </div>
        <div
          class="burerMain-div"
          :style="bb?'':style"
          :class="{
                'burerMain-divHou':bb
            }"
          @click="gai2"
        >
          <div class="discounts">
            <h2>1</h2>个月
          </div>
          <p class="burerMain-p1">特惠￥48</p>
          <p class="burerMain-p2" :style="bb?'':style">￥36/月</p>
          <div
            style="background:#efcf97;height:20px;margin-top:7px;border-radius: 0 0 10px 10px;z-index:0;font-size:11px;color:#fff"
          >低至1.2元每天</div>
        </div>
        <div
          class="burerMain-div"
          :style="cc?'':style"
          :class="{
                'burerMain-divHou':cc
            }"
          @click="gai3"
        >
          <div class="discounts">
            <h2>12</h2>个月
          </div>
          <p class="burerMain-p1">特惠￥338</p>
          <p class="burerMain-p2" :style="cc?'':style">￥28.2/月</p>
        </div>
      </div>
      <div class="inpu1">
        <input type="Checkbox">
        <span>开通自动续费，立省30元</span>
      </div>
      <div class="BtuImg1 imgSize"></div>
      <div class="BtuImg2 imgSize"></div>
    </div>
  </div>
</template>
<script>
import state from '../../observable.js'
export default {
  data() {
    return {
      aa: true,
      bb: false,
      cc: true,
      style: {
        color: "#e0a030",
        background: "#fff"
      }
    };
  },
  computed: {
    state() {
      return state;
    }
  },
  methods: {
    hidebuyer() {
      this.state.isActionsheet = false;
    },
    gai1() {
      this.aa = false;
      this.bb = true;
      this.cc = true;
    },
    gai2() {
      this.aa = true;
      this.bb = false;
      this.cc = true;
    },
    gai3() {
      this.aa = true;
      this.bb = true;
      this.cc = false;
    },
    getback() {
      this.$router.go(-1);
    },
    nowback() {
      this.$router.go(0);
    }
  }
};
</script>

<style>
.bigbox {
  position: absolute;
  top: 0;
  left: 0;
}
.burerFar {
  box-sizing: border-box;
  padding: 53px 38px;
  position: relative;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.burer {
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 550px;
  background: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  z-index: 2;
}
.burImg {
  width: 100px;
  height: 100px;
  background: url(../../assets/buylove.png);
  background-size: cover;
  margin: 30px 90px;
  border-radius: 51%;
  box-shadow: 1.5px 4px 8px 1px #ccc;
}
.burer-p1 {
  font-size: 20px;
  line-height: 40px;
}
.burer-p2 {
  font-size: 14px;
  color: #757575;
}
.burerMain {
  width: 280px;
  height: 120px;
  background: #f7f7f7;
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
}
.burerMain-div {
  flex: 1;
  border: 2px solid #e0a030;
  border-radius: 10px;
}
.burerMain-divHou {
  flex: 1;
  border: 2px solid #f7f7f7;
  border-radius: 10px;
}
.inpu1 {
  font-size: 12px;
  margin: 10px 0;
  vertical-align: middle;
}
.inpu1 input {
  width: 14px;
  height: 20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-bottom: 1px;
  margin-right: 2px;
  background: #e0a030;
}
.imgSize {
  height: 48px;
  width: 280px;
  margin-top: 10px;
}
.BtuImg1 {
  background: url(../../assets/zhifubao.png) no-repeat;
  background-size: contain;
}
.BtuImg2 {
  background: url(../../assets/weixin.png) no-repeat;
  background-size: contain;
}

/*优惠*/
.discounts {
  margin-top: 10px;
}
.burerMain-div h2 {
  display: inline-block;
}
.burerMain-p1 {
  font-size: 16px;
  margin-top: 3px;
}
.burerMain-p2 {
  font-size: 14px;
  color: #747474;
  margin-top: 3px;
  width: 75px;
  margin-left: 5px;
}
</style>