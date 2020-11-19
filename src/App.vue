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
            to="/signin"
            class="btn btn-outline-primary my-2 my-sm-0"
            v-if="!token"
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
  data () {
    return {
      token: ''
    }
  },
  methods: {
    signout () {
      localStorage.clear()
    },
    isToken () {
      this.token = localStorage.getItem('token')
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
