<template>
  <div id="main">
    <div
      v-cloak
      ref="swiper"
      :allow-super="true"
      key-name="key"
      :pointer-threshold="0.5"
      :super-threshold="0.5"
      :queue.sync="queue"
      @submit="submit"
    >
      <template slot-scope="scope">
        <div
          class="pic"
          :style="{'background-image': 'url(https://picsum.photos/710/1152/?random='+scope.data.key}"
        ></div>
      </template>
      <img class="like-pointer" slot="like" src="../../assets/img/like-txt.png">
      <img class="nope-pointer" slot="nope" src="../../assets/img/nope-txt.png">
      <img class="super-pointer" slot="super" src="../../assets/img/super-txt.png">
    </div>
    <div class="btns">
      <!-- <img style="width:55px;" src="./img/history.png"> -->
      <img style="width:80px;" src="../../assets/img/nope.png" @click="decide('nope')">
      <img style="width:70px;" src="../../assets/img/super-like.png" @click="decide('super')">
      <img style="width:80px;" src="../../assets/img/like.png" @click="decide('like')">
      <img style="width:70px;" src="../../assets/img/help.png" @click="decide('show')">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      queue: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var list = [];
      for (var i = 0; i < 5; i++) {
        list.push({
          key: Math.random()
        });
      }
      this.queue = this.queue.concat(list);
    },
    submit() {
      if (this.queue.length < 2) {
        this.getData();
      }
    },
    decide(choice) {
      if (choice === "show") {
        window.location.href = "#";
      }
      this.$refs.swiper.decide(choice);
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  background-image: linear-gradient(rgba(252, 252, 253, 0.5), #f7f7fb);
  overflow: hidden;
}

/* [v-cloak] {
  display: none;
} */

#main .vue-swiper {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 23px;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 23px - 18%);
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
  width: 100%;
  height: 100%;
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

