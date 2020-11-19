<template>
  <div class="register text-center">
    <div class="container"> 
     <form @submit.prevent="register" class="form-signin">
        <img class="mb-4" src="../assets/POG.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <br>
        <div class="checkbox mb-3" style="font-family: sans-serif">
          <p>Already have an account? <a href="" @click="toLogin">Sign in</a> here</p>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
        <p class="mt-3 mb-3 text-muted" style="font-weight: bolder">© POG Gaming Store</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosInstance'

export default {
  name: 'Register',
  data() {
      return {
        email: '',
        password: ''
      }
    },
  methods: {
    toLogin() {
      this.$router.push({name: 'Login'})
    },
    
    register() {
      axios({
          url: '/users/register',
          method: 'post',
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(({
          data
        }) => {
          this.$router.push({
            name: 'Login'
          })
          Swal.fire({
            icon: "success",
            title: `Shall we login now?`,
          });
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops",
            text: err.response.data.msg,
          });
        })
    }
  },
}
</script>

<style scoped>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 10% auto;
}

</style>