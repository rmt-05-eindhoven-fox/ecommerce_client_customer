import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'
import route from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: false,
    errorMessage: [],
    cart: [],
    cartShown: false,
    products: [],
    banners: [],
    carts: []
  },
  mutations: {
    CLOSE_ERROR (state, data) {
      state.error = false
    },
    CLOSE_CART (state, data) {
      state.cartShown = false
    },
    SHOW_CART (state, data) {
      state.cartShown = true
    },
    ERROR (state, data) {
      state.error = true
      if (typeof (data) === 'string') {
        state.errorMessage = [data]
      } else {
        state.errorMessage = data
      }
      setTimeout(() => {
        state.errorMessage = []
        state.error = false
      }, 5000)
    },
    GET_PRODUCTS (state, data) {
      state.products = data
    },
    BANNERS (state, data) {
      data = JSON.parse(JSON.stringify(data, null, 2))
      data = data.map(el => {
        if (el.shown) {
          return el
        }
      })
      state.banners = data
    },
    ADD_CART (state, data) {
      const lama = JSON.parse(JSON.stringify(state.carts, null, 2))
      lama.push(data)
      state.carts = lama
    },
    CARTS (state, data) {
      state.carts = data
    }
  },
  actions: {
    register (context, data) {
      axios({
        url: '/register',
        data,
        method: 'post'
      }).then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        route.push('/')
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    products (context, data) {
      axios({
        url: '/products',
        method: 'get'
      }).then(({ data }) => {
        context.commit('GET_PRODUCTS', data)
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    login (context, data) {
      axios({
        url: '/login',
        method: 'post',
        data
      }).then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        route.push('/')
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    banners (context, data) {
      axios({
        url: '/banners',
        method: 'get'
      }).then(({ data }) => {
        // console.log(JSON.stringify(data, null, 2))
        context.commit('BANNERS', data.banners)
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    addToCart (context, data) {
      if (!data.amount) data.amount = 1
      axios({
        url: '/transactions',
        method: 'post',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          ProductId: data.id, amount: data.amount
        }
      }).then(({ data }) => {
        context.commit('ADD_CART', data.cart)
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    getCart (context, data) {
      axios({
        url: '/transactions',
        method: 'get',
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(({ data }) => {
        context.commit('CARTS', data.carts)
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    }
  },
  getters: {
    categories (state) {
      const data = JSON.parse(JSON.stringify(state.products, null, 2))
      const category = []
      data.forEach(el => {
        if (!category.includes(el.category)) category.push(el.category)
      })
      return category
    },
    perCategory: state => name => {
      const data = JSON.parse(JSON.stringify(state.products, null, 2))
      const category = []
      data.forEach(el => {
        if (el.category === name) category.push(el)
      })
      return category
    },
    logged () {
      return Boolean(localStorage.getItem('access_token'))
    }
  },
  modules: {
  }
})
