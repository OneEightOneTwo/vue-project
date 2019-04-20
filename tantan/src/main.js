import Vue from 'vue'
import App from './App.vue'

import axios from '../http.js'//引入axios

// Vue继承jquery的方法
import $ from 'jquery'
//引入weui
import 'weui'
//引入路由对象
import router from './router.js'
//引入vue-touch
import VueTouch from 'vue-touch'
//swiper模块
import 'vue-swiper'

Vue.prototype.$ = $

Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.use(VueTouch, { name: 'v-touch' })

Vue.config.productionTip = false



Vue.prototype.$axios = axios
new Vue({
  el: "#app",
  //挂载路由实例
  router,
  render: h => h(App),
})


