import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-bintangwm.herokuapp.com'
})

export default instance
