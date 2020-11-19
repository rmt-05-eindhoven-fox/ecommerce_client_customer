<template>
  <section id="register-page">
    <Navbar/>
    <div id="products-board-items">
      <br>
      <h2>Wishlist</h2>
      <div class="row">
        <WishlistItem
          v-for="wishlist in wishlists"
          :key="wishlist.id"
          :wishlist="wishlist"
          @fetchWishlists="fetchWishlists"
        />
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
    }
  },
  created () {
    this.fetchWishlists()
  }
}
</script>

<style>

</style>
