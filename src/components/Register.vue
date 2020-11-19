<template>
  <div class="background">
    <div class="form-container">
      <div class="mb-3 flex flex-row-reverse">
        <div @click="goToHome" class="cursor-pointer w-5 place-self-end bg-red-400">
          X
        </div>
      </div>
      <div>
        <div class="mb-5">Snack Store</div>
        <div v-if="error" class="mb-3 flex flex-wrap text-red-500">
          {{ errorMessage }}
        </div>
        <form @submit.prevent="register" class="flex-col">
          <div>
            <input v-model="email" type="email" placeholder="Email">
          </div>
          <div>
            <input v-model="password" type="password" placeholder="Password">
          </div>
          <div>
            <button type="submit">
              Register
            </button>
          </div>
        </form>
        <div class="mt-2 text-xs">
          Or
        </div>
        <div>
          <button @click="goToLogin" class="login cursor-pointer mt-2 rounded">
            Login
          </button>
        </div>
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
      password: '',
      error: false,
      errorMessage: ''
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
          this.$router.push('/auth/login')
        })
        .catch(err => {
          console.log(err)
          this.error = true
          this.errorMessage = err.response.data.message
        })
    },
    goToLogin () {
      this.email = ''
      this.password = ''
      this.$router.push('/auth/login')
    },
    goToHome () {
      this.email = ''
      this.password = ''
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .background {
    /* background-color: #f9fbfc; */
    @apply flex h-full bg-blue-400 m-0 content-center items-center;
  }
  .form-container {
    background-color: #a0dbdb;
    @apply m-auto h-auto w-auto flex-col p-5 rounded
  }
  input {
    @apply mb-2 rounded p-2
  }
  button {
    background-color: #fcea90;
    @apply py-2 px-4 rounded
  }
  .login {
    background-color: #56a7a7
  }
</style>
