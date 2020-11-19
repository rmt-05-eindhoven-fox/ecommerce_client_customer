<template>
  <div class="header">
    <div class="part">
      <div @click="home" class="nav">Logo</div>
    </div>
    <div class="items-center flex">
      <input class="searchBox" placeholder="Search here"/>
    </div>
    <div v-if="isLoggedIn" class="part">
      <div @click="showCart" class="nav">
        Cart
      </div>
      <div @click="logout" class="nav">
        Logout
      </div>
    </div>
    <div v-else class="part">
      <div @click="login" class="nav">
        Login
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    login () {
      this.$router.push('auth/login')
    },
    logout () {
      localStorage.removeItem('access_token')
      // this.$router.push('/')
      this.checkLogin()
    },
    showCart () {
      this.$router.push('cart')
    },
    checkLogin () {
      if (localStorage.getItem('access_token')) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    },
    home () {
      this.$router.push('/')
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>
  .searchBox {
    @apply px-6 py-2 rounded
  }
  .part {
    @apply h-full w-24 flex
  }
  .header {
    background-color: #a0dbdb;
    max-width: 100%;
    @apply h-20 flex justify-between
  }
  .nav {
    @apply h-full flex items-center justify-center px-5
  }
  .nav:hover {
    background-color: #56a7a7;
    cursor: pointer;
  }
</style>
