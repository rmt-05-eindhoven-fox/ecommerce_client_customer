<template>
  <div>
    <b-navbar toggleable="lg" variant="light" class="fixed-top">
      <b-collapse id="nav-collapse" is-nav>
        <i class="fas fa-boxes">MY SHOP</i>
        <b-navbar-nav class="ml-auto">
          <div class="mr-4">
            <router-link to="/">
            <b-button variant= "dark">
              <i class="fas fa-store-alt">Home</i>
            </b-button>
              </router-link>
          </div>
          <div href="#" class="mr-4">
            <router-link to="/carts">
              <b-button variant="info">
                <i class="fas fa-dolly-flatbed">Cart</i>
              </b-button>
              <br
            /></router-link>
          </div>
          <div class="navigation-2 d-flex flex-row" v-if="!statusLogin">
            <div class="mr-4">
            <router-link to="/login">
              <b-button variant="outline-primary">
             <i class="fas fa-door-closed">LOGIN !</i>
               </b-button>
              </router-link>
          </div>
            <div class="mr-4">
            <router-link to="/register">
              <b-button variant="outline-primary">
              <i class="fas fa-file-signature">REGISTER !</i>
               </b-button>
              </router-link>
          </div>
        </div>
          <div v-else href="#" style="color: red">
              <i @click="logout" style="cursor: pointer" class="fas fa-sign-out-alt">logout</i>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  computed: {
    statusLogin () {
      return this.$store.state.userLogin
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.dispatch('LOGOUT')
    }
  }
}
</script>

<style>
</style>
