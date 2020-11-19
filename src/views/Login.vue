<template>
  <div class="text-center col-12">
    <form @submit.prevent="login" class="form-signin col-3">
      <img class="mb-4" src="../../public/login.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <div v-if="errorLogin !== ''" class="card mb-2">
        <h6 class="pt-2 text-danger">{{ errorLogin }}</h6>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
      // console.log(payload, 'payload================')
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          // console.log('data login success')
          // console.log(data)
          this.email = ''
          this.password = ''
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('login')
          this.$router.push('/products')
        })
        .catch(({ response }) => {
          console.log('err')
          console.log(response.data.msg)
          const payload = { errorLogin: response.data }
          this.$store.commit('handleAxiosError', payload)
        })
    }
  },
  computed: {
    errorLogin () {
      if (this.$store.state.errorLogin.msg) {
        return this.$store.state.errorLogin.msg
      }
      return ''
    }
  }
}
</script>

<style scoped>
.text-center {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
