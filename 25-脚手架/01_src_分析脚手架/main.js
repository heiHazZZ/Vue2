// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'
// 引入所有组件的父文件
import App from './App.vue'

Vue.config.productionTip = false

/*
  关于不同版本的Vue：
    1.vue.js 与 vue.runtime.xxx的区别：
      (1)vue.js是完整版的vue，包含：核心功能+模板解析器
      (2)vue.runtime.xxx.js是运行版本的vue，只包含：核心功能，没有模板解析器
    2.因为vue。runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
      render函数收到的createElement函数去指定具体内容
*/

new Vue({
  // 将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
