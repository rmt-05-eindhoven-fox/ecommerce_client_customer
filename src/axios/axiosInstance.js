import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server-rafi.herokuapp.com'
})

export default instance
