<template>
    <div class="container">
      <p id="welcome">WELCOME TO TOKOLICIOUS</p>
      <div class="row mt-5">
        <div class="col-8">
          <img id="login-img" src="../../images/login-img.svg">
        </div>
        <div class="col-3">
          <div>
            <h3>Sign in to continue</h3>
          </div>
          <div class="signin-form d-flex flex-column">
            <form @submit.prevent="signin">
              <div class="form-group">
                <label>
                  Email
                </label>
                <input v-model="userData.email" type="email" class="form-control" placeholder="halo@example.com">
              </div>
              <div class="form-group">
                <label>
                  Password
                </label>
                <input v-model="userData.password" type="password" class="form-control" placeholder="password">
              </div>
              <button type="submit" class="btn btn-primary mb-2">Confirm</button>
            </form>
          </div>
          <div>
            <p>Haven't got your account? SignUp now!</p>
            <a @click.prevent="gotoSignUp" class="btn">Click Here</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'SignIn_Page',
  data () {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      this.$store.dispatch('signIn', this.userData)
        .then(result => {
          localStorage.setItem('token', result.data.access_token)
          this.$router.push({ name: 'Product' })
          this.$swal('Welcome!!! \n You are logged in')
        })
        .catch(err => {
          console.log(err)
          this.$swal(err.response.data)
        })
    },

    gotoSignUp () {
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>

<style scoped>
#login-img {
  width: 80%;
}
#welcome {
  font-size: 50px;
  font-style: oblique;
}
.container {
  margin-top: 30px;
}

</style>
