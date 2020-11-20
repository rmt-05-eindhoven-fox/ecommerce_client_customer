<template>
  <div id="register">
    <nav class="navbar navbar-light bg-light border-bottom shadow-sm">
      <a class="navbar-brand ml-3 font-weight-bold">JuaLaku</a>
      <router-link to="/login" class="btn btn-success my-2 my-sm-0">Login</router-link>
    </nav>
    <div class="container-fluid row justify-content-center align-items-center" style="height:100vh">
      <div class="p-5 bg-light border rounded shadow" style="width:480px">
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-block btn-primary">Register</button>
        </form>
      </div>
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
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
        .then(({ data }) => {
          console.log(data)
          this.$router.push('/login')
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
