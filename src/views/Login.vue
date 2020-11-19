<template>
  <div class="login text-center">
    <div class="container"> 
     <form @submit.prevent="login" class="form-signin">
        <img class="mb-4" src="../assets/POG.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <br>
        <div class="checkbox mb-3" style="font-family: sans-serif">
          <p>Don't have an account? <a href="" @click="toRegister">Register</a> here</p>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-3 mb-3 text-muted" style="font-weight: bolder">© POG Gaming Store</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosInstance'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister() {
      this.$router.push({name: 'Register'})
    },
    login() {
      axios({
          url: '/users/loginCustomer',
          method: 'post',
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(({
          data
        }) => {
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("id", data.id);
          this.$router.push({
            name: 'Home'
          })
          Swal.fire({
            icon: "success",
            title: `Welcome ${this.email}`,
          });
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Not For You Mr.Customer",
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