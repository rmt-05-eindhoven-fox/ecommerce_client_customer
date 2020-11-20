<template>
  <div class="container">
    <div class="row content">
      <div class="col-md-6">
        <h3 class="signin-text mb-3">Sign Up</h3>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary bg-warning btn-lg">Register</button>
        </form>
      </div>
      <div class="col-md-6 mb-3">
        <img src="../assets/wfh_8.svg" alt="loginimg" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  beforeCreate () {
    this.$store.dispatch('changeBgColor', '#FFBE21')
  },
  computed: {
    bgColor () {
      return this.$store.state.bgColor
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Gugi&family=Lato&family=Poppins&family=Roboto&display=swap');
  * {
    font-family: 'Poppins', sans-serif;
  }
  .content {
    margin: 8%;
    background-color: #fff;
    padding: 4rem 1rem 4rem 1rem;
    box-shadow: 0 0 5px 5px rgba(0,0,0, .05);
  }
  .signin-text {
    font-style: normal;
    font-weight: 600 !important;
  }
  .form-control {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-style: solid !important;
    border: 0;
    border-bottom: #FFBE21;
    padding: 0px !important;
    color: #495057;
    height: auto;
    border-radius: 0;
    background-color: #fff;
    background-clip: padding-box;
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #495057;
    outline: 0;
    box-shadow: none;
  }
  form button {
    border: 0;
  }
</style>
