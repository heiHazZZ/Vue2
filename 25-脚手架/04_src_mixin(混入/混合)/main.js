// 引入Vue
import Vue from "vue";
// 引入App
import App from './APP'
// 引入混合
import {mixin,mixin2} from './mixin'
// 关闭Vue生产提示
Vue.config.productionTip = false

// 创建全局混合
Vue.mixin(mixin)
Vue.mixin(mixin2)
// 创建vm
new Vue({
    el:'#app',
    render:h => h(App)
})