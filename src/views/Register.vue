<template>
  <div>
    <!-- NAVBAR -->
    <NavbarLandingPage/>

    <section id="register-page" class="container">
      <div class="row">
        <div class="col-auto col-md-5 m-auto">
          <div class="card card-login">
            <div class="card-body shadow">
              <h5 class="card-title text-center">REGISTER</h5>
              <form @submit.prevent="register()" class="form-login">
                <div class="form-group">
                  <!-- <label for="email-login">Email Address</label> -->
                  <input v-model="user.email_register" type="email" id="email-register" class="form-control rounded-pill" placeholder="Email Address" required autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <!-- <label for="password-login">Password</label> -->
                  <input v-model="user.password_register" type="password" id="password-register" class="form-control rounded-pill" placeholder="Password" required autofocus autocomplete="off">
                </div>
                <hr class="bg-light">
                <button class="btn btn-lg btn-primary btn-block mt-2 p-2 rounded-pill" type="submit">REGISTER</button>
                <hr class="bg-light">
              </form>
              <small class="form-text text-center">Back to<a href="#" @click.prevent="goToLogin()" class="text-primary"> Login!</a></small>
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
  name: 'Register',
  components: {
    NavbarLandingPage
  },
  data () {
    return {
      // REGISTER
      user: {
        email_register: '',
        password_register: ''
      }
    }
  },
  methods: {
    goToLogin () {
      this.$router.push({ name: 'Login' })
    },
    register () {
      const payload = {
        user: {
          email_register: this.user.email_register,
          password_register: this.user.password_register
        }
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>

</style>
