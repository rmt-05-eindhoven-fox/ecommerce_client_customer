<template>
  <div class="text-center col-12">
    <form @submit.prevent="register" class="form-signin col-3">
      <img class="mb-4" src="../../public/register.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <div v-if="errorReg" class="card mb-2">
        <h6 class="pt-2 text-danger">{{ errorReg }}</h6>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
    </form>
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
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
        .then(({ data }) => {
          this.email = ''
          this.password = ''
          return this.$store.dispatch('login', payload)
        })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('login')
          this.$router.push('/products')
        })
        .catch(({ response }) => {
          const payload = { errorReg: response.data.msg[0] }
          this.$store.commit('handleAxiosError', payload)
        })
    }
  },
  computed: {
    errorReg () {
      if (this.$store.state.errorReg) {
        return this.$store.state.errorReg
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
