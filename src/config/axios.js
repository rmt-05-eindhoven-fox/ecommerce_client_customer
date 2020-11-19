import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-customer12.herokuapp.com'
})

export default instance
