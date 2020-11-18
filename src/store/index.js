import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCT (state, payload) {
      state.products = payload
    }
  },
  actions: {
    getProduct (context) {
      axios({
        url: '/product',
        method: 'get'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_PRODUCT', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
