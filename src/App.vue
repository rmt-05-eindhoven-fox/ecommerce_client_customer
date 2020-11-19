<template>
  <div id="app" class="">
    <error/>
    <cart/>
    <navbar class=""/>
    <router-view/>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
import Error from './components/Error.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar, Error, Cart }
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
