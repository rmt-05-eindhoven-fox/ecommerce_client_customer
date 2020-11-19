import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: '',
    products: [],
    banners: [],
    carts: []
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data
    },
    SET_CART(state, data) {
      state.carts = data
    },
    SET_LOGINSTATUS(state, data) {
      state.isLogin = data
    },
    SET_USER(state, data) {
      state.user = data
    }
  },
  actions: {
    register(context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
          email: payload.email,
          password: payload.password,
          role: payload.role
        }
      })
      .then( ({data}) => {
        console.log("Register Success!");
        router.push({name: 'Login'})
    })
    .catch(error => {
        console.log("Error From FormRegister", error);
    })
    },
    login(context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then( ({data}) => {
        const access_token = data.access_token
        const role = data.role
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('role', role)
        this.state.commit('SET_USER', data.email)
        router.push({name: 'Home'})
    })
    .catch(error => {
        console.log("Error From FormLogin", error);
    })
    },
    fetchProducts(context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/custProducts',
      })
        .then((data) => {
          context.commit('SET_PRODUCTS', data);
        })
        .catch(error => {
        console.log(error);
      })
    }
  },
  modules: {
  }
})
