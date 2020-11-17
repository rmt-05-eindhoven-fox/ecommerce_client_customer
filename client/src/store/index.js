import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'
import router from '../router/index'

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
    login(context, dataCust){
      // if(dataCust.email === 'admin@mail.com') throw { msg: 'customer only'}
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: dataCust.email,
          password: dataCust.password
        }
      }).then(data => {
        const token = data.data.token
        localStorage.setItem('token', token)
        router.push('/')
      }).catch(err => {
        console.log(err.response)
      })
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
        console.log(data, 'sukses register data')
        // router.push('/login')
      }).catch(err => {
        console.log(dataCust)
        console.log(err.response)
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
        console.log(banner.data, 'ini banner')
        context.commit('SET_BANNER', banner.data.data)
      }).catch(err => {
        console.log(err.response)
      })
    },
    fetchProduct(context){
      axios({
        url: '/product',
        method: 'get',
        headers: {
          token: localStorage.token
        }
      }).then(product => {
        console.log(product, 'ini product')
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
        // console.log(cart.data, 'ini cart')
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
        console.log(cart, id, 'ini cart delete')
        context.dispatch('fetchCart')
      }).catch(err => {
        console.log(err.response)
      })
    },
    addToCart(context, id){
      axios({
        url: `/cart/${id}`,
        method: 'post',
        headers: {
          token: localStorage.token
        }
      }).then(data => {
        console.log(data, 'sukses menambahkan')
        context.dispatch('fetchCart')
      }).catch(err => {
        console.log(err, id, 'err addcart')
      })
    }
  },
  modules: {
  }
})
