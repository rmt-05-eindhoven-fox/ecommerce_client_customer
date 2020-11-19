import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    celebs: []
  },
  mutations: {
    listCelebs (state, payload) {
      state.celebs = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          const token = data.token
          localStorage.setItem('token', token)
          router.push('/home')
        })
        .catch(err => {
          console.log(err, '<<<< ini gak masuk')
        })
    },
    register (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCelebs (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('listCelebs', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      localStorage.clear()
      router.push('/')
    }
  },
  modules: {
  }
})
