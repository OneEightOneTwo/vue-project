<template>
  <div>
    <TTheader/>
    <!-- <TTmain4 /> -->
    <TTmain3/>
    <!-- <RightReveal /> -->
    <LeftReveal/>
  </div>
</template>

<script>
import TTheader from "../components/Home/TTheader.vue";
import LeftReveal from "./LeftReveal.vue";
// import TTmain4 from '../components/Home/TTmain4.vue'
import TTmain3 from "../components/Home/TTmain3.vue";
// import RightReveal from "./pages/RightReveal.vue";
export default {
  name: "app",
  components: {
    TTheader,
    // TTmain4,
    TTmain3,
    LeftReveal
    // RightReveal
  }
};
</script>
<style>

</style>
