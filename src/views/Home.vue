<template>
  <div class="home">
    <div class="container">
      <ListProducts v-for="product in $store.state.products.data" :key="product.id" :product="product"></ListProducts>
    </div>
      
  </div>
</template>

<script>
// @ is an alias to /src
import ListProducts from '@/components/ListProducts.vue'

export default {
  name: 'Home',
  username: '',
  components: {
    ListProducts
  },
  methods: {
  },
  created() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>