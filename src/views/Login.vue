<template>
  <div class="row mx-0 ">
    <div class="col-3">
      <img src="@/assets/account.png" alt="">
    </div>
    <div class="col-9">
      <div class="px-4 py-3 " style="border: 1px solid #d0d0d0">

        <div class="row mb-5">
          <div class="h3 font-weight-bold">Member Login</div>
        </div>
        <form class="" @submit.prevent="login">
          <div class="row justify-content-end mb-4">
            <div class="h6 col-2 mt-2 text-right">Email</div>
            <input type="text" class="col-8 form-control" required v-model="email">
          </div>
          <div class="row mb-4 justify-content-end mb-4">
            <div class="h6 col-2 mt-2 text-right">Password</div>
            <input type="password" class="col-8 form-control" required v-model="password">
          </div>
          <div class="row justify-content-end mb-4">
            <button type="submit" class="border-0 py-2 px-3 text-light mr-3" style="background-color: #036933;">LOGIN</button>
          </div>
          <div class="row justify-content-end">
            <p class="h6 mr-2">Don't have account?</p>
            <router-link to="/account/register" class="h6 text-decoration-none font-weight-bolder text-dark">Account Register</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email, password: this.password
      })
      // this.$bus.$emit('login')
    }
  }
}
</script>

<style>

</style>
