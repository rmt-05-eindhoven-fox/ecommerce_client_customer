<template>
  <!-- Default form register -->
  <div>

    <form @submit.prevent="register" class="text-center border border-light p-5" action="#!">

      <p class="h4 mb-4">Sign up</p>
      <div v-if="errorMessage" v-show="error" class="alert alert-danger alert-dismissible fade show text-left" role="alert">
        {{ errorMessage }}
        <button @click.prevent="error = false" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="form-row mb-2">
        <div class="col">
          <!-- First name -->
          <input v-model="firstname" type="text" class="form-control" placeholder="First name" required>
        </div>
        <div class="col">
          <!-- Last name -->
          <input v-model="lastname" type="text" class="form-control" placeholder="Last name" required>
        </div>
      </div>

      <!-- E-mail -->
      <input v-model="email" type="email" class="form-control mb-4" placeholder="E-mail" required>

      <!-- Password -->
      <input v-model="password" type="password" minlength="8" class="form-control mb-0" placeholder="Password"
        aria-describedby="password" required>
      <small id="password" class="form-text text-muted mb-3 text-left">
        At least 8 characters
      </small>

      <!-- Sign up button -->
      <button class="btn btn-info my-4 btn-block" type="submit">REGISTER</button>
      <!-- Newsletter -->
      <!-- Register -->
      <p>Already have membership?
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </p>

      <hr>
      <!-- Terms of service -->
      <p>By clicking
        <em>Sign up</em> you agree to our
        <a href="" target="_blank">terms of service</a>
      </p>
    </form>
  </div>
  <!-- Default form register -->
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      errorMessage: 'Error',
      error: false,
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        fullname: this.firstname + ' ' + this.lastname,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('prosesRegister', payload)
        .then((result) => {
          if (result.status === 201) {
            this.$router.push({ name: 'Login' })
            // Register Success
          } else {
            console.log(result)
            this.error = true
            this.errorMessage = result.message[0].error
            // Register Failed
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
