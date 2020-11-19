const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-yosiaelnino.herokuapp.com'
})

export default instance
