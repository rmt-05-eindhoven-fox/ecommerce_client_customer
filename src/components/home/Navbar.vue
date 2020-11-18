<template>
  <div id="navbar">

    <!-- Nav Bar Start -->
    <div class="nav">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          <a href="#" class="navbar-brand">MENU</a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-between " id="navbarCollapse">
            <div class="navbar-nav mr-auto">
              <router-link :to="{ name: 'Product' }" class="nav-item nav-link active text-light">Home</router-link>
              <!-- <a href="#" class="nav-item nav-link active">Home</a> -->
            </div>
            <div class="navbar-nav ml-auto">
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                <div class="dropdown-menu">
                  <a v-if="isLogedIn" href="#" class="dropdown-item">Logout</a>
                  <div v-else>
                    <a href="#" class="dropdown-item">Login</a>
                    <a href="#" class="dropdown-item">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Nav Bar End -->

    <!-- Bottom Bar Start -->
    <div class="bottom-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-3">
            <div class="logo">
              <router-link :to="{ name: 'Product' }">
                <img src="@/assets/logo.png" alt="Logo">
              </router-link>
              <!-- <a href="#">
              </a> -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="search">
              <input type="text" placeholder="Search">
              <button><i class="fa fa-search"></i></button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="user">
              <!-- <a href="#" @click.prevent="openWhistlist" class="btn wishlist">
                <i class="fa fa-heart"></i>
                <span>({{ whistListCount }})</span>
              </a> -->
              <router-link :to="{ name: 'Whistlist' }" class="btn wishlist">
                <i class="fa fa-heart"></i>
                <span>({{ whistListCount }})</span>
              </router-link>
              <router-link :to="{ name: 'Cart' }" class="btn cart">
                <i class="fa fa-shopping-cart"></i>
                <span>({{ cartCount }})</span>
              </router-link>
              <!-- <a href="#" @click.prevent="openCart" class="btn cart">
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Bar End -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    whistListCount () {
      const whistlists = this.$store.state.whistlists
      return whistlists.length
    },
    cartCount () {
      const carts = this.$store.state.carts
      return carts.length
    }
  },
  methods: {
    openCart () {
      this.$router.push({ path: '/cart' })
    },
    openWhistlist () {
      this.$router.push({ path: '/whistlist' })
    },
    isLogedIn () {
      const token = localStorage.getItem('access_token')
      if (token) {
        return true
      }
      console.log(token)
      return false
    }
  }
}
</script>

<style>

</style>
