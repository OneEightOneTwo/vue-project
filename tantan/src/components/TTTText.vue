<template>
  <div id="app">
    <p>{{ message }}</p>
    <div class="wrap">
      <transition name="show">
        <div
          class="d"
          v-for="(item, index) in list"
          :key="index"
        ><p v-if="count === index">{{ item.text }}</p></div>
      </transition>
    </div>
    <button @click="add">add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello Vue.js!",
      count: 0,
      list: [
        { id: 0, text: "aaa" },
        { id: 1, text: "bbb" },
        { id: 2, text: "ccc" }
      ]
    };
  },
  methods: {
    add: function() {
      if (this.count < this.list.length - 1) {
        this.count += 1;
      } else {
        this.count = 0;
      }
    }
  }
};
</script>
<style>
  .d {
            position: absolute;
            border: 1px solid red;
            width: 30px;
            height: 30px;
        }
        @keyframes show {
            0% {
                opacity: 0;
                left: 32px;
            }
            100% {
                opacity: 1;
                left: 0;
            }
        }
        @keyframes hide {
            0% {
                opacity: 1;
                left: 0;
            }
            100% {
                opacity: 0;
                left: -32px;
            }
        }
        .show-enter-active {
            animation: show 1.2s;
        }
        .show-leave-active {
            animation: hide 1.2s;
        }
        .show-enter, .show-leave-to {
            opacity: 0;
        }
        .wrap {
            position: relative;
            width: 32px;
            height: 32px;
        }

</style>

