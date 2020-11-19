import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-adi.herokuapp.com/'
})

export default instance
