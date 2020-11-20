<template>
  <div class="row mx-0 px-5">
    <div class="row w-100 no-gutters">
      <router-link to="/" class="text-decoration-none text-muted">Home</router-link>
      <p class="text-muted mx-1">></p>
      <p class="text-muted mx-1">Category</p>
      <p class="text-muted mx-1">></p>
      <p class="text-muted mx-1">{{ $route.params.category }}</p>
    </div>
    <div class="row row-cols-4 no-gutters">
      <div v-for="product in perCategory($route.params.category)" :key="product.id" class="">
        <product-detail :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'
import ProductDetail from '../components/ProductDetail.vue'

export default {
  components: { ProductDetail },
  computed: {
    ...mapState(['products']),
    ...mapGetters(['categories', 'perCategory'])
  },
  mounted () {
    this.$store.dispatch('products')
  }
}
</script>

<style>

</style>
