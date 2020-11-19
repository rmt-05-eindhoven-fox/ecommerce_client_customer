import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    cart: [],
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload
    },
    setProducts(state, payload) {
      state.products = payload
    },
    setCart(state, payload) {
      state.cart = payload
    }
  },
  actions: {
    fetchCategories(context) {
      axios({
          url: '/categories',
          method: "get"
        })
        .then(({
          data
        }) => {
          context.commit('setCategories', data.foundAllCategory)
        })
        .catch(err => {
          res.send(err.response.data.msg);
        })
    },
    fetchProducts(context) {
      axios({
          url: '/products',
          method: "get"
        })
        .then(({
          data
        }) => {
          context.commit('setProducts', data.foundAllProduct)
        })
        .catch(err => {
          res.send(err.response.data.msg);
        })
    },
    addCart(context, payload) {
      return axios({
        url: '/carts',
        method: "post",
        headers: {
          access_token: payload.token
        },
        data: {
          ProductId: payload.ProductId
        }
      })
    },
    fetchCart(context, token) {
      axios({
        url: '/carts',
        method: "get",
        headers: {
          access_token: token
        }
      })
      .then(({
        data
      }) => {
        context.commit('setCart', data.foundAllCart)
      })
      .catch(err => {
        res.send(err.response.data.msg);
      })
    },
    updateCart(context, payload) {
      return axios({
        url: `/carts/${payload.cartId}`,
        method: "put",
        headers: {
          access_token: payload.token
        },
        data: {
          marking: payload.marking
        }
      })
    },
    deleteCart(context, payload) {
      return axios({
        url: `/carts/${payload.cartId}`,
        method: "delete",
        headers: {
          access_token: payload.token
        }
      })
    }
  },
  modules: {
  },
  getters: {
    numberOfItems (state) {
      return state.cart.length
    }
  }
})
