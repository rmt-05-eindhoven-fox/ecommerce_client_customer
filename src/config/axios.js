import Axios from 'axios'

const instance = Axios.create({
  // baseURL: 'http://localhost:3000/api/'
  baseURL: 'https://cmsvueshop.herokuapp.com/api/'
})

export default instance
