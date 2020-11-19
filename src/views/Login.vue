<template>
<div class="nav">
  <Navbar />
  <div class="login-form">
    <section class="Form my-4 mx-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <img src="../assets/login.jpg" class="img-fluid">
          </div>
          <div class="col-lg-7 px-5">
            <h1 class="font-weight-bold py-3">Sign into your account!</h1>
            <form class="form-login">
              <div class="form-row">
                <div class="col-lg-7">
                  <input v-model="email" type="email" name="email" class="form-control my-3 p-4" placeholder="email address">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <input v-model="password" type="password" name="password" class="form-control my-3 p-4" placeholder="****">
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <button @click.prevent="login" id="btn1" class="btn btn-primary">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'

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
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .login-form {
    display: flex;
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .form-login {
    margin-left: 30%;
  }

  .row {
    background: royalblue;
    border-radius: 30px;
  }
  img {
    border-top-left-radius: 30px;
    height: 45vh;
    border-bottom-left-radius: 30px;
  }
  #btn1 {
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    background-color: black;
    color: white;
    border-radius: 4px;
    font-weight: bold;
  }
  #btn1:hover {
    background-color: white;
    border: 1px solid;
    color: black;
  }
</style>
