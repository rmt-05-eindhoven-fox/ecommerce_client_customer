import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'
import money from '../helpers/money'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Products
    products: [],
    // Categories
    categories: [],
    // Wishlist
    wishlist: [],
    // Carts
    carts: { cart: [] }
  },
  mutations: {
    setProducts (state, payload) {
      payload.forEach(el => {
        el.moneyFormat = money(el.price)
      })
      state.products = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setWishlist (state, payload) {
      payload.forEach(el => {
        el.moneyFormat = money(el.Product.price)
      })
      state.wishlist = payload
    },
    setCarts (state, payload) {
      payload.cart.forEach(el => {
        el.moneyFormat = money(el.Product.price)
      })
      state.carts = payload
    }
  },
  actions: {
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/registerCustomer',
        data: {
          email: payload.user.email_register,
          password: payload.user.password_register
        }
      })
        .then((result) => {
          router.push({ name: 'Login' })
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/loginCustomer',
        data: {
          email: payload.user.email_login,
          password: payload.user.password_login
        }
      })
        .then((result) => {
          const accessToken = result.data.access_token
          const loginUser = result.data.email
          localStorage.setItem('access_token', accessToken)
          localStorage.setItem('login_user', loginUser)

          Vue.swal({
            position: 'center',
            icon: 'success',
            title: 'Welcome to IKEHA',
            showConfirmButton: false,
            timer: 1750
          })

          router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    readProducts (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/productsCustomer',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.commit('setProducts', result.data)
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    readCategories (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/categoriesCustomer',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.commit('setCategories', result.data)
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    addToWishlist (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/wishlist',
        headers: {
          access_token: accessToken
        },
        data: {
          ProductId: +payload
        }
      })
        .then((result) => {
          Vue.swal(
            'Added!',
            'Added product to your wihlist!.',
            'success'
          )
          context.dispatch('readProducts')
          context.dispatch('readWishlist')
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    readWishlist (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/wishlist',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.commit('setWishlist', result.data)
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    deleteWishlist (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      Vue.swal({
        title: 'Remove this product from wishlist?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios({
              url: `/wishlist/${+payload}`,
              method: 'DELETE',
              headers: {
                access_token: accessToken
              }
            })
              .then((result) => {
                Vue.swal(
                  'Removed!',
                  'Your product has been removed from wishlist.',
                  'success'
                )
                context.dispatch('readWishlist')
              })
              .catch((err) => {
                console.log(err.response.data.msg)
                Vue.swal(
                  'Error!',
                  err.response.data.msg,
                  'error'
                )
              })
          }
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    addToCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: accessToken
        },
        data: {
          ProductId: +payload
        }
      })
        .then((result) => {
          Vue.swal(
            'Added!',
            'Added product to your cart!.',
            'success'
          )
          context.dispatch('readProducts')
          context.dispatch('readCart')
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    readCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.commit('setCarts', result.data)
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    updateCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `/carts/${+payload.id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          quantity: payload.quantity
        }
      })
        .then((result) => {
          context.dispatch('readCart')
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    deleteCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      Vue.swal({
        title: 'Remove this product from cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios({
              url: `/carts/${+payload}`,
              method: 'DELETE',
              headers: {
                access_token: accessToken
              }
            })
              .then((result) => {
                Vue.swal(
                  'Removed!',
                  'Your product has been removed from cart.',
                  'success'
                )
                context.dispatch('readCart')
              })
              .catch((err) => {
                console.log(err.response.data.msg)
                Vue.swal(
                  'Error!',
                  err.response.data.msg,
                  'error'
                )
              })
          }
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    checkout (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      payload.forEach(cart => {
        axios({
          method: 'PUT',
          url: `/carts/${+cart.id}`,
          headers: {
            access_token: accessToken
          },
          data: {
            quantity: cart.quantity,
            ProductId: cart.ProductId
          }
        })
          .then((result) => {
            context.dispatch('readCart')
          })
          .catch((err) => {
            console.log(err.response.data.msg)
            Vue.swal(
              'Error!',
              err.response.data.msg,
              'error'
            )
          })
      })
      Vue.swal(
        'Checkout!',
        'Your product has been checkout from cart.',
        'success'
      )
    },
    increment (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `/carts/${+payload.id}/incrementQuantity`,
        headers: {
          access_token: accessToken
        },
        data: {
          quantity: payload.quantity,
          ProductId: payload.ProductId
        }
      })
        .then((result) => {
          context.dispatch('readCart')
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    decrement (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `/carts/${+payload.id}/decrementQuantity`,
        headers: {
          access_token: accessToken
        },
        data: {
          quantity: payload.quantity
        }
      })
        .then((result) => {
          context.dispatch('readCart')
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    }
  },
  modules: {
  },
  getters: {
    filteredProductsByCategory: (state) => (selectedCategory) => {
      return state.products.filter(product => {
        return product.CategoryId === selectedCategory
      })
    }
  }
})
