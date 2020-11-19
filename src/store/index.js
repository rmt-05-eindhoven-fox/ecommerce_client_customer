import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.js'
import defaultBanner from '@/assets/default-banner.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    randomProducts: [],
    banners: [],
    whistlists: [],
    carts: [],
    loadingWhistlist: false,
    loadingCart: false
  },
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    },
    setProducts (state, payload) {
      state.products = payload.products
      if (payload.random) {
        state.randomProducts = payload.random
      }
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setWhistlists (state, payload) {
      state.whistlists = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    clearAllData (state) {
      state.whistlists = []
      state.carts = []
    }
  },
  actions: {
    async fetchCategories (context) {
      try {
        const { data } = await axios({
          url: 'categories',
          method: 'get'
        })
        // console.log(data)
        let prodCat = []
        if (data.categories) {
          prodCat = data.categories.filter(cat => cat.type === 'product')
        }
        context.commit('setCategories', prodCat)
      } catch (error) {
        console.log(error)
      }
    },

    async fetchProducts (context) {
      try {
        const { data } = await axios({
          url: 'products',
          method: 'get'
        })
        if (data.products) {
          const index = []
          const random = []
          for (let i = 0; i < 4; i++) {
            let x = -1
            let duplicate = []
            do {
              x = Math.floor(Math.random() * data.products.length)
              duplicate = index.filter(el => el === x)
              console.log(duplicate.length > 0)
            } while (duplicate.length > 0)
            index.push(x)
            random.push(data.products[x])
          }
          context.commit('setProducts', { products: data.products, random })
        }
      } catch (error) {
        console.log(error.response.data)
      }
    },

    async fetchProductByCategory (context, id) {
      try {
        const { data } = await axios({
          url: 'categories/' + id + '/products',
          method: 'get'
        })
        console.log(data.categories.Products)
        context.commit('setProducts', { products: data.categories.Products })
      } catch (error) {
        console.log(error.response.data)
      }
    },

    async fetchLiveBanner (context) {
      try {
        const { data } = await axios({
          url: 'banners/active',
          method: 'get'
        })
        let banners = data.banners
        if (data.banners.length < 1) {
          banners = [{ image_url: defaultBanner }]
        }
        context.commit('setBanners', banners)
      } catch (error) {
        console.log(error.response.data)
      }
    },

    async prosesLogin (context, payload) {
      try {
        const { data } = await axios({
          url: 'login',
          method: 'post',
          data: payload
        })
        return data
      } catch (error) {
        console.log(error.response.data)
        return { status: 401 }
      }
    },

    async prosesRegister (context, payload) {
      try {
        const { data } = await axios({
          url: 'register',
          method: 'post',
          data: payload
        })
        return data
      } catch (error) {
        return error.response.data
      }
    },

    async fetchWhistlist (context) {
      try {
        this.state.loadingWhistlist = true
        const { data } = await axios({
          url: 'whistlists',
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        console.log(data)
        context.commit('setWhistlists', data.whistlists)
        return data
      } catch (error) {
        console.log(error.response.data)
        return { status: 400 }
      } finally {
        this.state.loadingWhistlist = false
      }
    },

    async addWhistlist (context, productId) {
      try {
        const { data } = await axios({
          url: 'whistlists',
          method: 'post',
          data: {
            ProductId: productId
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dispatch('fetchWhistlist')
        return data
      } catch (error) {
        console.log(error.response.data)
        return { status: 400 }
      }
    },

    async deleteWhistlist (context, id) {
      try {
        const { data } = await axios({
          url: 'whistlists/' + id,
          method: 'delete',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dispatch('fetchWhistlist')
        return data
      } catch (error) {
        console.log(error.response.data)
        return { status: 400 }
      }
    },

    async fetchCart (context) {
      try {
        this.state.loadingCart = true
        const { data } = await axios({
          url: 'carts',
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        console.log(data)
        context.commit('setCarts', data.carts)
        return data
      } catch (error) {
        console.log(error.response.data)
        return { status: 400 }
      } finally {
        this.state.loadingCart = false
      }
    },

    async addToCart (context, productId) {
      try {
        const { data } = await axios({
          url: 'carts',
          method: 'post',
          data: {
            ProductId: productId,
            amount: 1
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dispatch('fetchCart')
        return data
      } catch (error) {
        console.log(error.response.data)
        return { status: 400 }
      }
    },

    async changeAmount (context, request) {
      try {
        const { data } = await axios({
          url: 'carts/' + request.id,
          method: 'patch',
          data: request.payload,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        console.log(data)
        this.dispatch('fetchCart')
        return data
      } catch (error) {
        console.log(error.response, 'errorrr')
        return { status: 400, cart: { amount: request.payload.amount } }
      }
    },

    async deleteFromCart (context, id) {
      try {
        const { data } = await axios({
          url: 'carts/' + id,
          method: 'delete',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        console.log(data)
        this.dispatch('fetchCart')
        return data
      } catch (error) {
        console.log(error.response, 'errorrr')
        return { status: 400 }
      }
    },
    clearAllData (context) {
      context.commit('clearAllData')
    }
  },
  modules: {
  }
})
