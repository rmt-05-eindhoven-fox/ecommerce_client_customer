<template>
  <div class="row mb-3">
    <div class="col-md-auto">
      <img :src="product.image_url" height="222" alt="" srcset="">
    </div>
    <div class="col-md">
      <div class="card-header">
        <div class="row d-flex justify-content-between">
          <div class="pt-1 ml-3">
            <h5>{{product.name}}</h5>
          </div>
          <div>
            <a href="#" @click.prevent="addToWishlist(product.id)" class="btn btn-warning btn-sm"><i class="fas fa-heart text-danger"></i> WISHLIST</a>
            <a href="#" @click.prevent="addToCart(product.id)" class="btn btn-success btn-sm mx-1"><i class="fas fa-plus text-dark"></i> ADD TO CART</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text">{{product.description}}</p>
        <h6 class="card-title"><i class="fas fa-tags"></i> : {{product.moneyFormat}}</h6>
        <h6 class="card-title"><i class="fas fa-layer-group mr-1"></i> : <span v-if="product.stock > 0">{{product.stock}} Items</span><span v-else-if="product.stock <= 0" class="text-danger">Empty Stock!</span></h6>
        <p class="card-text">Category : {{product.Category.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: ['product'],
  methods: {
    addToWishlist (id) {
      this.$store.dispatch('addToWishlist', id)
    },
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
    }
  }
}
</script>

<style>

</style>
