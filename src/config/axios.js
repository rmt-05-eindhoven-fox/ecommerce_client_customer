import axios from 'axios'
import Swal from 'sweetalert2'

const instance = axios.create({
  baseURL: 'https://ecomercee-cms-risyad.herokuapp.com/'
})

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.errors.join(', ')
    })
    return Promise.reject(error)
  }
)

export default instance
