<template>
<div>
  <h2> Display By Category</h2>
  <div class="products d-flex flex-row flex-wrap justify-content-center">
    <div v-for="(product) in products" :key="product.id" class="card" style="width: 23rem;">
      <img class="card-img-top img-thumbnail" :src="product.image_url" alt="Card image cap">
      <div class="card-body">
        <p class="card-text mb-3">{{product.name}}</p>
        <p class="card-text text-danger mb-3" style="font-size: 1.2em;">${{product.price}}.00</p>
        <p class="card-text text-info mb-3" style="font-size: 1em;">Stock Available: {{product.stock}}</p>
        <button @click.prevent="addToCart(product.id)" type="button" >Add To Cart</button>
      </div>
    </div>
    <!--
    <div class="card" style="width: 23rem;">
      <img class="card-img-top" src="../assets/kursi.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text mb-3">Himalayan Salt Lamp Touch.</p>
        <p class="card-text text-danger mb-3" style="font-size: 1.2em;">$499.00</p>
        <button type="button" >Add To Cart</button>
      </div>
    </div>
    <div class="card" style="width: 23rem;">
      <img class="card-img-top" src="../assets/kursi.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text mb-3">Himalayan Salt Lamp Touch.</p>
        <p class="card-text text-danger mb-3" style="font-size: 1.2em;">$499.00</p>
        <button type="button" >Add To Cart</button>
      </div>
    </div> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductsByCategory',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    addToCart (id) {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        id,
        accessToken,
        quantity: 1
      }
      this.$store.dispatch('addToCart', payload)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Gugi&family=Lato&family=Roboto&display=swap');
  * {
    font-family: 'Gugi', cursive;
  }
  .products-header p {
  }
  .card-body button {
    border: 2px solid #D9D7D9;
    color: #6d6d6d;
    padding: 10px 35px;
    border-radius: 25px;
    background-color: white;
  }
  .card-text {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9em;
  }
</style>
