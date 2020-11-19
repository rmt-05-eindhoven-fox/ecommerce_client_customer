import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import VueToastify from 'vue-toastify'
import 'sweetalert2/dist/sweetalert2.min.css'

const options = {
  confirmButtonColor: '#442C2E'
}

Vue.config.productionTip = false
Vue.use(VueSweetalert2, options)
Vue.use(VueToastify)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
