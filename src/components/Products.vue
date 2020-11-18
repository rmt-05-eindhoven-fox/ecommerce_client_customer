<template>
  <div class="row mt-4">
      <div class="col">
        <h1>Products</h1>

        <div class="product-group">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>

      </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  name: 'Products',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>

</style>
