import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from 'vue-google-oauth2'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.config.productionTip = false

const gauthOption = {
  clientId: '415237281810-9v93m38dqr217vbka2378310bglttv8g.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(GAuth, gauthOption)
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
