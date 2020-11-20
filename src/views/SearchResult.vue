<template>
  <div class="row no-gutters">
    <div v-for="product in search($route.params.name)" :key="product.id" class="">
      <product-detail :product="product"/>
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
    ...mapGetters(['categories', 'perCategory', 'search'])
  },
  mounted () {
    this.$store.dispatch('products')
  }
}
</script>

<style>

</style>
