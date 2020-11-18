<template>
  <div>
    <!-- NAVBAR -->
    <Navbar/>

    <!-- WISHLIST PRODUCTS -->
    <div class="container my-3 pb-5">
      <div class="row">
        <div class="col d-flex justify-content-between align-items-center ml-4 mr-2">
          <div>
            <h2>Your Wishlist :</h2>
          </div>
        </div>
      </div><br>
      <h2 v-if="wishlist.length <= 0" class="text-center mt-5 pt-5"> . .Your Wishlist is Empty. . </h2>
      <div v-else-if="wishlist.length > 0" class="container mx-2">
        <WishlistProducts
        v-for="wishProduct in wishlist"
        :key="wishProduct.id"
        :wishProduct="wishProduct"
        />
      </div>
    </div>
    <!-- WISHLIST PRODUCTS -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import WishlistProducts from '../components/WishlistProducts.vue'

export default {
  name: 'Wishlist',
  components: {
    Navbar,
    WishlistProducts
  },
  computed: {
    wishlist () {
      return this.$store.state.wishlist
    }
  },
  methods: {
    readWishlist () {
      this.$store.dispatch('readWishlist')
    }
  },
  created () {
    this.readWishlist()
  }
}
</script>

<style>

</style>
