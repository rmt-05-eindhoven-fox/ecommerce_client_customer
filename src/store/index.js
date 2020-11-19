import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    banners: [],
    products: [],
    carts: []
  },
  mutations: {
    setCategory (state, payload) {
      state.categories = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    postRegister (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log(err))
    },
    postLogin (context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchCategory (context) {
      axios({
        url: '/categories',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setCategory', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanner (context) {
      axios({
        url: '/banners',
        method: 'GET'
      })
        .then(({ data }) => {
          this.commit('setBanners', data)
        })
        .catch(err => console.log(err))
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          this.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      axios({
        url: '/carts',
        method: 'POST',
        headers: {
          token: localStorage.token
        },
        data: {
          ProductId: payload.ProductId
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts (context) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
        })
        .catch(err => console.log(err))
    },
    deleteCart (context, payload) {
      axios({
        url: '/carts/' + payload,
        method: 'DELETE',
        headers: {
          token: localStorage.token
        }
      })
        .then(data => {
          console.log('Delete berhasil')
        })
        .catch(err => console.log(err))
    },
    decreaseCart (context, payload) {
      axios({
        url: '/carts/decrease/' + payload,
        method: 'DELETE',
        headers: {
          token: localStorage.token
        }
      })
        .then(data => {
          console.log('decrease berhasil!')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
