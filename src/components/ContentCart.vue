<template>
  <div class="product">
    <div class="row">
      <div class="col-md-3">
        <img
          class="img-fluid mx-auto d-block image"
          :src="carts.Product.image_url"
        />
      </div>
      <div class="col-md-8">
        <div class="info">
          <div class="row">
            <div class="col-md-4 product-name">
              <div class="product-name">
                <h5>{{carts.Product.name}}</h5>
              </div>
            </div>
            <div class="col-md-4 quantity">
              <label for="quantity">Quantity:</label>
              <input
                v-model="query"
                v-on:input="updateAmount"
                id="quantity"
                type="number"
                min="1"
                :max="carts.Product.stock"
                class="form-control quantity-input"
              />
            </div>
            <div class="col-md-3 price">
              <span>Rp. {{carts.Product.price * carts.amount}}</span>
            </div>
            <div class="col-md-1 tex-danger">
              <a @click.prevent="deleteCart(carts.id)" href=""><i class="fas fa-trash text-danger"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'ContentCart',
  props: ['carts'],
  data () {
    return {
      query: this.carts.amount
    }
  },
  methods: {
    updateAmount: _.debounce(function () {
      const payload = {
        ProductId: this.carts.ProductId,
        id: this.carts.id,
        amount: +this.query
      }
      setTimeout(() => {
        this.$store.dispatch('fetchCart')
        this.$store.commit('setTotal', this.query * this.carts.Product.price)
      }, 300)
      this.$store.dispatch('updateAmount', payload)
    }, 300),
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
        .then(() => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
