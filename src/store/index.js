import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    totalPrice: ''
  },
  mutations: {
    fetchProduct (state, result) {
      state.products = result.data.result
    },

    fetchCart (state, result) {
      state.carts = result.data.carts
      state.totalPrice = result.data.total
    }
  },
  actions: {
    signIn (context, payload) {
      return axios({
        url: '/users/signIn',
        method: 'POST',
        data: payload
      })
    },

    signUp (context, payload) {
      return axios({
        url: '/users/signUp',
        method: 'POST',
        data: payload
      })
    },

    fetchProduct (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(result => {
          context.commit('fetchProduct', result)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchCart (context) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(result => {
          context.commit('fetchCart', result)
        })
        .catch(err => {
          console.log(err)
        })
    },

    putToCart (context, id) {
      return axios({
        url: '/carts/' + id,
        method: 'POST',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },

    deleteCart (context, id) {
      return axios({
        url: '/carts/' + id,
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },

    minusCart (context, id) {
      return axios({
        url: '/carts/minus/' + id,
        method: 'PATCH',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },

    checkout (context) {
      return axios({
        url: '/carts',
        method: 'PATCH',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  modules: {
  }
})
