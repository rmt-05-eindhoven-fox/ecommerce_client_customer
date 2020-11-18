import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: localStorage.getItem('full_name')
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
