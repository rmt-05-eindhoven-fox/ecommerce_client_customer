import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    products: [],
    categories: [],
    currentCategory: '',
    loadingProduct: false,
    detailProduct: '',
    carts: []
  },
  mutations: {
    setBanners (state, payload) {
      state.banners = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    changeCurrentCategory (state, payload) {
      state.currentCategory = payload
    },
    loadingProduct (state, payload) {
      state.loadingProduct = payload
    },
    setProduct (state, payload) {
      state.detailProduct = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        url: '/login',
        method: 'post',
        data: payload
      })
    },
    register (context, payload) {
      return axios({
        url: '/register',
        method: 'post',
        data: payload
      })
    },
    fetchBanners (context) {
      axios({
        url: '/banners',
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context) {
      return axios({
        url: '/products',
        method: 'get'
      })
    },
    fetchCategories (context) {
      return axios({
        url: '/categories',
        method: 'get'
      })
    },
    fetchCategoryProducts (context, payload) {
      axios({
        url: `/products?category=${payload}`,
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('loadingProduct', false)
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    searchProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/products?search=${payload}`,
        method: 'get',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('loadingProduct', false)
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    productDetail (context, payload) {
      axios({
        url: `/products/${payload}`,
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/carts',
        method: 'get',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/carts',
        method: 'post',
        headers: {
          access_token: accessToken
        },
        data: payload
      })
    },
    updateCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `/carts/${payload.id}`,
        method: 'patch',
        headers: {
          access_token: accessToken
        },
        data: {
          amount: payload.amount,
          ProductId: payload.ProductId
        }
      })
    },
    deleteCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `/carts/${payload.id}`,
        method: 'delete',
        headers: {
          access_token: accessToken
        }
      })
    }
  },
  modules: {
  }
})
