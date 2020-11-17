import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    total: 0
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload.productList
    },
    SET_CARTS (state, payload) {
      let totalPrice = 0
      payload.cartList.forEach(el => {
        totalPrice = totalPrice + (el.Product.price * el.quantity)
      })
      state.total = totalPrice
      state.carts = payload.cartList
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_PRODUCTS', data)
          // console.log(this.products)
        })
        .catch(err => {
          console.log(err.response.data, 'fetch product')
        })
    },
    fetchCart (context) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyYWZpQGdtYWlsLmNvbSIsImlhdCI6MTYwNTU4MTA5MX0.EEP695lHflnV9ALGDna1-KIUk4epaEU-4VK_LndAYzo'
        }
      })
        .then(({ data }) => {
          context.commit('SET_CARTS', data)
        })
        .catch(err => {
          console.log(err.response.data, 'fetch product')
        })
    },
    addCart (context, id) {
      axios({
        url: `/carts/${id}`,
        method: 'POST',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyYWZpQGdtYWlsLmNvbSIsImlhdCI6MTYwNTU4MTA5MX0.EEP695lHflnV9ALGDna1-KIUk4epaEU-4VK_LndAYzo'
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    changePage (context, path) {
      router.push(`/${path}`)
    },
    cartUpdate (context, payload) {
      return axios({
        url: `/carts/${payload.id}`,
        method: 'PUT',
        data: {
          quantity: payload.quantity
        },
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyYWZpQGdtYWlsLmNvbSIsImlhdCI6MTYwNTU4MTA5MX0.EEP695lHflnV9ALGDna1-KIUk4epaEU-4VK_LndAYzo'
        }
      })
    },
    cartRemove (context, id) {
      return axios({
        url: `/carts/${id}`,
        method: 'DELETE',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyYWZpQGdtYWlsLmNvbSIsImlhdCI6MTYwNTU4MTA5MX0.EEP695lHflnV9ALGDna1-KIUk4epaEU-4VK_LndAYzo'
        }
      })
    },
    checkout (context) {
      return axios({
        url: '/carts',
        method: 'PUT',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyYWZpQGdtYWlsLmNvbSIsImlhdCI6MTYwNTU4MTA5MX0.EEP695lHflnV9ALGDna1-KIUk4epaEU-4VK_LndAYzo'
        }
      })
    }
  },
  modules: {
  }
})
