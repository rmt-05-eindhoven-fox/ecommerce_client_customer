import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'

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
      const { email, password } = payload
      axios({
        url: '/users/register',
        method: 'post',
        data: {
          email, password
        }
      })
        .then(res => {
          console.log('berhasil')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios({
        url: '/users/login',
        method: 'post',
        data: {
          email, password
        }
      })
        .then(({ data }) => {
          console.log('berhasil')
          const token = data.access_token
          localStorage.setItem('token', token)
          router.push('/product')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
    },
    addToCart (context, ProductId) {
      axios({
        url: '/carts',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('token')
        },
        data: {
          ProductId
        }
      })
        .then(res => {
          console.log('berhasil')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts (context) {
      axios({
        url: '/carts',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (context, payload) {
      const { id, quantity } = payload

      if (quantity) {
        axios({
          url: `/carts/${id}`,
          method: 'patch',
          headers: {
            access_token: localStorage.getItem('token')
          },
          data: {
            quantity: quantity
          }
        })
          .then(res => {
            console.log('berhasil')
            context.dispatch('fetchCarts')
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        context.dispatch('deleteCart', id)
      }
    },
    deleteCart (context, id) {
      axios({
        url: `/carts/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log('berhasil')
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout (context, payload) {
      axios({
        url: '/carts',
        method: 'put',
        headers: {
          access_token: localStorage.getItem('token')
        },
        data: {
          carts: payload
        }
      })
        .then(res => {
          console.log('berhasil')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    totalPrice: state => {
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
