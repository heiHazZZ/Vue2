// 引入 vue
import Vue from "vue";
// 引入 App
import App from './APP'
// 引入vue-router
import vueRouter from 'vue-router'
// 引入路由器
import router from './router'

Vue.config.productionTip = false

// 应用插件
Vue.use(vueRouter)

new Vue({
    el:'#app',
    render:h => h(App),
    router
})