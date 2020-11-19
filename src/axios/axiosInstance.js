import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const instance = axios.create({ baseURL: 'https://ecommerce-ibrhm-app.herokuapp.com/' })

export default instance
