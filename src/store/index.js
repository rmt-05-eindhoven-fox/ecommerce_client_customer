import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Navbar: false,
    Product: [],
    Cart: []
  },
  mutations: {
    setNavbar (state, payload) {
      state.Navbar = payload
    },

    setProduct (state, payload) {
      state.Product = payload
    },

    checkLogin (state) {
      if (localStorage.getItem('access_token')) {
        state.Navbar = true
      } else {
        state.Navbar = false
      }
    },

    setCart (state, payload) {
      state.Cart = payload
    }
  },
  actions: {
    login (context, payload) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      axios
        .post('/login', {
          email: payload.email,
          password: payload.password
        })
        .then(({ data }) => {
          if (data.role === 'Customer') {
            Toast.fire({
              icon: 'success',
              title: 'Login in successfully'
            })
            localStorage.setItem('access_token', data.access_token)
            context.commit('setNavbar', true)
            router.push({ name: 'ListProduct' })
          } else {
            console.log('not authen')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    register (context, payload) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      axios
        .post('/register', {
          email: payload.email,
          password: payload.password
        })
        .then(({ data }) => {
          Toast.fire({
            icon: 'success',
            title: 'register in successfully'
          })
          router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchProduct (context) {
      axios
        .get('/product')
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => console.log(err))
    },

    fetchCart (context) {
      axios
        .get('/cart', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('setCart', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    addCart (context, payload) {
      return axios
        .post('/cart', {
          ProductId: payload
        },
        {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
    },

    updateCart (context, payload) {
      // console.log(localStorage.getItem('access_token'), 'punya update')
      axios
        .patch('/cart', {
          id: payload.id,
          quantity: payload.quantity
        },
        {
          headers: {
            access_token: localStorage.getItem('access_token')
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
      // console.log(localStorage.getItem('access_token'), 'punya delete')
      return axios
        .delete(`/cart/${payload.id}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
    }
  },
  modules: {
  }
})
