<template>
  <div id="app">
    <TTheader />
    <TTmain />
    <!-- <Ttmain2 /> -->
  </div>
</template>

<script>
import TTheader from "./components/Home/TTheader.vue";
import TTmain from './components/Home/TTmain.vue'
// import Ttmain2 from "./components/Home/Ttmain2.vue";
export default {
  name: "app",
  components: {
    TTheader,
    TTmain
    // Ttmain2
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
