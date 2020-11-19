import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    categories: [],
    carts: [],
    total: 0,
    isLogin: false
  },
  mutations: {
    setBanners (state, payload) {
      state.banners = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    setTotal (state, payload) {
      state.total = payload
    },
    setLogin (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    signin (context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: payload
      })
    },
    signup (context, payload) {
      return axios({
        url: '/register',
        method: 'POST',
        data: payload
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
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategories (context) {
      axios({
        url: '/categories',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setCategories', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      const token = localStorage.getItem('token')
      const id = payload.ProductId
      axios({
        url: `/products/${id}`,
        method: 'POST',
        data: payload,
        headers: {
          token
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context) {
      const token = localStorage.getItem('token')
      if (token) {
        axios({
          url: '/products/cart',
          method: 'GET',
          headers: {
            token
          }
        })
          .then(({ data }) => {
            context.commit('setCarts', data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    updateAmount (context, payload) {
      const token = localStorage.getItem('token')
      const id = payload.id
      axios({
        url: `/products/cart/${id}`,
        method: 'PATCH',
        data: payload,
        headers: {
          token
        }
      })
        .then(() => {
          console.log('Success')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      const token = localStorage.getItem('token')
      const id = payload
      return axios({
        url: `/products/cart/${id}`,
        method: 'DELETE',
        data: payload,
        headers: {
          token
        }
      })
    }
  },
  modules: {
  }
})
