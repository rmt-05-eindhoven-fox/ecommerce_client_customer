import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axiosInstance.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    totalPrice: 0
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    setTotalPrice (state, payload) {
      let total = 0
      let temp = 0
      payload.forEach(value => {
        temp = value.Product.price * value.qty
        total += temp
      })
      state.totalPrice = total
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          commit('setProducts', data.products)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/loginCustomer',
        data: payload
      })
    },
    register ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
    },
    fetchCart ({ commit }) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('setCarts', data.carts)
          commit('setTotalPrice', data.carts)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
    },
    updateCart ({ commit }, payload) {
      return axios({
        method: 'PUT',
        url: '/carts/' + payload.CartId,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
    },
    deleteCart ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: '/carts/' + payload.CartId,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
