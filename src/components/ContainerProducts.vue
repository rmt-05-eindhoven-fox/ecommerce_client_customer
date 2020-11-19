<template>
<div class="bg-dark p-1 product-card m-2 card">
  <div class="bg-secondary p-2">
    <div class="row m-1 d-flex justify-content-center">
      <CardProduct
        class="col-2 m-1"
        v-for="product in products"
        :key="product.id"
        :product="product"/>
    </div>
  </div>
</div>
</template>

<script>
import CardProduct from './CardProduct.vue'

export default {
  name: 'ContainerProducts',
  components: { CardProduct },
  computed: {
    products () {
      return this.$store.state.productStore.products
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

<style scoped>
  div {
    /* background-color: cornflowerblue; */
    height: 100%;
  }
  /* .product-card {
    width: 100vw;
    height: auto;
  } */
</style>
