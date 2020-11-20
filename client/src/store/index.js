import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    products: [],
    carts: []
  },
  mutations: {
    SET_BANNER(state, dataBanner){
      state.banners = dataBanner
    },
    SET_PRODUCT(state, dataProduct){
      state.products = dataProduct
    },
    SET_CART(state, dataCart){
      state.carts = dataCart
    }
  },
  actions: {
    logout(context){
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'See you <3!'
          )
          localStorage.clear()
          router.push('/login')
        }
      })
    },
    login(context, dataCust){
      if(dataCust.email === 'admin@mail.com') {
        Swal.fire({
          icon: "error",
          text: 'Customer only'
        })
      }
      else {
        axios({
          url: '/login',
          method: 'post',
          data: {
            email: dataCust.email,
            password: dataCust.password
          }
        }).then(data => {
          if(data){
            const token = data.data.token
            localStorage.setItem('token', token)
            Swal.fire({
              icon: "success",
              title: "Welcome to Apple Store",
              timer: 3000
            })
            router.push('/')
          }
        }).catch(err => {
          Swal.fire({
            icon: "error",
            title: 'Oops...',
            text: err.response.data.errors
          })
        })
      }
    },
    register(context, dataCust){
      axios({
        url: '/register',
        method: 'post',
        data: {
          email: dataCust.email,
          password: dataCust.password
        }
      }).then(data => {
        Swal.fire({
          icon: "success",
          title: "Register successfully",
          timer: 3000
        })
      }).catch(err => {
        Swal.fire({
          icon: "error",
          title: 'Oops...',
          text: err.response.data.errors
        })
      })
    },
    fetchBanner(context){
      axios({
        url: '/banner',
        method: 'get',
        headers: {
          token: localStorage.token
        }
      }).then(banner => {
        context.commit('SET_BANNER', banner.data.data)
      }).catch(err => {
        console.log(err.response)
      })
    },
    fetchProduct(context, category){
      let url;
      if(!category){
        url = '/product'
      }else {
        url = `/product?category=${category.category}`
      }
      axios({
        url: url,
        method: 'get',
        headers: {
          token: localStorage.token
        }
      }).then(product => {
        context.commit('SET_PRODUCT', product.data.dataProduct)
      }).catch(err => {
        console.log(err.response)
      })
    },
    fetchCart(context){
      axios({
        url: '/cart',
        method: 'get',
        headers: {
          token: localStorage.token
        }
      }).then(cart => {
        context.commit('SET_CART', cart.data.data)
      }).catch(err => {
        console.log(err.response)
      })
    },
    deleteCart(context, id){
      axios({
        url: `/cart/${id}`,
        method: 'delete',
        headers: {
          token: localStorage.token
        }
      }).then(cart => {
        Swal.fire({
          icon: "success",
          title: "Cart deleted",
          timer: 3000
        })
        context.dispatch('fetchCart')
      }).catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.errors,
          timer: 3000
        })
      })
    },
    addToCart(context, obj){
      if(obj.stock <= 0) throw {msg: 'stock habis'}
      else{
        axios({
          url: `/cart/${obj.id}`,
          method: 'post',
          headers: {
            token: localStorage.token
          }
        }).then(data => {
          Swal.fire({
            icon: "success",
            title: "Success add to cart!",
            timer: 3000
          })
          context.dispatch('fetchCart')
        }).catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.errors,
            timer: 3000
          })
        })
      }
    },
    minus(context, obj){
      axios({
        url: `/cart/${obj.id}`,
        method: 'patch',
        headers: {
          token: localStorage.token
        },
        data: {
          quantity: obj.quantity
        }
      }).then(data => {
        context.dispatch('fetchCart')
      }).catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Quantity cannot minus",
          timer: 3000
        })
      })
    },
    checkout(context, obj){
      axios({
        url: `/cart/${obj.id}`,
        method: 'put',
        headers: {
          token: localStorage.token
        },
        data: {
          status: obj.status,
          ProductId: obj.ProductId,
          quantity: obj.quantity
        }
      }).then(data => {
        Swal.fire({
          icon: "success",
          title: "See you <3",
          timer: 3000
        })
        context.dispatch('fetchCart')
      }).catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.errors,
          timer: 3000
        })
      })
    }
  },
  modules: {
  }
})
