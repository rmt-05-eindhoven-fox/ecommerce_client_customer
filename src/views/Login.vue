<template>
  <div class="container-fluid row justify-content-center align-items-center" style="height:100vh">
    <div class="p-5 bg-light border rounded shadow" style="width:480px">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-block btn-primary">Login</button>
      </form>
      <p class="mt-3">Don't have an account ? <router-link to='/register'>Register here</router-link></p>
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
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
}
</script>

<style>

</style>
