<template>
  <div class="container text-center align-items-center justify-content-center p-4" style="height:100%; width:100%;">
    <h3>Register To Ecommerce</h3>
    <hr>
    <form @submit.prevent="register">
      <div class="form-row form-group">
        <input v-model="email" type="email" class="form-control text-center" placeholder="Email">
      </div>
      <div class="form-row form-group">
        <input v-model="password" type="password" class="form-control text-center" placeholder="Password">
      </div>
      <div class="form-row form-group justify-content-center">
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>
    </form>
    <hr>
    <p>Already Have an Account? <button @click="change('/signin')" class="btn btn-warning">Login</button></p>
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
    register () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('userRegister', data)
        .then((res) => {
          this.email = ''
          this.password = ''
          this.$router.push('/signin')
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
  }
}
</script>

<style>

</style>
