import Vue from 'vue'
import App from './App'
import elementui from './utils/elementui'
import router from "./router";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
