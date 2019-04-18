<template>
  <div>
    <TTheader/>
    <!-- <TTmain /> -->
    <TTmain3/>
    <!-- <RightReveal /> -->
    <LeftReveal/>
  </div>
</template>

<script>
import TTheader from "../components/Home/TTheader.vue";
import LeftReveal from "./LeftReveal.vue";
// import TTmain from './components/Home/TTmain.vue'
import TTmain3 from "../components/Home/TTmain3.vue";
// import RightReveal from "./pages/RightReveal.vue";
export default {
  name: "app",
  components: {
    TTheader,
    // TTmain
    TTmain3,
    LeftReveal
    // RightReveal
  }
};
</script>
<style>

</style>
