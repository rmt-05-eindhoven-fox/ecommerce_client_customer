import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://eccommerce-apps.herokuapp.com/'
})
export default instance
