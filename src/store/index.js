import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setCart (state, data) {
      state.cart = data
    }
  },
  actions: {
    userLogin (context, payload) {
      axios({
        url: '/user/login/customer',
        method: 'post',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },

    userLogout (context) {
      localStorage.clear()
      router.push({ name: 'Login' })
    },

    userRegister (context, payload) {
      axios({
        url: '/user/register',
        method: 'post',
        data: payload
      })
        .then(({ data }) => {
          router.push({ name: 'Login' })
          console.log('Register successfull')
        })
        .catch(err => {
          console.log(err.response.data.message)
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
          console.log(data, '<< Data Producst from store')
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
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
          console.log('Successfully added to the Cart')
        })
        .catch(err => {
          console.log(err)
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
          console.log(err)
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
          console.log(err)
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
          console.log(err)
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
          // context.dispatch('fetchUserCart')
          router.push({ name: 'Home' })
          console.log('Checkout success')
        })
        .catch(err => {
          console.log(err)
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
