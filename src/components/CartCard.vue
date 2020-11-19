<template>
  <div class="col-xs-12 col-lg-8">
    <div class="card card-on-cart">
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <img :src="product.Product.image_url" alt="" class="card-img" />
          </div>
          <div class="col-8">
            <div
              class="card-header d-flex justify-content-between align-items-baseline p-0"
            >
              <h5>{{product.Product.name}}</h5>
              <button class="btn btn-danger" @click="removeCart(product.ProductId)">
                <i class="fas fa-trash"></i> Remove
              </button>
            </div>
            <small class="text-muted">{{displayCurrency}}</small>
            <form action="" class="mt-3">
              <label for="qty">Quantity :</label>
              <input
                v-model="product.amount"
                type="number"
                class="form-control"
                id="qty"
                min="1"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios/axios.js'
export default {
  name: 'CartCard',
  props: ['product'],
  methods: {
    removeCart (id) {
      const token = localStorage.getItem('token')
      axios({
        url: `/cart/${id}`,
        method: 'delete',
        headers: {
          token
        }
      })
        .then(data => {
          console.log(data)
          this.$store.dispatch('retrieveUserCart')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  computed: {
    displayCurrency () {
      const price = this.product.Product.price
      return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
    }
  }
}
</script>

<style>
</style>
