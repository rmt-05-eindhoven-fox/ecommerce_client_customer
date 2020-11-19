<template>
  <section id="register-page">
    <Navbar/>
    <div class="mt-5">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-4" id="register-form">
            <div class="card shadow">
              <div class="card-body">
                <h3>Register</h3>
                <br>
                <form @submit.prevent="register" class="text-left">
                  <div class="form-group">
                    <label for="email">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <hr>
                <p>Already have an account? <a @click.prevent="goToLogin" href="#">Log In</a></p>
              </div>
            </div>
          </div>
          <div class="col-8">
            <!-- <p>Ini tulisan</p> -->
            <img src="../assets/register.svg" alt="register">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Register',
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
    goToLogin () {
      this.$router.push({ name: 'Login' })
    },
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn.status
    }
  },
  created () {
    if (this.isLoggedIn) {
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>

<style scoped>
body {
  background-color: rgba(223, 219, 219, 0.616);
}

#register-page {
  height: 100vh;
}

img {
  height: 400px;
}

</style>
