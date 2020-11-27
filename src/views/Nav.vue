<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <div>
          <router-link to="/" class="navbar-brand">
          <span>
            <img
              id="logo"
              src="../assets/chartally.png"
              alt=""
              srcset=""
            />
          </span>Chartally</router-link>
        </div>

        <div>
          <router-link
            to="signin"
            class="btn btn-outline-primary my-2 my-sm-0"
            v-if="!token"
            >Sign In </router-link
          >
          <button v-else class="btn btn-danger">Sign Out</button>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      token: false
    }
  },
  methods: {
    signout () {
      localStorage.clear()
    }
  },
  created () {
    console.log('<<<<<<,')
    if (localStorage.getItem('token')) {
      this.token = true
    }
  }
}
</script>

<style>

</style>
