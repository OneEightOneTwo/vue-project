import Vue from 'vue'
// 公有变量
const state = Vue.observable({
    // 控制弹窗的出现
    isActionsheet: false,
    isleftshow: false,
})

export default state