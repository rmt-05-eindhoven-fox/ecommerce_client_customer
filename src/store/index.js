import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    errors: [],
    alerts: '',
    isLogin: false,
    user: ''
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setCart (state, data) {
      state.carts = data
    },
    error (state, data) {
      state.errors = data
    },
    alert (state, data) {
      state.alerts = data
    },
    setStatus (state, data) {
      state.isLogin = data
    },
    setUser (state, data) {
      state.user = data
    }
  },
  actions: {
    userRegister (context, data) {
      return axios({
        method: 'post',
        url: '/register',
        data: data
      })
    },
    userLogin (context, data) {
      return axios({
        method: 'post',
        url: '/login',
        data: data
      })
    },
    fetchAllProduct (context) {
      axios({
        method: 'get',
        url: '/ecomm-client/product',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          context.commit('setProducts', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, data) {
      return axios({
        method: 'post',
        url: '/ecomm-client',
        headers: {
          token: localStorage.getItem('token')
        },
        data: data
      })
    },
    updateCart (context, data) {
      return axios({
        method: 'patch',
        url: '/ecomm-client',
        headers: {
          token: localStorage.getItem('token')
        },
        data: data
      })
    },
    fetchCart (context) {
      axios({
        method: 'get',
        url: '/ecomm-client',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(res => {
          context.commit('setCart', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, id) {
      return axios({
        method: 'delete',
        url: '/ecomm-client',
        headers: {
          token: localStorage.getItem('token')
        },
        data: { id }
      })
    }
  },
  modules: {
  }
})
