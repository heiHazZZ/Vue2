// 引入 vue
import Vue from "vue";
// 引入 App
import App from './APP'
// 引入vue-response插件
import vueResponse from 'vue-resource'

// 引入store
import store from './store/index'

Vue.config.productionTip = false

// 使用插件
Vue.use(vueResponse)

new Vue({
    el:'#app',
    render:h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})