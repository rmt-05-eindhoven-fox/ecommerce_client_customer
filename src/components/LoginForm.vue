<template>
   <div class="container">
      <div class="row login-page">
        <div class="col-lg-8 section-left d-none d-md-block">
          <div class="bg-image">
            <img :src="bgImage" width="100%" alt="" srcset="">
          </div>
        </div>
        <div class="col-lg-4 section-right">
          <h2>Login to your account</h2>
          <form @submit.prevent="userLogin">
            <div class="form-group row">
              <div class="col-sm-10">
                <input v-model="email" type="email" class="form-control" id="email" placeholder="Email">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
              </div>
            </div>
            <button class="btn btn-login">Login</button>
          </form>
          <button @click="toRegister" class="btn btn-link">Create your account</button>
        </div>
      </div>
    </div>
</template>

<script>
import axios from '@/axios/axios.js'
import bgImage from '@/assets/bg-login.jpg'
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: '',
      bgImage
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    userLogin () {
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('full_name', data.full_name)
          this.$router.push('/')
          console.log(data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>

</style>
