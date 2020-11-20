import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://lapak-iwak.herokuapp.com/'
})

export default instance
