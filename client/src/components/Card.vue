<template>
<div class="container">
<div class="empty-product" v-if="products.length === 0">
  <h1>Zonk</h1>
  <img src="https://image.freepik.com/free-vector/empty-concept-illustration_114360-1253.jpg" alt="">
</div>
<div v-else-if="products.length > 0" class="card text-center mt-5" v-for="product in products" :key="product.id">
  <div class="card-header">
    <h3><b>{{ product.name }}</b></h3>
  </div>
  <div class="card-body">
    <img class="image" :src="product.image_url" alt=""><br>
    <p class="card-text"><b>Price: </b>Rp.{{ product.price }}</p>
    <p class="card-text"><b>Stock: </b>{{ product.stock }}</p>
    <p class="card-text"><b>Category:  </b>{{ product.category }}</p>
    <a v-if="product.stock > 0" @click.prevent="addToCart(product.id, product.stock)" href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
</div>
</template>

<script>
export default {
    name: 'Card',
    computed: {
      products () {
        return this.$store.state.products
      }
    },
    created () {
      this.fetchProduct
    },
    methods: {
      fetchProduct(){
        this.$store.dispatch('fetchProduct')
      },
      addToCart(id, stock){
        const obj = {
          id: id, stock: stock
        }
        this.$store.dispatch('addToCart', obj)
      }
    }
}
</script>

<style>
.image {
    width: 25%;
    max-height: 25%, !important;
}
</style>