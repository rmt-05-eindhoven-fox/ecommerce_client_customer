<template>
  <div class="product">
    <div v-if="!loading" class="row">
      <div class="col-md-3">
        <img
          class="img-fluid mx-auto d-block image"
          :src="cart.Product.image_url"
        />
      </div>
      <div class="col-md-8">
        <div class="info">
          <div class="row">
            <div class="col-md-4 product-name">
              <div class="product-name">
                <h5>{{cart.Product.name}}</h5>
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
                :max="cart.Product.stock"
                class="form-control quantity-input"
              />
            </div>
            <div class="col-md-3 price">
              <span>Rp. {{cart.Product.price}}</span>
            </div>
            <div class="col-md-1 tex-danger">
              <a @click.prevent="deleteCart(cart.id)" href=""><i class="fas fa-trash text-danger"></i></a>
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
  props: ['carts', 'cart'],
  data () {
    return {
      loading: true,
      query: this.cart.amount
    }
  },
  methods: {
    updateAmount: _.debounce(function () {
      const payload = {
        ProductId: this.cart.ProductId,
        id: this.cart.id,
        amount: +this.query
      }
      this.$store.dispatch('updateAmount', payload)
      this.fetchCart()
    }, 300),
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
        .then(() => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart () {
      setTimeout(() => {
        this.$store.dispatch('fetchCart')
      }, 500)
      this.price()
    },
    price () {
      let payload = 0
      this.carts.forEach(element => {
        payload += (element.amount * element.Product.price)
      })
      this.$store.commit('setTotal', payload)
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 500)
    this.price()
  }
}
</script>

<style>
.product {
  padding-left: 15px;
}
</style>
