import axiosInstance from '../axios/axiosInstance'

const productStore = {
  state: () => ({
    products: [],
    productData: {},
    carts: []
  }),
  mutations: {
    FETCH_PRODUCTS (state, products) {
      state.products = products
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      return axiosInstance({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          // console.log(data)
          commit('FETCH_PRODUCTS', data)
        })
        .catch(({ response }) => {
          // console.log('err ======')
          // console.log(response)
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.data)
          console.log(response.data.msg)
        })
    },
    fetchOneProduct ({ state }, id) {
      // console.log('asdasda')
      axiosInstance({
        url: '/products/' + id,
        method: 'GET'
      })
        .then(({ data }) => {
          state.productData = data
        })
        .catch(({ response }) => {
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.data)
          console.log(response.data.msg)
        })
    },
    addCart (_, payload) {
      return axiosInstance({
        url: '/carts/add',
        method: 'POST',
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      })
    },
    fetchCarts ({ state }) {
      axiosInstance({
        url: '/carts/show-carts',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          state.carts = data
        })
        .catch(({ response }) => {
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.data)
          console.log(response.data.msg)
        })
    },
    updateQty (_, payload) {
      return axiosInstance({
        url: '/carts/patch/' + payload.id,
        method: 'PATCH',
        data: { qty: payload.qty },
        headers: { access_token: localStorage.getItem('access_token') }
      })
    },
    deleteCart (_, payload) {
      return axiosInstance({
        url: '/carts/delete/' + payload.id,
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') }
      })
    }
  }
}

export default productStore
