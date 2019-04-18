import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
//引入weui
import 'weui'
//引入路由对象
import router from './router.js'
//引入vue-touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

// Vue继承jquery的方法
import $ from 'jquery'
Vue.prototype.$ = $

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  el: "#app",
  //挂载路由实例
  router,
  render: h => h(App),
})


