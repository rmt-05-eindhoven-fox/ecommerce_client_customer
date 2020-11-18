<template>
  <div>
    <b-navbar toggleable="lg" variant="light" class="fixed-top">
      <b-collapse id="nav-collapse" is-nav>
        <i class="fas fa-boxes">MY SHOP</i>
        <b-navbar-nav class="ml-auto">
          <div class="mr-4">
            <router-link to="/">
              <b-button variant="outline-primary">
              <i class="fas fa-store-alt">Home</i>
               </b-button>
              </router-link>
          </div>
          <div href="#" class="mr-4">
            <router-link to="/carts">
              <b-button variant="outline-primary">
                <i class="fas fa-cart-square">Carts</i>
              </b-button>
              <br
            /></router-link>
          </div>
          <div @click="logout" href="#">
              <i style="cursor: pointer" class="fas fa-sign-out-alt">logout</i>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
</style>
