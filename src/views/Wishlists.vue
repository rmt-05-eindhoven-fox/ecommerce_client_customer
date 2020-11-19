<template>
  <section id="register-page">
    <Navbar/>
    <div class="container" id="products-board-items">
      <br>
      <h2 class="text-left">Wishlist</h2>
      <hr>
      <div v-if="wishlists.length > 0" class="row">
        <WishlistItem
          v-for="wishlist in wishlists"
          :key="wishlist.id"
          :wishlist="wishlist"
          @fetchWishlists="fetchWishlists"
        />
      </div>
      <div v-else class="alert alert-info" role="alert">
        Wishlist is still empty
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

import WishlistItem from '@/components/WishlistItem.vue'

export default {
  name: 'Wishlists',
  components: {
    Navbar, WishlistItem
  },
  methods: {
    fetchWishlists () {
      this.$store.dispatch('fetchWishlists')
    }
  },
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    },
    isLoggedIn () {
      return this.$store.state.isLoggedIn.status
    }
  },
  created () {
    if (this.isLoggedIn) {
      this.fetchWishlists()
    } else {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
