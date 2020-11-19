<template>
<div class="login-container">
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-card elevation="10" width="60vw" height="60vh" rounded="xl">
        <v-row class="fill-height">
          <v-col class="text-center">
            <div class="login-content">
              <h1>Hello again</h1>
              <v-form class="form-login">
                <v-text-field
                  class="mx-2"
                  label="Email"
                  rows="1"
                  prepend-icon="mdi-email"
                  type="email"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  class="mx-2"
                  label="Password"
                  rows="1"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
                ></v-text-field>
                <v-btn
                block color="#FEDBD0"
                @click.prevent="login"
                :loading="isLoading"
                :disabled="loading"
                >Login</v-btn>
                <p class="info-login">Doesn't have account yet? <span class="goToRegister" @click="goToRegister">register</span></p>
              </v-form>
            </div>
          </v-col>
          <v-col align-center>
            <img src="../assets/login-illustration.svg" alt="login-illustration" class="login-illustration">
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    login () {
      this.isLoading = true
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          if (data.role === 'admin') {
            this.isLoading = false
            this.$swal({
              title: 'Not admin zone',
              text: 'Login as admin on Skoutwear CMS',
              icon: 'error',
              showCancelButton: true,
              confirmButtonText: 'Go to CMS',
              reverseButtons: true
            })
              .then((result) => {
                if (result.isConfirmed) {
                  window.location.href = 'https://ecommerce-cms-yosiaelnino.web.app/'
                }
              })
          } else {
            localStorage.setItem('access_token', data.access_token)
            this.isLoading = false
            this.$router.push('/')
            this.$vToastify.success({
              title: 'Success',
              body: 'Login success.',
              canTimeout: true,
              duration: 2000,
              theme: 'light'
            })
            this.$store.dispatch('fetchCarts')
            this.$store.commit('setLogin')
          }
        })
        .catch(err => {
          this.isLoading = false
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.msg
          })
        })
    },
    goToRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>
.login-container {
  height: 100vh;
}

.login-content {
  margin-top: 60px;
}

.form-login {
  width: 60%;
  margin-left: 80px;
  margin-top: 16px;
}

.info-login {
  margin-top: 16px;
}

.goToRegister {
  color: #b89f97;
}

.goToRegister:hover {
  cursor: pointer;
}

.login-illustration {
  width: 90%;
  margin-top: 60px;
}
</style>
