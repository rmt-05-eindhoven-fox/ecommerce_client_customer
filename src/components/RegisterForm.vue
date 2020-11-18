<template>
  <div class="container">
      <div class="row login-page">
        <div class="col-lg-8 section-left d-none d-md-block">
          <div class="bg-image">
            <img :src="bgImage" width="100%" alt="" srcset="">
          </div>
        </div>
        <div class="col-lg-4 section-right">
          <h2>Create your account</h2>
          <form @submit.prevent="userRegister">
            <div class="form-group row">
              <div class="col-sm-10">
                <input v-model="email" type="email" class="form-control" id="email" placeholder="Email">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <input v-model="full_name" type="text" class="form-control" id="full-name" placeholder="Full Name">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
              </div>
            </div>
            <button class="btn btn-login">Register</button>
          </form>
          <button @click="toLogin" class="btn btn-link">Log in to your account</button>
        </div>
      </div>
    </div>
</template>

<script>
import bgImage from '@/assets/sg.jpg'
import axios from '@/axios/axios.js'
export default {
  name: 'RegisterForm',
  data () {
    return {
      email: '',
      full_name: '',
      password: '',
      bgImage
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    userRegister () {
      axios({
        url: '/register',
        method: 'post',
        data: {
          email: this.email,
          full_name: this.full_name,
          password: this.password
        }
      })
        .then(({ data }) => {
          this.$router.push('/login')
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
