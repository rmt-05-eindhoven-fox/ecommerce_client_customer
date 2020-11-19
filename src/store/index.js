import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    productFetch (state, payload) {
      state.products = payload
    },
    cartFetch (state, payload) {
      state.carts = payload
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
      }).then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
        router.push('/dashboard')
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
      }).then(res => {
        router.push('/')
      }).catch(err => {
        console.log(err)
      })
    },
    fetchProduct (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          token
        }
      }).then(({ data }) => {
        context.commit('productFetch', data)
      }).catch(err => {
        console.log(err)
      })
    },
    addToCart (context, payload) {
      const token = localStorage.getItem('token')
      axios({
        url: '/carts',
        method: 'POST',
        headers: {
          token
        },
        data: {
          ProductId: payload.ProductId
        }
      }).then(({ data }) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    fetchCart (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          token
        }
      }).then(({ data }) => {
        context.commit('cartFetch', data)
      }).catch(err => {
        console.log(err)
      })
    },
    patchQuantity (context, payload) {
      const token = localStorage.getItem('token')
      console.log(payload, '<<<< store payload')
      axios({
        url: `/carts/${payload.id}`,
        method: 'patch',
        headers: {
          token
        },
        data: {
          quantity: payload.quantity
        }
      }).then(({ data }) => {
        context.dispatch('fetchCart')
      }).catch(err => {
        console.log(err)
      })
    },
    deleteCast (context, id) {
      const token = localStorage.getItem('token')
      axios({
        url: `/carts/${id}`,
        method: 'delete',
        headers: {
          token
        }
      }).then(({ data }) => {
        context.dispatch('fetchCart')
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    logout () {
      localStorage.removeItem('token')
      router.push({ name: 'Login' })
    }
  },
  getters: {
    categories: state => data => {
      const dataJson = JSON.parse(JSON.stringify(state.products, null, 3))
      const category = []
      dataJson.forEach(e => {
        if (e.category === data) {
          category.push(e)
        }
      })
      return category
    },
    totalPrice (state) {
      let total = 0
      for (let i = 0; i < state.carts.length; i++) {
        total += (state.carts[i].quantity * state.carts[i].Product.price)
      }
      return total
    }
  },
  modules: {
  }
})
