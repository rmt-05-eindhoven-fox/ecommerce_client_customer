import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios'
import router from '../router'

Vue.use(Vuex)

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ0ZXN0dXNlckBtYWlsLmNvbSIsImlhdCI6MTYwNTczOTQ4Mn0.ve_AmttQnE5Y5rqBuW_7AZXuPRIvWUzbRdOmK1Q1JTk'
export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    fetchAllProducts (context) {
      return axios
        .get('customers')
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchAllCarts (context) {
      return axios
        .get('carts', {
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
      axios({
        url: 'carts/add-cart',
        method: 'POST',
        data: {
          ProductId: payload.ProductId,
          quantity: payload.quantity
        },
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
          router.push({ name: 'Cart' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      axios({
        url: `carts/${payload.CartId}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        },
        data: {
          ProductId: payload.ProductId
        }
      })
    },
    removeFromCart (context, payload) {
      axios({
        url: `carts/items/${payload.CartId}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        },
        data: {
          ProductId: payload.ProductId
        }
      })
    },
    login(context, payload) {
      return axios({
        url: 'customers/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          const accessToken = data.access_token
          localStorage.setItem('access_token', accessToken)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout (context) {
      localStorage.removeItem('access_token')
    }
  },
  modules: {
  }
})
