import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from '../axios/axiosInstance'
import productStore from './productStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorLogin: {},
    errorReg: '',
    isLogin: 'no'
  },
  mutations: {
    handleAxiosError (state, error) {
      if (error.errorLogin) {
        // console.log('err mutation')
        // console.log(error.errorLogin)
        state.errorLogin = error.errorLogin
      }
      if (error.errorReg) {
        state.errorReg = error.errorReg
      }
      setTimeout(() => {
        state.errorLogin = {}
        state.errorReg = ''
      }, 5000)
    },
    login (state) {
      state.errorLogin = {}
      if (localStorage.getItem('access_token')) {
        state.isLogin = 'yes'
      } else {
        state.isLogin = 'no'
      }
    },
    LOGOUT (state) {
      localStorage.removeItem('access_token')
      state.isLogin = 'no'
    }
  },
  actions: {
    login (_, payload) {
      console.log('=========== ===========')
      return axiosInstance({
        url: '/login',
        method: 'POST',
        data: payload
      })
      // .then(({ data }) => {
      //   console.log(data)
      //   localStorage.setItem('access_token', data.access_token)
      //   commit('login')
      // })
      // .catch(({ response }) => {
      //   // console.log('err')
      //   // console.log(response.data.msg)
      //   // const payload = { errorLogin: response.data }
      //   commit('handleAxiosError', payload)
      // })
    },
    register (_, payload) {
      console.log('=========== reg ===========')
      return axiosInstance({
        url: '/register',
        method: 'POST',
        data: payload
      })
    }
  },
  modules: {
    productStore
  }
})
