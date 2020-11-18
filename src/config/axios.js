import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ikeha-ecommerce-cms-bob.herokuapp.com'
})

export default instance
