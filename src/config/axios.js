import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-portofolio.herokuapp.com'
})

export default instance
