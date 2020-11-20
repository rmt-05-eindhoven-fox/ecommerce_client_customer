import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    categories: [],
    products: [],
    carts: [],
    wishlists: [],
    isLoggedIn: {
      status: false,
      email: ''
    },
    selectedCategory: ''
  },
  mutations: {
    SET_isLoggedIn (state, payload) {
      state.isLoggedIn = payload
    },
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    },
    SET_SELECTED_CATEGORY (state, payload) {
      state.selectedCategory = payload
    },
    SET_CARTS (state, payload) {
      state.carts = payload
    },
    SET_WISHLISTS (state, payload) {
      state.wishlists = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('email', data.email)
          console.log('login success')
          const payload = {
            status: true,
            email: data.email
          }
          context.commit('SET_isLoggedIn', payload)
          router.push({ name: 'Dashboard' })
          Swal.fire(
            'Login Successful',
            'Welcome ' + data.email,
            'success'
          )
        })
        .catch(({ response }) => {
          console.log(response.data)
          const err = response.data.msg
          Swal.fire(
            'Login Failed',
            err,
            'error'
          )
        })
    },
    register (context, payload) {
      axios({
        url: '/register',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          Swal.fire(
            'Register Succeed',
            data.email + ' registered succesfully',
            'success'
          )
          router.push({ name: 'Login' })
        })
        .catch(({ response }) => {
          console.log(response.data)
          const err = response.data.msg
          Swal.fire(
            'Register Failed',
            err,
            'error'
          )
        })
    },
    fetchBanners (context) {
      axios({
        url: '/customer-banners',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_BANNERS', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    fetchProducts (context) {
      axios({
        url: '/customer-products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    fetchCategories (context) {
      axios({
        url: '/customer-categories',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_CATEGORIES', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    fetchCarts (context) {
      const token = localStorage.getItem('access_token')
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('SET_CARTS', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    addCart (context, ProductId) {
      const token = localStorage.getItem('access_token')
      // console.log(ProductId)
      axios({
        url: '/carts',
        method: 'POST',
        headers: {
          access_token: token
        },
        data: {
          ProductId: ProductId
        }
      })
        .then(({ data }) => {
          Swal.fire(
            'Cart Added',
            'Product added to cart succesfully',
            'success'
          )
        })
        .catch(({ response }) => {
          console.log(response.data)
          const err = response.data.msg
          Swal.fire(
            'Add Cart Failed',
            err,
            'error'
          )
        })
    },
    updateCart (context, payload) {
      const token = localStorage.getItem('access_token')
      // console.log(payload)
      return axios({
        url: `/carts/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: token
        },
        data: {
          order: payload.order
        }
      })
    },
    deleteCart (context, payload) {
      const token = localStorage.getItem('access_token')
      // console.log(payload)
      return axios({
        url: `/carts/${payload.id}`,
        method: 'DELETE',
        headers: {
          access_token: token
        }
      })
    },
    fetchWishlists (context) {
      const token = localStorage.getItem('access_token')
      axios({
        url: '/wishlists',
        method: 'GET',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('SET_WISHLISTS', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    deleteWishlist (context, payload) {
      const token = localStorage.getItem('access_token')
      // console.log(payload)
      return axios({
        url: `/wishlists/${payload.id}`,
        method: 'DELETE',
        headers: {
          access_token: token
        }
      })
    },
    addWishlist (context, ProductId) {
      const token = localStorage.getItem('access_token')
      // console.log(ProductId)
      axios({
        url: '/wishlists',
        method: 'POST',
        headers: {
          access_token: token
        },
        data: {
          ProductId: ProductId
        }
      })
        .then(({ data }) => {
          Swal.fire(
            'Wishlist Added',
            'Product added to wishlist',
            'success'
          )
        })
        .catch(({ response }) => {
          console.log(response.data)
          const err = response.data.msg
          Swal.fire(
            'Add Wishlist Failed',
            err,
            'error'
          )
        })
    }
  },
  modules: {
  }
})
