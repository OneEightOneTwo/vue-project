<template>
  <ul class="stack">
    <li
      class="stack-item"
      v-for="(item,index) in news"
      :key="index"
      :style="[transformIndex(index),transform(index)]"
      @touchmove.stop.capture="touchmove"
      @touchstart.stop.capture="touchstart"
      @touchend.stop.capture="touchend"
      @mousedown.stop.capture="touchstart"
      @mouseup.stop.capture="touchend"
      @mousemove.stop.capture="touchmove"
      @webkit-transition-end="onTransitionEnd"
      @transitionend="onTransitionEnd"
    >
      <img :src="item.author.avatar_url">
    </li>
    <div class="btns">
      <img style="width:80px;" src="../../assets/img/nope.png" @click="decide('nope')">
      <img style="width:70px;" src="../../assets/img/super-like.png" @click="decide('super')">
      <img style="width:80px;" src="../../assets/img/like.png" @click="decide('like')">
      <img style="width:70px;" src="../../assets/img/help.png" @click="decide('show')">
    </div>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      // basicdata数据包含组件基本数据
      basicdata: {
        start: {},
        end: {},
        currentPage: 0 // 默认首图的序列
      },
      // temporaryData数据包含组件临时数据
      temporaryData: {
        poswidth: "", // 记录位移
        posheight: "", // 记录位移
        lastPosWidth: "", // 记录上次最终位移
        lastPosHeight: "", // 记录上次最终位移
        tracking: false, // 是否在滑动，防止多次操作，影响体验
        animation: false, // 首图是否启用动画效果，默认为否
        opacity: 1, // 记录首图透明度
        swipe: false // onTransition判定条件
      },
      // 新闻
      news: [],
      page: 1,
      limit: 5
    };
  },
  async created() {
    let { data } = await this.$axios.get("https://cnodejs.org/api/v1/topics", {
      page: this.page,
      limit: this.limit
    });
    this.news = data.data;
    // console.log(this.news)
  },
  methods: {
    touchstart(e) {
      if (this.temporaryData.tracking) {
        return;
      }
      // 是否为touch
      if (e.type === "touchstart") {
        if (e.touches.length > 1) {
          this.temporaryData.tracking = false;
          return;
        } else {
          // 记录起始位置
          this.basicdata.start.t = new Date().getTime();
          this.basicdata.start.x = e.targetTouches[0].clientX;
          this.basicdata.start.y = e.targetTouches[0].clientY;
          this.basicdata.end.x = e.targetTouches[0].clientX;
          this.basicdata.end.y = e.targetTouches[0].clientY;
        }
        // pc操作
      } else {
        this.basicdata.start.t = new Date().getTime();
        this.basicdata.start.x = e.clientX;
        this.basicdata.start.y = e.clientY;
        this.basicdata.end.x = e.clientX;
        this.basicdata.end.y = e.clientY;
      }
      this.temporaryData.tracking = true;
      this.temporaryData.animation = false;
    },
    touchmove(e) {
      // 记录滑动位置
      if (this.temporaryData.tracking && !this.temporaryData.animation) {
        if (e.type === "touchmove") {
          this.basicdata.end.x = e.targetTouches[0].clientX;
          this.basicdata.end.y = e.targetTouches[0].clientY;
        } else {
          this.basicdata.end.x = e.clientX;
          this.basicdata.end.y = e.clientY;
        }
        // 计算滑动值
        this.temporaryData.poswidth =
          this.basicdata.end.x - this.basicdata.start.x;
        this.temporaryData.posheight =
          this.basicdata.end.y - this.basicdata.start.y;
      }
    },
    touchend(e) {
      this.temporaryData.tracking = false;
      this.temporaryData.animation = true;
      // 滑动结束，触发判断
      // 简单判断滑动宽度超出100像素时触发滑出
      if (Math.abs(this.temporaryData.poswidth) >= 100) {
        // 最终位移简单设定为x轴200像素的偏移
        let ratio = Math.abs(
          this.temporaryData.posheight / this.temporaryData.poswidth
        );
        this.temporaryData.poswidth =
          this.temporaryData.poswidth >= 0
            ? this.temporaryData.poswidth + 200
            : this.temporaryData.poswidth - 200;
        this.temporaryData.posheight =
          this.temporaryData.posheight >= 0
            ? Math.abs(this.temporaryData.poswidth * ratio)
            : -Math.abs(this.temporaryData.poswidth * ratio);
        this.temporaryData.opacity = 0;
        this.temporaryData.swipe = true;
        // 记录最终滑动距离
        this.temporaryData.lastPosWidth = this.temporaryData.poswidth;
        this.temporaryData.lastPosHeight = this.temporaryData.posheight;
        // currentPage+1 引发排序变化
        this.basicdata.currentPage += 1;
        // currentPage切换，整体dom进行变化，把第一层滑动置零
        this.$nextTick(() => {
          this.temporaryData.poswidth = 0;
          this.temporaryData.posheight = 0;
          this.temporaryData.opacity = 1;
        });
        // 不满足条件则滑入
      } else {
        this.temporaryData.poswidth = 0;
        this.temporaryData.posheight = 0;
        this.temporaryData.swipe = false;
      }
    },
    onTransitionEnd(index) {
      // dom发生变化后，正在执行的动画滑动序列已经变为上一层
      if (
        this.temporaryData.swipe &&
        index === this.basicdata.currentPage - 1
      ) {
        this.temporaryData.animation = true;
        this.temporaryData.lastPosWidth = 0;
        this.temporaryData.lastPosHeight = 0;
        this.temporaryData.swipe = false;
      }
    },
    // 非首页样式切换
    transform(index) {
      if (index > this.basicdata.currentPage) {
        let style = {};
        let visible = 3;
        let perIndex = index - this.basicdata.currentPage;
        // visible可见数量前滑块的样式
        if (index <= this.basicdata.currentPage + visible - 1) {
          style["opacity"] = "1";
          style["transform"] =
            "translate3D(0,0," + -1 * perIndex * 60 + "px" + ")";
          style["zIndex"] = visible - index + this.basicdata.currentPage;
          style["transitionTimingFunction"] = "ease";
          style["transitionDuration"] = 300 + "ms";
        } else {
          style["zIndex"] = "-1";
          style["transform"] =
            "translate3D(0,0," + -1 * visible * 60 + "px" + ")";
        }
        return style;
        // 已滑动模块释放后
      } else if (index === this.basicdata.currentPage - 1) {
        let style = {};
        // 继续执行动画
        style["transform"] =
          "translate3D(" +
          this.temporaryData.lastPosWidth +
          "px" +
          "," +
          this.temporaryData.lastPosHeight +
          "px" +
          ",0px)";
        style["opacity"] = "0";
        style["zIndex"] = "-1";
        style["transitionTimingFunction"] = "ease";
        style["transitionDuration"] = 300 + "ms";
        return style;
      }
    },
    
    // 首页样式切换
    transformIndex(index) {
      // 处理3D效果
      if (index === this.basicdata.currentPage) {
        let style = {};
        style["transform"] =
          "translate3D(" +
          this.temporaryData.poswidth +
          "px" +
          "," +
          this.temporaryData.posheight +
          "px" +
          ",0px)";
        style["opacity"] = this.temporaryData.opacity;
        style["zIndex"] = 10;
        if (this.temporaryData.animation) {
          style["transitionTimingFunction"] = "ease";
          style["transitionDuration"] = 300 + "ms";
        }
        return style;
      }
    },
     //点击左滑动

  }
};
</script>

<style>
.stack {
  width: 320px;
  height: 420px;
  position: relative;
  perspective: 1000px;
  perspective-origin: 50% 150%;
  -webkit-perspective: 1000px;
  -webkit-perspective-origin: 50% 150%;
  margin: 0;
  padding: 0;
}
.stack-item {
  background: #fff;
  height: 180px;
  width: 180px;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 23%;
}
.stack-item img {
  width: 100%;
  display: block;
  pointer-events: none;
}
.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}
</style>


