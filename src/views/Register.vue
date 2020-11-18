<template>

  <div class="container mt-5">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <h3>Register to Unikloh</h3>
        <form
          @submit.prevent="userRegister"
          class="mt-4">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="Your Email Address" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <input
            type="password"
            v-model="password"
            placeholder="Your Password" class="form-control" id="exampleInputPassword1">
          </div>
          <div>
            <button
              @click.prevent="userRegister"
              type="submit" class="btn btn-outline-dark mx-auto w-100" style="display: block;">Register</button>

          </div>
        </form>
        <hr>
          <a
            @click.prevent="goToLogin"
            class="float-right" href="" >Registered? Login Here</a>
      </div>
      <div class="col"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    goToLogin () {
      this.$router.push({ name: 'Login' })
    },
    userRegister () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.email = ''
      this.password = ''
      this.$store.dispatch('userRegister', payload)
    }
  }
}
</script>

<style>

</style>
