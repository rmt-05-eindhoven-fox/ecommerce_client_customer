<template>
  <div class="container">
      <p id="welcome">WELCOME TO TOKOLICIOUS</p>
      <div class="row mt-5">
        <div class="col-8">
          <img id="login-img" src="../../images/login-img.svg">
        </div>
        <div class="col-3">
          <div>
            <h3>Hi, newcomer!</h3>
            <h3>SignUp here!</h3>
          </div>
          <div class="signin-form d-flex flex-column">
            <form @submit.prevent="signup">
              <div class="form-group">
                <label>
                  Email
                </label>
                <input v-model="dataUser.email" type="email" class="form-control" placeholder="halo@example.com">
              </div>
              <div class="form-group">
                <label>
                  Password
                </label>
                <input v-model="dataUser.password" type="password" class="form-control" placeholder="password">
              </div>
              <button type="submit" class="btn btn-primary mb-2">Confirm</button>
            </form>
          </div>
          <div>
            <p>Already got your account?</p>
            <a @click.prevent="gotoSignIn" class="btn">Click Here!</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      dataUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signup () {
      this.$store.dispatch('signUp', this.dataUser)
        .then(result => {
          this.$router.push({ name: 'Login' })
          this.$swal('One step closer \n Now sign in to countinue')
        })
        .catch(err => {
          this.$swal(err.response.data)
        })
    },
    gotoSignIn () {
      this.$router.push({ name: 'Login' })
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
