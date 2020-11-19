<template>
  <section>
    <h5 class="card-header bg-info">{{ product.name }}</h5>
    <img class="card-img" :src="product.image_url" :alt="product.name" width="auto" height="auto">
    <div class="card-body bg-light">
      <p>Price: {{ product.price }}</p>
      <p>Stock: {{ product.stock }}</p>
      <button v-if="$store.state.isLogin === 'yes'" @click="addToCart(product.id)" class="btn btn-primary">Add to cart</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['product'],
  methods: {
    addToCart (id) {
      this.$store.dispatch('fetchOneProduct', id)
      this.$router.push('/add-cart')
    }
  }
}
</script>

<style scoped>
/* #card-product {
  width: auto;
} */
h5 {
  height: 100px;
}
</style>
