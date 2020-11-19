import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tokolicious.herokuapp.com/'
})

export default instance
