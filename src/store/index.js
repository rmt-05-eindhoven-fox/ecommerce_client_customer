import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'
import router from '../router'
import VueSweetalert2 from 'vue-sweetalert2'
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'
Vue.use(VueSweetalert2)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgColor: '#FFFFFF',
    products: [],
    cartProducts: [],
    cartWatch: '',
    notifyMessage: ''
  },
  mutations: {
    SET_BACKGROUND_COLOR (state, val) {
      state.bgColor = val
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_CART_PRODUCTS (state, payload) {
      state.cartProducts = payload
    },
    UPDATE_CART_WATCH (state, val) {
      state.cartWatch = val
    }
  },
  actions: {
    changeBgColor ({ commit }, val) {
      commit('SET_BACKGROUND_COLOR', val)
    },
    login ({ commit }, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: { email: payload.email, password: payload.password }
      })
        .then(response => {
          console.log(response.data)
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(response => {
          console.log(response.data)
          commit('SET_PRODUCTS', response.data)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },
    register ({ commit }, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: { email: payload.email, password: payload.password }
      })
        .then(response => {
          console.log(response.data)
          router.push('/landingPage/signIn')
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },
    fetchCartProducts ({ commit }, accessToken) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: { access_token: accessToken }
      })
        .then(response => {
          commit('SET_CART_PRODUCTS', response.data)
          console.log(response.data)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },
    addToCart ({ commit }, payload) {
      Vue.swal.showLoading()
      axios({
        method: 'POST',
        url: `/addToCart/${payload.id}`,
        headers: { access_token: payload.accessToken },
        data: { quantity: payload.quantity }
      })
        .then(response => {
          console.log(response.data)
          commit('UPDATE_CART_WATCH', response.data)
          Vue.swal.close()
        })
        .catch(err => {
          console.log(err.response.data.message)
          Vue.swal.fire({
            title: err.response.data.message,
            icon: 'error'
          })
        })
    },
    deleteFromCart ({ commit }, payload) {
      axios({
        method: 'DELETE',
        url: `/cart/${payload.id}`,
        headers: { access_token: payload.accessToken },
        data: { stock: payload.stock }
      })
        .then(response => {
          commit('UPDATE_CART_WATCH', response.data)
          console.log(response.data)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },
    fetchByCategory ({ commit }, category) {
      axios({
        method: 'GET',
        url: `/products/${category}`
      })
        .then(response => {
          commit('SET_PRODUCTS', response.data)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    }
  },
  modules: {
  }
})
