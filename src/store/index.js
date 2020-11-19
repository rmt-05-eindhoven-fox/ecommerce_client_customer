import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogin: false,
    dataProduct: [],
    dataCart: []
  },
  mutations: {
    SUCCESS_LOGIN (state, payload) {
      state.userLogin = true
      console.log('HAHA')
      router.push({ path: '/' })
    },
    ON_LOGOUT (state, payload) {
      state.userLogin = false
      localStorage.clear()
      router.push({ path: '/login' })
    },
    SET_DATA_PRODUCT (state, payload) {
      state.dataProduct = payload
    },
    SET_DATA_CART (state, payload) {
      state.dataCart = payload
    }
  },
  actions: {
    LOGIN ({ commit }, payload) {
      axios.post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          commit('SUCCESS_LOGIN')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    REGISTER ({ commit }, payload) {
      axios.post('/register', payload)
        .then(() => {
          router.push({ path: '/login' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    GET_DATA_PRODUCT ({ commit }, payload) {
      console.log('ini token', localStorage.access_token)
      axios.get('/products', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('ini dataaa', data)
          commit('SET_DATA_PRODUCT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    GET_LIST_CART ({ commit }, payload) {
      axios.get('/carts', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('masuk data', data)
          commit('SET_DATA_CART', data)
        })
        .catch(err => {
          console.log('masuk error', err)
        })
    },
    addToCart ({ commit }, payload) {
      return axios.post('/carts', {
        dataProduct: payload
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    UPDATE_QUANTITY_CART ({ dispatch }, payload) {
      axios.put(`/carts/${payload.id}`, {
        quantity: payload.quantity
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          dispatch('GET_LIST_CART')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'delete',
        url: `/carts/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
