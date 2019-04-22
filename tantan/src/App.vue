<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <TTTText />
  </div>
</template>

<script>
import TTTText from "./components/TTTText.vue";
// import TTheader from "./components/Home/TTheader.vue";
// // import TTmain from './components/Home/TTmain.vue'
// import TTmain3 from "./components/Home/TTmain3.vue";
// // import RightReveal from "./pages/RightReveal.vue";
export default {
  name: "app",
  components: {
    TTTText
    // TTheader,
    // TTmain
    // TTmain3,
    // RightReveal
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
