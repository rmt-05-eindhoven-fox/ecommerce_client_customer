import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToastify from 'vue-toastify'

Vue.use(VueToastify, {
  hideProgressbar: true,
  errorDuration: 3000,
  successDuration: 3000,
  theme: 'light'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
