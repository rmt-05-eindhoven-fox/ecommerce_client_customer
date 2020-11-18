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
          <div class="alert alert-danger" role="alert" v-if="isErr">
            {{ errMsg }}
          </div>
          <form @submit.prevent="userLogin">
            <div class="form-group row">
              <div class="col-sm-10">
                <input v-model="email" type="email" class="form-control" id="email" placeholder="Email" autocomplete="off">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" autocomplete="off">
              </div>
            </div>
            <button class="btn btn-login" v-if="isShow">Login</button>
            <div class="spinner-border text-secondary" role="status" v-if="isLoad">
              <span class="sr-only">Loading...</span>
            </div>
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
      errMsg: '',
      isErr: false,
      isLoad: false,
      isShow: true,
      bgImage
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    userLogin () {
      this.isErr = false
      this.isLoad = true
      this.isShow = false
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.access_token)
          localStorage.setItem('full_name', data.full_name)
          localStorage.setItem('role', data.role)
          console.log(data.role)
          this.$router.push('/')
        })
        .catch(err => {
          this.isErr = true
          this.errMsg = err.response.data.message
          console.log(err.response)
        })
        .finally(() => {
          this.isShow = true
          this.isLoad = false
        })
    }
  }
}
</script>

<style>

</style>
