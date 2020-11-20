<template>
  <div id="app" class="">
    <error/>
    <success/>
    <cart v-if="login"/>
    <navbar class=""/>
    <router-view/>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
import Error from './components/Error.vue'
import Navbar from './components/Navbar.vue'
import { mapState } from 'vuex'
import Success from './components/Success.vue'

export default {
  computed: {
    ...mapState(['login'])
  },
  components: { Navbar, Error, Cart, Success }
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
