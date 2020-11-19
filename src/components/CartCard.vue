<template>
  <div class="cart-card">
    <img class="cart-card-detail-1" :src="product.Product.image_url" alt="Card image cap">
    <div class="cart-card-detail-2">
      <h5>{{ product.Product.name }}</h5>

      <div class="btn-group cart-btn-group" role="group" aria-label="Basic example">
        <button
          @click="updateQty('-')"
          type="button" class="btn btn-secondary"
          :disabled="product.quantity==1">-</button>
        <button type="button" class="btn btn-link" disabled>{{ product.quantity }}</button>
        <button
          @click="updateQty('+')"
          type="button" class="btn btn-secondary"
          :disabled="product.Product.stock <= product.quantity">+</button>

          <a
            @click.prevent="removeFromCart"
            class="remove-cart ml-3" href="">Remove</a>
      </div>

    </div>
    <div class="cart-card-detail-3">
      <p class="mx-auto" style="text-align: right;">{{ productPrice }}</p>
    </div>
  </div>
</template>

<script>
import currencyConvert from '../helpers/currencyConvert'

export default {
  name: 'CartCard',
  props: ['product'],
  computed: {
    productPrice () {
      return currencyConvert(this.product.Product.price)
    }
  },
  methods: {
    updateQty (action) {
      const payload = {
        productId: this.product.ProductId,
        quantity: this.product.quantity
      }
      if (action === '+') {
        payload.quantity++
      } else {
        payload.quantity--
      }
      this.$emit('updateQty', payload)
    },
    removeFromCart () {
      this.$emit('removeFromCart', this.product.ProductId)
    }
  }
}
</script>

<style>

</style>
