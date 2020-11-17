import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    products: []
  },
  mutations: {
    setLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          const token = data.token
          localStorage.setItem('token', token)
          console.log('user is logged in now')
          context.commit('setLoginStatus', true)
          router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    register (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data, 'user succesfully do register')
          router.push({ name: 'Login' })
        })
        .catch((err) => {
          console.log(err.response)
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
    }

  },
  modules: {
  }
})
