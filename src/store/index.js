import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    total: 0,
    isLogin: false,
    email: ''
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
    },
    SET_LOGIN (state, token) {
      if (token) {
        state.isLogin = true
      } else {
        state.isLogin = false
      }
    },
    SET_EMAIL (state, payload) {
      if (payload) {
        state.email = payload.email
      } else {
        state.email = ''
      }
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        url: '/productList',
        method: 'GET'
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('SET_PRODUCTS', data)
          context.commit('SET_LOGIN', localStorage.getItem('access_token'))
          context.commit('SET_EMAIL', data)
          if (localStorage.getItem('access_token')) {
            context.dispatch('fetchCart')
          }
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
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_CARTS', data)
          context.commit('SET_LOGIN', localStorage.getItem('access_token'))
          context.commit('SET_EMAIL', data)
        })
        .catch(err => {
          console.log(err.response.data, 'fetch cart')
        })
    },
    addCart (context, id) {
      return axios({
        url: `/carts/${id}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.dispatch('fetchCart')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Added to cart'
          })
        })
        .catch(err => {
          console.log(err.response.data)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: (err.response.data.msg)
          })
        })
    },
    changePage (context, path) {
      router.push(`/${path}`).catch(() => {})
    },
    cartUpdate (context, payload) {
      return axios({
        url: `/carts/${payload.id}`,
        method: 'PUT',
        data: {
          quantity: payload.quantity
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    cartRemove (context, id) {
      return axios({
        url: `/carts/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    checkout (context) {
      return axios({
        url: '/carts',
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
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
    logout (context) {
      localStorage.removeItem('access_token')
      // router.push('/')
      context.commit('SET_LOGIN', localStorage.getItem('access_token'))
      context.commit('SET_EMAIL')
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Signed out successfully'
      })
    }
  },
  modules: {
  }
})
