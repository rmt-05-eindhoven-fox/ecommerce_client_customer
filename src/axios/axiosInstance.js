import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-reggi.herokuapp.com/'
})

export default instance
