<template>
  <div class="home">
    <carousel>
      <slide></slide>
    </carousel>
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
