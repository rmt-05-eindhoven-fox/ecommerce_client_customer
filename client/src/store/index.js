import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    products: [],
    banners: [],
    carts: [],
    histories: []
  },
  mutations: {
    setLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    setHistory (state, payload) {
      state.histories = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register (context, payload) {
      return axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context) {
      axios({
        url: '/home',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    fetchBanners (context) {
      axios({
        url: '/banners',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    addToCart (context, payload) {
      const token = localStorage.getItem('token')
      axios({
        url: '/cart',
        method: 'POST',
        data: {
          productId: payload.productId,
          quantity: payload.quantity
        },
        headers: {
          token
        }
      })
        .then(({ data }) => {
          console.log('add to cart succeed')
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    fetchCarts (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/cart',
        method: 'GET',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    removeCart (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        url: `/cart/${payload.id}`,
        method: 'DELETE',
        headers: {
          token
        }
      })
    },
    updateCart (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        url: `/cart/${payload.id}`,
        method: 'PATCH',
        data: {
          quantity: payload.quantity
        },
        headers: {
          token
        }
      })
    },
    checkout (context) {
      const token = localStorage.getItem('token')
      return axios({
        url: '/cart',
        method: 'PATCH',
        headers: {
          token
        }
      })
    },
    showHistory (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/history',
        method: 'GET',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          context.commit('setHistory', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  getters: {
    filteredBanners (state) {
      return state.banners.filter(el => {
        return el.status !== 'inactive'
      })
    },
    totalPayment (state) {
      let total = 0
      state.carts.forEach(el => {
        total += el.Product.price * el.quantity
      })
      return total
    },
    filteredCarts (state) {
      return state.carts.filter(el => {
        return el.status !== true
      })
    }
  },
  modules: {
  }
})
