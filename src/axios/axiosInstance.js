import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://salty-tor-59437.herokuapp.com/'
  // baseURL: 'http://localhost:3000'
})

export default instance
