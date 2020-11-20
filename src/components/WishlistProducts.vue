<template>
  <div class="row mb-3">
    <div class="col-md-auto">
      <img :src="wishProduct.Product.image_url" height="222" alt="" srcset="">
    </div>
    <div class="col-md">
      <div class="card-header">
        <div class="row d-flex justify-content-between">
          <div class="pt-1 ml-3">
            <h5>{{wishProduct.Product.name}}</h5>
          </div>
          <div>
            <a href="#" @click.prevent="deleteWishlist(wishProduct.id)" class="btn btn-warning btn-sm"><i class="fas fa-trash-alt text-danger"></i> REMOVE FROM WISHLIST</a>
            <a href="#" @click.prevent="addToCart(wishProduct.Product.id)" class="btn btn-success btn-sm mx-1"><i class="fas fa-plus text-dark"></i> ADD TO CART</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text">{{wishProduct.Product.description}}</p>
        <h6 class="card-title"><i class="fas fa-tags"></i> : {{wishProduct.moneyFormat}}</h6>
        <h6 class="card-title"><i class="fas fa-layer-group mr-1"></i> : <span v-if="wishProduct.Product.stock > 0">{{wishProduct.Product.stock}} Items</span><span v-else-if="wishProduct.Product.stock <= 0" class="text-danger">Empty Stock!</span></h6>
        <p class="card-text">Category : {{wishProduct.Product.Category.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishlistProducts',
  props: ['wishProduct'],
  methods: {
    deleteWishlist (id) {
      this.$store.dispatch('deleteWishlist', id)
    },
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
    }
  }
}
</script>

<style>

</style>
