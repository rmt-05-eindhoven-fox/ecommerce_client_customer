import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    itemCart: [],
    cartUser: []
  },
  mutations: {
    SET_PRODUCT (state, payload) {
      state.products = payload
    },
    SET_ITEM_CART (state, payload) {
      state.itemCart = payload
    },
    GET_ITEM_CART (state, payload) {
      state.cartUser = payload
    }
  },
  actions: {
    getProduct (context) {
      axios({
        url: '/product',
        method: 'get'
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('SET_PRODUCT', data)
        })
        .catch(err => {
          console.log(err.response.message)
        })
    },
    getItemToCart (context, payload) {
      axios({
        url: `/cart/${payload.id}`,
        method: 'post',
        data: {
          ProductId: payload.id
        },
        headers: {
          token: payload.token
        }
      })
        .then(({ data }) => {
          context.commit('SET_ITEM_CART', data)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },
    retrieveUserCart (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/cart',
        method: 'get',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          context.commit('GET_ITEM_CART', data.cartUser)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    checkoutCart (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/checkout',
        method: 'post',
        headers: { token },
        data: {
          cartUser: this.state.cartUser
        }
      })
        .then(({ data }) => {
          console.log(data.message)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    }
  },
  modules: {
  }
})
