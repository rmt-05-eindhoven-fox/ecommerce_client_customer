import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    history: []
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setCart (state, data) {
      state.cart = data
    },
    setHistory (state, data) {
      state.history = data
    },
    showSuccess (state, payload) {
      Vue.$vToastify.success(payload.message, payload.title)
    },
    showError (state, payload) {
      Vue.$vToastify.error(payload.message, payload.title)
    }
  },
  actions: {
    userLogin (context, payload) {
      return axios({
        url: '/user/login/customer',
        method: 'post',
        data: payload
      })
    },

    userLogout (context) {
      localStorage.clear()
      router.push({ name: 'Login' })
    },

    userRegister (context, payload) {
      return axios({
        url: '/user/register',
        method: 'post',
        data: payload
      })
    },

    fetchProducts (context) {
      axios({
        url: '/product',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          const payload = {
            title: 'ERROR',
            message: err.response.data.message
          }
          context.commit('showError', payload)
        })
    },

    addToCart (context, productId) {
      axios({
        url: `/user/cart/${productId}`,
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          const payload = {
            title: 'Add to Cart',
            message: 'Successfull'
          }
          context.commit('showSuccess', payload)
        })
        .catch(err => {
          const payload = {
            title: 'ERROR',
            message: err.response.data.message
          }
          context.commit('showError', payload)
        })
    },

    fetchUserCart (context) {
      axios({
        url: '/user/cart',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setCart', data.userCart)
        })
        .catch(err => {
          const payload = {
            title: 'ERROR',
            message: err.response.data.message
          }
          context.commit('showError', payload)
        })
    },

    updateCartQty (context, payload) {
      axios({
        url: `/user/cart/${payload.productId}`,
        method: 'patch',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          quantity: payload.quantity
        }
      })
        .then(_ => {
          context.dispatch('fetchUserCart')
        })
        .catch(err => {
          const payload = {
            title: 'ERROR',
            message: err.response.data.message
          }
          context.commit('showError', payload)
        })
    },

    removeFromCart (context, productId) {
      axios({
        url: `/user/cart/${productId}`,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
          context.dispatch('fetchUserCart')
        })
        .catch(err => {
          const payload = {
            title: 'ERROR',
            message: err.response.data.message
          }
          context.commit('showError', payload)
        })
    },

    fetchUserHistory (context) {
      axios({
        url: '/user/history',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setHistory', data)
        })
        .catch(err => {
          const payload = {
            title: 'ERROR',
            message: err.response.data.message
          }
          context.commit('showError', payload)
        })
    },

    checkout (context) {
      console.log('checkout')
      axios({
        url: '/user/checkout',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          userCart: context.getters.userCart
        }
      })
        .then(_ => {
          context.dispatch('fetchUserCart')
          router.push({ name: 'Home' })

          const payload = {
            title: 'Checkout',
            message: 'Successfull. Enjoy your purchase!'
          }
          context.commit('showSuccess', payload)
        })
        .catch(err => {
          const payload = {
            title: 'ERROR',
            message: err.response.data.message
          }
          context.commit('showError', payload)
        })
    }
  },
  getters: {
    userCart (state) {
      return state.cart
    }
  },
  modules: {
  }
})
