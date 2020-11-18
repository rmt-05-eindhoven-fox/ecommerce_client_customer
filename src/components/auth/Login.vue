<template>
  <form @submit.prevent="login" class="text-center border border-light p-5" action="#!">

  <p class="h4 mb-4">Sign in</p>

  <!-- Email -->
  <input v-model="email" type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">

  <!-- Password -->
  <input v-model="password" type="password" id="defaultLoginFormPassword" class="form-control mb-1" placeholder="Password">

  <div class="float-right mb-4">
    <!-- Forgot password -->
    <a href="">Forgot password?</a>
  </div>

  <!-- Sign in button -->
  <button class="btn btn-info btn-block my-4" type="submit">LOGIN</button>

  <!-- Register -->
  <p>Not a member?
    <router-link :to="{ name: 'Register' }">Register</router-link>
  </p>

  <!-- Social login -->
  <p>or sign in with:</p>

  <a href="#" class="mx-2" role="button"><i class="fab fa-google light-blue-text"></i></a>

      </form>
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
        email: this.email, password: this.password
      }
      this.$store.dispatch('prosesLogin', payload)
        .then((result) => {
          if (result.status === 200) {
            if (result.user.role === 'customer') {
              localStorage.setItem('access_token', result.access_token)
              localStorage.setItem('id', result.user.id)
              localStorage.setItem('email', result.user.email)
              localStorage.setItem('id', result.user.id)
              this.$router.push({ name: 'Product' })
            } else {
              console.log('Acess denied!')
            }
          } else {
            console.log('Wrong username / password')
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
