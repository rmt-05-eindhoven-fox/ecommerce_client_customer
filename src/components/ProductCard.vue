<template>
  <div class="card product-card">
    <img class="card-img-top" :src="product.image_url" alt="Card image cap">
    <div class="card-body">
      <p class="card-text mb-2">{{ product.name }}</p>
      <p class="card-text mb-1" style="font-size: small;">{{ priceCurrency }}</p>

      <div
        v-if="inStock"
        class="card-in-stock">
        <p class="card-text mb-1" style="font-size: small;"><b>In Stock</b></p>

        <div class="card-btn-group float-right">
          <img
            @click="addToCart"
            class="card-btn" src="../assets/icons8-addcart.svg"/>
          <!-- <img class="card-btn" src="../assets/icons8-heart.svg"/> -->
        </div>
      </div>

      <div
        v-else
        class="card-out-stock">
        <p class="card-text mb-1" style="font-size: small; color:red"><b>Out of Stock</b></p>
      </div>

    </div>
  </div>
</template>

<script>
import currencyConvert from '../helpers/currencyConvert'

export default {
  name: 'ProductCard',
  props: ['product'],
  computed: {
    inStock () {
      if (this.product.stock > 0) {
        return true
      } else {
        return false
      }
    },
    priceCurrency () {
      return currencyConvert(this.product.price)
    }
  },
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', this.product.id)
    }
  }
}
</script>

<style>

</style>
