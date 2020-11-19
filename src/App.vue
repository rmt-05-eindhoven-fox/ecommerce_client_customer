<template>
  <div id="app">
    <!-- <div id="nav" v-if="navbar === false">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Login</router-link>
    </div>
    <div id="nav" v-else-if="navbar === true">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Logout</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$store.commit('checkLogin')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
