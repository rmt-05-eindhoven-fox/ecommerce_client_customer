import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'
import route from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: false,
    errorMessage: [],
    success: false,
    successMessage: [],
    cartShown: false,
    products: [],
    banners: [],
    carts: [],
    login: Boolean(localStorage.getItem('access_token'))
  },
  mutations: {
    CLOSE_ERROR (state, data) {
      state.error = false
    },
    ERROR (state, data) {
      state.error = true
      if (typeof (data) === 'string') {
        state.errorMessage = [data]
      } else {
        state.errorMessage = data
      }
      setTimeout(() => {
        state.errorMessage = []
        state.error = false
      }, 5000)
    },
    CLOSE_SUCCESS (state, data) {
      state.success = false
    },
    SUCCESS (state, data) {
      state.success = true
      if (typeof (data) === 'string') {
        state.successMessage = [data]
      } else {
        state.successMessage = data
      }
      setTimeout(() => {
        state.successMessage = []
        state.success = false
      }, 5000)
    },
    CLOSE_CART (state, data) {
      state.cartShown = false
    },
    SHOW_CART (state, data) {
      state.cartShown = true
    },
    GET_PRODUCTS (state, data) {
      state.products = data
    },
    BANNERS (state, data) {
      data = JSON.parse(JSON.stringify(data, null, 2))
      const banner = []
      data.forEach(el => {
        if (el.shown) {
          banner.push(el)
        }
      })
      state.banners = banner
    },
    ADD_CART (state, data) {
      const lama = JSON.parse(JSON.stringify(state.carts, null, 2))
      lama.push(data)
      state.carts = lama
    },
    CARTS (state, data) {
      state.carts = data
    },
    LOGIN (state, data) {
      state.login = true
    },
    LOGOUT (state, data) {
      state.login = false
    }
  },
  actions: {
    register (context, data) {
      axios({
        url: '/register',
        data,
        method: 'post'
      }).then(({ data }) => {
        context.commit('SUCCESS', 'User logined successfully')
        context.commit('LOGIN')
        localStorage.setItem('access_token', data.access_token)
        route.push('/')
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    products (context, data) {
      axios({
        url: '/products',
        method: 'get'
      }).then(({ data }) => {
        context.commit('GET_PRODUCTS', data)
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    login (context, data) {
      axios({
        url: '/login',
        method: 'post',
        data
      }).then(({ data }) => {
        context.commit('SUCCESS', 'User logined successfully')
        context.commit('LOGIN')
        localStorage.setItem('access_token', data.access_token)
        route.push('/')
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    banners (context, data) {
      axios({
        url: '/banners',
        method: 'get'
      }).then(({ data }) => {
        context.commit('BANNERS', data.banners)
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    addToCart ({ commit, dispatch, state }, data) {
      if (!localStorage.getItem('access_token')) commit('ERROR', 'You have to login first')
      else {
        let amount = 1
        JSON.parse(JSON.stringify(state.carts, null, 2)).forEach(el => {
          if (el.ProductId === data.id) {
            amount = el.amount + amount
          }
        })
        axios({
          url: '/transactions',
          method: 'post',
          headers: { access_token: localStorage.getItem('access_token') },
          data: {
            ProductId: data.id, amount
          }
        }).then(({ data }) => {
          // context.commit('ADD_CART', data.cart)
          dispatch('getCart')
          commit('SUCCESS', 'Add to cart successfully')
        }).catch(({ response }) => {
          commit('ERROR', response.data.msg)
        })
      }
    },
    getCart (context, data) {
      if (!localStorage.getItem('access_token')) context.commit('ERROR', 'You have to login first')
      else {
        axios({
          url: '/transactions',
          method: 'get',
          headers: { access_token: localStorage.getItem('access_token') }
        }).then(({ data }) => {
          context.commit('CARTS', data.carts)
        }).catch(({ response }) => {
          context.commit('ERROR', response.data.msg)
        })
      }
    },
    deleteCart (context, id) {
      axios({
        url: '/transactions',
        method: 'delete',
        headers: { access_token: localStorage.getItem('access_token') },
        data: { ProductId: id }
      }).then(({ data }) => {
        context.commit('SUCCESS', 'Product deleted successfully')
        // context.commit('CARTS', data.carts)
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    },
    checkout ({ dispatch, commit }, data) {
      axios({
        url: '/transactions',
        method: 'patch',
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(({ data }) => {
        dispatch('getCart')
        commit('SUCCESS', 'Cart checkouted successfully')
        commit('CLOSE_CART', 'Cart checkouted successfully')
      }).catch(({ response }) => {
        commit('ERROR', response.data.msg)
      })
    },
    editAmount (context, data) {
      const amount = +data.amount
      const { ProductId } = data
      axios({
        url: '/transactions',
        method: 'post',
        headers: { access_token: localStorage.getItem('access_token') },
        data: { amount, ProductId }
      }).then(({ data }) => {
      }).catch(({ response }) => {
        context.commit('ERROR', response.data.msg)
      })
    }
  },
  getters: {
    categories (state) {
      const data = JSON.parse(JSON.stringify(state.products, null, 2))
      const category = []
      data.forEach(el => {
        if (!category.includes(el.category)) category.push(el.category)
      })
      return category
    },
    perCategory: state => name => {
      const data = JSON.parse(JSON.stringify(state.products, null, 2))
      const category = []
      data.forEach(el => {
        if (el.category === name) category.push(el)
      })
      return category
    },
    search: state => cari => {
      const data = JSON.parse(JSON.stringify(state.products, null, 2))
      const category = []
      data.forEach(el => {
        if (el.name.toLowerCase().includes(cari.toLowerCase())) category.push(el)
      })
      return category
    }
  },
  modules: {
  }
})
