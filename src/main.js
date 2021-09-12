import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/ant-design-vue.js'
import fetch from './utils/request'

Vue.prototype.$fetch = fetch

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
