// 引入Vue
import Vue from "vue";
// 引入App
import App from './APP'
// 引入插件
import plugins from './plugins'
Vue.config.productionTip = false

// 应用（使用）插件
Vue.use(plugins,1,2,3)
// 创建vm
new Vue({
    el:'#app',
    render:h => h(App)
})