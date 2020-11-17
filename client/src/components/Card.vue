<template>
<div class="container">
<div class="card text-center mt-5" v-for="product in products" :key="product.id">
  <div class="card-header">
    <h3><b>{{ product.name }}</b></h3>
  </div>
  <div class="card-body">
    <img class="image" :src="product.image_url" alt=""><br>
    <p class="card-text"><b>Price: </b>Rp.{{ product.price }}</p>
    <p class="card-text"><b>Stock: </b>{{ product.stock }}</p>
    <p class="card-text"><b>Category:  </b>{{ product.category }}</p>
    <a @click.prevent="addToCart(product.id)" href="#" class="btn btn-primary">Add to Cart</a>
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
      addToCart(id){
        this.$store.dispatch('addToCart', id)
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