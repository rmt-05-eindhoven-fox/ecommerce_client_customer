<template>
  <div>
    <div v-if="pageName === 'LoginPage'" class="container my-3">
      <div class="row">
        <div class="col-12 p-0 text-center">
          <h5 class="font-weight-light mt-3"><h1><b>Welcome</b></h1> to Apple Store</h5><br>
          <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" style="height:40%;" />
          <h2 class="font-weight-light mb-3">Login First</h2><br>
          <div class="row">
            <div class="col-md-6 mx-auto">
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="exampleInputEmail1" class="text-left">Email address</label>
                  <input v-model="loginEmail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" />
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword">Password</label>
                  <input v-model="loginPassword" type="password" class="form-control" id="exampleInputPassword" aria-describedby="emailHelp"
                    placeholder="Enter password" />
                </div>

                <button type="submit" class="btn btn-primary btn-block">Log In</button>
              </form><br>
                <p>Don't have an account?</p>
                <a @click.prevent="toRegister" href="">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Register v-else-if="pageName === 'RegisterPage'" @toLogin="toLogin"
    @register="register"></Register>
  </div>
</template>

<script>
import Register from './Register.vue'
export default {
  name: 'Login',
  data () {
    return {
      loginEmail: '',
      loginPassword: '',
      pageName: 'LoginPage'
    }
  },
  components: {
      Register
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.loginEmail, password: this.loginPassword })
    },
    toRegister(){
        this.pageName = 'RegisterPage'
    },
    register(dataCust){
        this.$store.dispatch('register', dataCust)
    },
    toLogin(page){
        this.pageName = 'LoginPage'
    }
  }
}
</script>

<style>

</style>