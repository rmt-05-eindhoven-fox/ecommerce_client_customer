import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://ecommerce-server-andeyan.herokuapp.com'
  // baseURL: 'http://localhost:3000'
})

export default instance
