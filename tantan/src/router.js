import Vue from 'vue'
import VueRouter from 'vue-router'
//模块化必须显示使用Vue.use来加载路由功能
Vue.use(VueRouter)
//页面大组件
import RightReveal from './pages/RightReveal.vue'
import Home from './pages/Home.vue'
import RightXuanxian from './components/Right_reveal/RightXuanxian.vue'
//左侧登录路由
import Login from './pages/Left_com/Login.vue'
import Registered from './pages/Left_com/Registered.vue'
import Captcha from './pages/Left_com/Captcha.vue'
//所有匹配
import Pairing from './pages/RIght_com/Pairing.vue'
//聊天
import Chitchat from './pages/RIght_com/Chitchat.vue'
//购买会员页
import Buyer from './pages/RIght_com/Buyer.vue'

import FriendsState from './pages/RIght_com/FriendsState.vue'
//探探小助手聊天界面
import TantanTalk from './pages/RIght_com/TantanTalk.vue'
//定义路由
const routes = [
    { path: '/rightXuanxian', component: RightXuanxian ,name:'rightXuanxian'},
    { path: '/home', component: Home ,name:'home'},
    { path: '/rightreveal', component: RightReveal ,name:'rightreveal',
        children:[
            { path: 'pairing', component: Pairing ,name:'pairing'},
            { path: 'chitchat', component: Chitchat ,name:'chitchat'}
        ]
    },
    { path: '/friendsState', component: FriendsState ,name:'friendsState'},
    { path: '/tantanTalk', component: TantanTalk ,name:'tantanTalk'},
    { path: '/buyer', component: Buyer ,name:'buyer'},
    {path: '/login',name: 'login',component: Login},
    {path: '/registered',name: 'registered',component: Registered},
    {path: '/captcha',name: 'captcha',component: Captcha},
  ]

//实例化路由
const router = new VueRouter({
    routes: routes // (缩写) 相当于 routes: routes
})

//暴露路由对象，为后续挂载容器做准备
export default router