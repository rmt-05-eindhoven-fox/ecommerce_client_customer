<template>
  <div id="app">
    <div id="nav" class="bg-warning d-flex align-items-center justify-content-between">
      <div>
        <router-link to="/products">Product</router-link>
      </div>
      <div v-if="$store.state.isLogin == 'no'">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
      <div v-else-if="$store.state.isLogin == 'yes'">
        <router-link to="/carts" class="btn btn-outline-dark text-dark btn-sm">Carts <img src="../public/cart-plus.svg" alt="cart" height="15px"></router-link> |
        <button class="btn btn-outline-dark btn-sm" @click="logout">Logout</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      this.$store.commit('LOGOUT')
      this.$router.push('/products')
    }
  },
  created () {
    this.$store.commit('login')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #0011fc;
}
</style>
