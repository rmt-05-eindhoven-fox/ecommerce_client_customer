import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
Vue.use(Vuex)

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
    register (context, payload) {
      return axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    login (context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context, token) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data.data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    addToCart (context, payload) {
      return axios({
        url: '/carts/' + payload.id,
        method: 'POST',
        headers: {
          access_token: payload.token
        }
      })
    },
    fetchProductsInCart (context, token) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data.carts)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    updateQuantity (context, payload) {
      return axios({
        url: '/carts/' + payload.id,
        method: 'PATCH',
        headers: {
          access_token: payload.token
        },
        data: {
          quantity: payload.quantity
        }
      })
    },
    removeCart (context, payload) {
      return axios({
        url: '/carts/' + payload.id,
        method: 'DELETE',
        headers: {
          access_token: payload.token
        }
      })
    }
  },
  modules: {
  }
})
