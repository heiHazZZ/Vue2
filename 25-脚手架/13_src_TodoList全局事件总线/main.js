// 引入 vue
import Vue from "vue";
// 引入 App
import App from './APP'

Vue.config.productionTip = false

new Vue({
    el:'#app',
    render:h => h(App),
    beforeCreate(){
        // 创建全局事件总线
        Vue.prototype.$bus = this
    }
})