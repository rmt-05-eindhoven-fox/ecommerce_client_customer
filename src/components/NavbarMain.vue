<template>
  <div class="container-fluid">
      <!-- NAVBAR -->
      <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <router-link to="/" class="navbar-brand" href="#"><img :src="logo" width="60" class="d-inline-block align-top"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav" v-if="userLoggedIn">
            <li class="nav-item">
              <router-link to="/your-cart" class="nav-link"><i class="fas fa-shopping-cart"></i> Cart</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fas fa-history"></i> Recent Transaction</a>
            </li>
            <li class="nav-item">
              <button @click="logOut" class="btn btn-logout" v-if="userLoggedIn">Logout</button>
            </li>
          </ul>
            <button @click="toLogin" class="btn btn-login" v-if="!userLoggedIn">Login</button>
        </div>
      </nav>
    </div>
</template>

<script>
import logo from '@/assets/ls-logo.png'
export default {
  name: 'NavbarMain',
  data () {
    return {
      logo,
      userLoggedIn: false
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    logOut () {
      localStorage.clear()
      this.toLogin()
    }
  },
  created () {
    const user = localStorage.getItem('token')
    if (user) {
      this.userLoggedIn = true
    } else {
      this.userLoggedIn = false
    }
  }
}
</script>

<style>

</style>
