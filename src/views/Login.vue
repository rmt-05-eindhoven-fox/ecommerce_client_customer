<template>
    <div class="vue-tempalte">
        <!-- Navigation -->
        <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
          <div class="container">
            <a class="navbar-brand float-left" href="#" target="_blank">
        <h3>Login</h3>
        <form
          @submit="login"
          class="mt-4">
          <div class="form-group">
            <input
              type="email"
              v-model="email"
              class="form-control" placeholder="Your Email Address" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <input
              type="password"
              v-model="password"
              placeholder="Your Password" class="form-control" id="exampleInputPassword1">
          </div>
          <button
            @click.prevent="userLogin"
            type="submit" class="btn btn-outline-dark w-100">Login</button>
        </form>
        <hr>
          <a
            @click.prevent="goToRegister"
            class="float-right" href="" >Register Here</a>
      </div>
      <div class="col"></div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$router.push({ name: 'Register' })
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.email = ''
      this.password = ''
      this.$store.dispatch('Login', payload)
    }
  }

}
</script>

<style>

</style>
