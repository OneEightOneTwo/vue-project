<template>
  <header>
    <div @click="showleft" class="iconfont icon-caidan"></div>
    <div class="title">探探</div>
    <div @click="showright" class="iconfont icon-xiaoxi"></div>
  </header>
</template>

<script>
import "../../assets/icon/iconfont.css";
import state from '../../observable.js'
export default {
  computed: {
    state() {
      return state;
    }
  },
  methods:{
    //点击出现右侧菜单
    showleft(){
      this.state.isleftshow = true;
    },
    showright(){
      this.$router.push({name:"rightreveal"})
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  background-color: #d84d37;
  display: flex;
}

.icon-caidan {
  flex: 1;
}

.title {
  flex: 3;
}
.icon-xiaoxi {
  flex: 1;
}
</style>
