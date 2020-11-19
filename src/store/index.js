import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    carts: []
  },
  mutations: {
    listProducts (state, payload) {
      state.products = payload
    },
    listBanners (state, payload) {
      state.banners = payload
    },
    listCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    // login (context, payload) {
    //   return axios({
    //     url: '/login',
    //     method: 'POST',
    //     data: {
    //       email: payload.email,
    //       password: payload.password
    //     }
    //   })
    // },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
      })
        .then(({ data }) => {
          context.commit('listProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    }, 
    fetchBanners (context) {
      axios({
        url: '/banners',
        method: 'GET',
      })
        .then(({ data }) => {
          context.commit('listBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    }, 
    showProduct (context, payload) {
      axios({
        url: '/products/' + payload,
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchCarts (context) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('listCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    addCart (context, payload) {
      return axios({
        url: '/carts',
        method: 'POST',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          ProductId: payload
        }
      })
    },

    updateCart (context, payload) {
      axios({
        url: '/carts',
        method: 'PATCH',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          id: payload.id,
          quantity: payload.quantity
        }
      })
      .then(({ data }) => {
        console.log('berhasil update')
      })
      .catch(err => {
        console.log(err)
      })
    },

    deleteCart (context, payload) {
      axios({
        url: '/carts/' + payload,
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          console.log('Data Deleted!')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
