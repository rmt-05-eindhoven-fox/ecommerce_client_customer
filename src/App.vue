<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <div>
          <router-link to="/" class="navbar-brand">
          <span>
            <img
              id="logo"
              src="./assets/chartally.png"
              alt=""
              srcset=""
            />
          </span>Chartally</router-link>
        </div>

        <div>
          <router-link
            to="/cart"
            class="btn btn-primary my-2 my-sm-0"
            style="margin-right: 15px"
          ><i class="fas fa-cart-plus"></i>
          </router-link>
          <router-link
            to="/signin"
            class="btn btn-outline-primary my-2 my-sm-0"
            v-if="!isLogin"
            >Sign In </router-link
          >
          <button @click.prevent="signout" v-else class="btn btn-danger">Sign Out</button>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    signout () {
      localStorage.clear()
      this.$store.commit('setLogin', false)
    },
    isToken () {
      if (localStorage.getItem('token')) {
        this.$store.commit('setLogin', true)
      }
    }
  },
  created () {
    this.isToken()
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
  background-color:#eef4f7;
}
#logo {
  max-width: 36px;
}
.navbar-brand {
  font-size: 32px;
}
</style>
