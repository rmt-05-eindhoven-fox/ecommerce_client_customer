<template>
  <v-row class="d-flex">
    <ProductCard
    v-for="product in products"
    :key="product.id"
    class="product-card-element"
    :product="product">
    </ProductCard>
  </v-row>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'ProductCategory',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.commit('loadingProduct', true)
      const payload = this.$route.params.id
      this.$store.dispatch('fetchCategoryProducts', payload)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
