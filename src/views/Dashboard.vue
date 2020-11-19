<template>
  <div>
    <nav class="navbar navbar-light bg-light" v-if="Navbar === false">
      <router-link to="/">
        <a class="navbar-brand">Belanjain</a>
      </router-link>
      <form class="form-inline" @submit.prevent="login">
        <router-link to="/login">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </router-link>
      </form>
    </nav>
    <nav class="navbar navbar-light bg-light" v-else-if="Navbar === true">
      <router-link to="/">
        <a class="navbar-brand">Belanjain</a>
      </router-link>
      <div class="form-inline">
        <button class="btn btn-outline-primary my-2 my-sm-0" type="button" style="margin-right: 20px;" @click="cart">charts</button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="logout">Logout</button>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Dashboard',
  computed: {
    Navbar () {
      return this.$store.state.Navbar
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    logout () {
      Swal.fire({
        title: 'Do you want to Logout the changes?',
        showDenyButton: true,
        confirmButtonText: 'Logout',
        denyButtonText: 'Dont'
      })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Logout!', '', 'success')
            localStorage.clear()
            this.$store.commit('checkLogin')
          } else if (result.isDenied) {
            Swal.fire('Changes are not Logout', '', 'info')
          }
        })
    },
    cart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style>

</style>
