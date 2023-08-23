// 引入 vue
import Vue from "vue";
// 引入 App
import App from './APP'
// 完整引入
// 引入element-ui组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button,Row,DatePicker } from 'element-ui';

Vue.config.productionTip = false
// 应用ElementUI插件
// Vue.use(ElementUI)

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);


new Vue({
    el:'#app',
    render:h => h(App),
})