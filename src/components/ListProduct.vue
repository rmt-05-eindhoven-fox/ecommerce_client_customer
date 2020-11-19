<template>
  <div class="container" style="margin-top: 10px;">
    <div class="d-flex justify-content-around">
      <Product
      v-for="data in Product"
      :key="data.id"
      :product='data'>
      </Product>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
export default {
  name: 'ListProduct',
  components: {
    Product
  },
  computed: {
    Product () {
      return this.$store.state.Product
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
