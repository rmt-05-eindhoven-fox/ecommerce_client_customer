<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="product.image_url" alt="Card image cap" style="height: 40vh;">
          <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(product.price)}}</p>
            <p class="card-text">{{product.stock}}</p>
            <a @click.prevent="addToCart(product.id)" href="#" class="btn btn-primary btn-block">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    addToCart (ProductId) {
      this.$store.dispatch('addToCart', ProductId)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
.container {
  margin-top: 15vh;
}
</style>
