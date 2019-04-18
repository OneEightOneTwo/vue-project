<template>
  <div class="rightcom">
    <RightHead />
    <RightFriends />
    <RightXuanxian />
    <router-view></router-view>
    <buyer/>
  </div>
</template>
<script>
import RightHead from "../components/Right_reveal/RightHead.vue";

import RightFriends from "../components/Right_reveal/RightFriends.vue";

import RightXuanxian from "../components/Right_reveal/RightXuanxian.vue";

import buyer from "./RIght_com/Buyer.vue";
export default {
  components: {
    RightHead,
    RightFriends,
    RightXuanxian,
    buyer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.rightcom {
  background: #1d1c1b;
  height: 100%;
}
</style>