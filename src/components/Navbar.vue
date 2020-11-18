<template>
  <!-- NAVBAR -->
  <section id="navbar">
    <div class="navbar container-fluid d-flex">
      <div class="logo">
        <nav>
          <a href="#" @click.prevent="goToDashboard()" class="navbar-brand">
            <i class="fab fa-envira"></i> IKEHA
          </a>
        </nav>
      </div>
      <div v-if="login_user">
        <a href="#" @click.prevent="goToWishlist()"><i class="fas fa-heart fa-2x mx-4 text-danger hover-link">wishlist<sup v-if="wishlist.length > 0"> {{wishlist.length}}</sup></i></a>
        <a href="#" @click.prevent="goToCart()"><i class="fas fa-cart-plus fa-2x text-primary hover-link">cart<sup v-if="carts.cart.length > 0"> {{carts.cart.length}}</sup></i></a>
      </div>
      <div v-if="login_user" class="d-flex align-items-center logout">
        <div id="user-login" class="mr-4">
          <span>Hello! {{login_user}}</span>
        </div>
        <button @click.prevent="logout()" type="button" class="btn btn-danger text-light">Logout</button>
      </div>
    </div>
  </section>
  <!-- NAVBAR -->
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goToDashboard () {
      this.$router.push({ name: 'Dashboard' })
    },
    goToWishlist () {
      this.$router.push({ name: 'Wishlist' })
    },
    goToCart () {
      this.$router.push({ name: 'Carts' })
    },
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  },
  computed: {
    login_user () {
      return localStorage.getItem('login_user')
    },
    wishlist () {
      return this.$store.state.wishlist
    },
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('readWishlist')
    this.$store.dispatch('readCart')
  }
}
</script>

<style>

</style>
