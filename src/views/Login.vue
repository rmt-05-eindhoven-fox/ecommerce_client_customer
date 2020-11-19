<template>
  <section id="login-page">
    <Navbar/>
    <div class="container login-board">
      <div class="row">
        <div class="col-8">
          <!-- <p>Ini tulisan</p> -->
          <img src="../assets/login.svg" alt="login">
        </div>
        <div class="col-4" id="login-form">
          <div class="card shadow">
            <div class="card-body">
              <h3>Log in</h3>
              <br>
              <form @submit.prevent="login" class="text-left">
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
              </form>
              <hr>
              <p>Don't have an account? <a @click.prevent="goToRegister" href="#">Register</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Login',
  components: {
    Navbar
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    goToRegister () {
      this.$router.push({ name: 'Register' })
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style scoped>
body {
  background-color: rgba(223, 219, 219, 0.616);
}

/* .login-board {
  height: 80vh;
} */

img {
  height: 400px;
}

</style>
