<template>
  <div>
    <!-- NAVBAR -->
    <NavbarLandingPage/>

    <section id="login-page" class="container">
      <div class="row">
        <div class="col-auto col-md-5 m-auto">
          <div class="card card-login">
            <div class="card-body shadow">
              <h5 class="card-title text-center">LOGIN</h5>
              <form @submit.prevent="login()" class="form-login">
                <div class="form-group">
                  <!-- <label for="email-login">Email Address</label> -->
                  <input v-model="user.email_login" type="email" id="email-login" class="form-control rounded-pill" placeholder="Email Address" required autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <!-- <label for="password-login">Password</label> -->
                  <input v-model="user.password_login" type="password" id="password-login" class="form-control rounded-pill" placeholder="Password" required autofocus autocomplete="off">
                </div>
                <hr class="bg-light">
                <button class="btn btn-lg btn-primary btn-block mt-2 p-2 rounded-pill" type="submit">LOGIN</button>
                <hr class="bg-light">
              </form>
              <small class="form-text text-center">Don't have an account yet?<a href="#" @click.prevent="goToRegister()" class="text-primary"> Register now!</a></small>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="footer container text-center text-dark mb-2">
          © 2020 IKEHA E-Commerce by Bobby Septianto
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarLandingPage from '../components/NavbarLandingPage.vue'

export default {
  name: 'Login',
  components: {
    NavbarLandingPage
  },
  data () {
    return {
      // LOGIN
      user: {
        email_login: '',
        password_login: ''
      }
    }
  },
  methods: {
    goToRegister () {
      this.$router.push({ name: 'Register' })
    },
    login () {
      const payload = {
        user: {
          email_login: this.user.email_login,
          password_login: this.user.password_login
        }
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
