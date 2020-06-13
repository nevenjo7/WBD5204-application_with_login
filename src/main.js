import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AgCookie from './cookie'

Vue.prototype.$cookie = AgCookie
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
