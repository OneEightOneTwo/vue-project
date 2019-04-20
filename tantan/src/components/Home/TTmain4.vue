<template>
<div>
  <!-- <xheader >探探</xheader> -->
<swiper
      class="vue-swiper"
      v-cloak
      ref="swiper"
      :allow-super="true"
      key-name="key"
      :pointer-threshold="0.5"
      :super-threshold="0.5"
      :queue.sync="queue"
      >
      <template slot-scope="scope">
        <div
          class="pic"
          :style="{'background-image': 'url(https://picsum.photos/710/1152/?random='+scope.data.key}"></div>
      </template>
      <img class="like-pointer" slot="like" src="../../assets/img/like-txt.png">
      <img class="nope-pointer" slot="nope" src="../../assets/img/nope-txt.png">
      <img class="super-pointer" slot="super" src="../../assets/img/super-txt.png">
    </swiper>
    <div class="btns">
      <!-- <img style="width:55px;" src="./img/history.png"> -->
      <img style="width:80px;" src="../../assets/img/nope.png" @click="decide('nope')">
      <img style="width:70px;" src="../../assets/img/super-like.png" @click="decide('super')">
      <img style="width:80px;" src="../../assets/img/like.png" @click="decide('like')">
      <img style="width:70px;" src="../../assets/img/help.png" @click="decide('show')">
    </div>
    <asid ref="asid"></asid>
    <lsetup ref="lsetup"></lsetup>  
</div>
</template>
<script>
// import "../../js/vue-swiper.js";
import "../../main.js";
// import xheader from "../Xheader.vue";
// import lsetup from "../lei/page/Lsetup.vue";
// import asid from "./asid.vue";
export default {
  components: {
    // xheader,
    // lsetup,
    // asid
    // swiper
  },
  
  data() {
    return {
      queue: []
    };
  },
  updated: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      var list = [];
      for (var i = 0; i < 5; i++) {
        list.push({
          key: Math.random()
        });
      }
      this.queue = this.queue.concat(list);
    },
    decide: function(choice) {
      if (choice === "show") {
        window.location.href = "#";
      }
      // console.log(this);
      this.$refs.swiper.decide(choice);
      // this.decide(choice)
    },
    //点击左侧出现侧栏
    // clickLeft:function(){
    //   console.log(this)
    // }
  }
};
</script>
<style scoped>
html,
body {
  height: 100%;
}
body {
  margin: 0;
  background-image: linear-gradient(rgba(252, 252, 253, 0.5), #f7f7fb);
  overflow: hidden;
}
[v-cloak] {
  display: none;
}
#app .vue-swiper {
  /* background:yellow; */
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  /* top: 23px; */
  top:50px;
  margin: auto;
  width: calc(100% - 20px);
  /* height: calc(100% - 23px - 18%); */
  height: calc(100% - 45px - 18%);
  min-width: 300px;
  max-width: 355px;
}
.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 64px;
  height: 64px;
}
.nope-pointer {
  right: 10px;
}
.like-pointer {
  left: 10px;
}
.super-pointer {
  position: absolute;
  z-index: 1;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: auto;
  width: 112px;
  height: 78px;
}
.pic {
  background:skyblue;
  /* width: 100%; */
  width:100px;
  /* height: 100%; */
  height:100px;
  background-size: cover;
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
