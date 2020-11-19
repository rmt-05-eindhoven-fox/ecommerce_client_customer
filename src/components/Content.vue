<template>
  <div class="bg-gray-400 w-full mt-5 mr-5">
    <div class="h-40 bg-blue-400">
      carousel
    </div>
    <div class="flex h-auto w-auto flex-wrap">
      <div v-for="(product, i) in products" :key="i" class="h-auto w-auto">
        <ProductCard :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Content',
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
