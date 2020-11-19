<template>

  <div class="container mt-5">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <h3>Register</h3>
        <form
          @submit.prevent="register"
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
              @click.prevent="register"
              type="submit" class="btn btn-outline-dark mx-auto w-100" style="display: block;">Register</button>

          </div>
        </form>
        <hr>
          <a
            @click.prevent="login"
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
    login () {
      this.$router.push({ name: 'Login' })
    },
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.email = ''
      this.password = ''
      this.$store.dispatch('Register', payload)
    }
  }
}
</script>

<style>

</style>
