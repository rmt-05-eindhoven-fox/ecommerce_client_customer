<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-5">
        <lottie-player
          class="mx-auto"
          src="https://assets2.lottiefiles.com/packages/lf20_BhWJsn.json"
          background="transparent"  speed=".5" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
        <h3>Login to Unikloh</h3>
        <form
          @submit="userLogin"
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
    goToRegister () {
      this.$router.push({ name: 'Register' })
    },
    userLogin () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.email = ''
      this.password = ''
      this.$store.dispatch('userLogin', payload)
    }
  }

}
</script>

<style>

</style>
