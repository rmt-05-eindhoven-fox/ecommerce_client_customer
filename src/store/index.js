import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetail: {
      name: localStorage.name,
      avatar: localStorage.avatar,
      email: localStorage.email,
      role: localStorage.role
    },
    products: [],
    banners: [],
    categories: [],
    landscapeBanners: [],
    potraitBanners: [],
    cart: [],
    isLogin: false
  },
  mutations: {
    setUserDetail (state, payload) {
      const { name, avatar, email, role } = payload
      state.userDetail = { name, avatar, email, role }
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setLandscape (state, payload) {
      state.landscapeBanners = payload
    },
    setPotrait (state, payload) {
      state.potraitBanners = payload
    },
    setCart (state, payload) {
      state.cart = payload.Products
    }
  },
  actions: {
    register (context, payload) {
      return axios.post('/register', payload)
    },
    login (context, payload) {
      return axios.post('/login', payload)
    },
    fetchAllProducts (context) {
      axios.get('/products', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => console.log(err))
    },
    fetchAllBanners (context) {
      return axios.get('/banners', {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchCategories (context) {
      axios.get('/categories', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          data = data.filter(cat => cat.Products.length > 0)
          context.commit('setCategories', data)
        })
        .catch(err => console.log(err))
    },
    fetchProductById (context, payload) {
      return axios.get(`/products/${payload}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchBannerById (context, payload) {
      return axios.get(`/banners/${payload}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    checkBannersOri ({ state, commit }) {
      if (!state.banners.length) return []
      const landscape = []
      const potrait = []
      for (const banner of state.banners) {
        const img = new Image()
        img.src = banner.image_url
        img.onload = () => {
          if (img.naturalWidth > img.naturalHeight) landscape.push(banner)
          else potrait.push(banner)
        }
      }
      commit('setLandscape', landscape)
      commit('setPotrait', potrait)
    },
    fetchCart ({ commit }) {
      axios.get('/carts', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('setCart', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    addToCart (con, payload) {
      return axios.post('/carts', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    patchCart (con, payload) {
      return axios.patch(`/carts/${payload.ProductId}`, payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteCart (con, payload) {
      return axios.delete(`/carts/${payload.ProductId}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  },
  modules: {
  },
  getters: {
    getCategoryById: (state) => (id) => {
      return state.categories.find(category => category.id === id)
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    getProductsByCategoryId: (state) => (id) => {
      if (!id) return state.products
      else return state.products.filter(product => product.CategoryId === +id)
    },
    getBannersByCategoryId: (state) => (id) => {
      if (!id) return state.banners
      else return state.banners.filter(banner => banner.CategoryId === +id)
    },
    checkCart: (state) => (id) => {
      let check = false
      state.cart.forEach(c => {
        if (id === c.id) check = true
      })
      return check
    },
    amountProd: (state) => (id) => {
      for (const c of state.cart) {
        if (c.id === id) return c.Cart.amount
      }
    }
  }
})
