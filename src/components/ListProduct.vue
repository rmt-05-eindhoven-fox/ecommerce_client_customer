<template>
  <div class="card col-2 m-5" style="width: 20%;">
    <img :src="product.image_url" class="card-img-top" alt="" height="180px">
    <div class="card-body">
        <h5 class="card-title product-name">{{product.name}}</h5>
        Price
        <p class="card-text">Rp {{product.price.toLocaleString()}}</p>
        <p class="card-text">Stock {{product.stock}}</p>
        <center><a href="#" class="btn btn-success" @click.prevent="addToCart(product.id)">Add To Cart</a></center>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ListProduct',
  props: ['product'],
  methods: {
    addToCart (id) {
      console.log(this.product, 'dikirimkan dari list prodak ketika add to cart')
      this.$store.dispatch('ADD_TO_CART', id)
    }
  }
}
</script>

<style>
    .product-name{
        min-height: 50px;
    }
</style>
