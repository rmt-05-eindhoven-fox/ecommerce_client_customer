<template>
  <div class="container text-center align-items-center justify-content-center p-4" style="height:100%; width:100%;">
    <h3>Login To Ecommerce</h3>
    <hr>
    <form @submit.prevent="login">
      <div class="form-row form-group">
        <input v-model="email" type="email" class="form-control text-center" placeholder="Email">
      </div>
      <div class="form-row form-group">
        <input v-model="password" type="password" class="form-control text-center" placeholder="Password">
      </div>
      <div class="form-row form-group justify-content-center">
        <button type="submit" class="btn btn-primary">Sign In</button>
      </div>
    </form>
    <hr>
    <p>Don't Have an Account? <button @click="change('/signup')" class="btn btn-warning">Register</button></p>
    <div v-if="errors.length >= 1" class="alert alert-danger text-center" role="alert">
      <p v-for="(error, i) in errors" :key="i">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    errors () {
      return this.$store.state.errors
    }
  },
  methods: {
    login () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('userLogin', data)
        .then((res) => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id', res.data.id)
          localStorage.setItem('user', data.email)
          this.email = ''
          this.password = ''
          this.$store.commit('setStatus', true)
          this.$store.commit('setUser', data.email)
          this.$router.push({ name: 'Content' })
        })
        .catch((err) => {
          this.$store.commit('error', err.response.data)
          setTimeout(() => {
            this.$store.commit('error', '')
          }, 3000)
        })
    },
    change (path) {
      this.$router.push(path)
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
