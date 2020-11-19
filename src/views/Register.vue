<template>
  <div class="register d-flex min-vh-100 align-items-center p-4 p-md-0">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="login-wrapper">
            <h2 class="login-title">Register</h2>
            <form @submit.prevent="register">
                <div class="form-group">
                  <label for="email" class="sr-only">Email</label>
                  <input v-model="email" type="email" id="email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group">
                  <label for="password" class="sr-only">Password</label>
                  <input v-model="password" type="password" id="password" class="form-control" placeholder="Password">
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <button class="btn btn-primary">Sign Up</button>
                </div>
              </form>
          </div>
        </div>
        <div class="col-6">
          <h1>Welcome To The Jungle</h1>
          <p>Tempat para traveler untuk mencari paket liburan</p>
          <a @click.prevent="changePage" class="btn btn-signup">Sign In Here</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    changePage () {
      this.$router.push('/')
    },
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.register {
  background-image: url('../assets/background.jpg');
  background-size: cover;
}
.btn-signup {
    padding: 13px 30px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 22.5px;
    line-height: 19px;
    font-size: 16px;
    font-weight: bold;
}
form {
    display: block;
    margin-top: 0em;
}
</style>
