<template>
  <div class="row mx-0 ">
    <div class="col-3">
      <img src="@/assets/account.png" alt="">
    </div>
    <div class="col-9">
      <div class="px-4 py-3 " style="border: 1px solid #d0d0d0">

        <div class="row mb-5">
          <div class="h3 font-weight-bold">Account Register</div>
        </div>
        <form class="" @submit.prevent="submit">
          <div class="row justify-content-end mb-4">
            <div class="h6 col-2 mt-2 text-right">Email</div>
            <input type="text" class="col-8 form-control" v-model="email" required>
          </div>
          <div class="row mb-4 justify-content-end mb-4">
            <div class="h6 col-2 mt-2 text-right">Password</div>
            <input type="password" class="col-8 form-control" v-model="password" required>
          </div>
          <div class="row mb-4 justify-content-end mb-4">
            <div class="h6 col-3 mt-2 text-right">Confirm Password</div>
            <input type="password" class="col-8 form-control" v-model="confirmPassword" required>
          </div>
          <div class="row justify-content-end mb-4">
            <button type="submit" class="border-0 py-2 px-3 text-light mr-3" style="background-color: #036933;">REGISTER</button>
          </div>
          <div class="row justify-content-end">
            <p class="h6 mr-2">Already have account?</p>
            <router-link to="/account/login" class="h6 text-decoration-none font-weight-bolder text-dark">Member Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit () {
      if (this.confirmPassword !== this.password) {
        this.$store.commit('ERROR', 'Password have to same with confirm password')
      } else {
        this.$store.dispatch('register', {
          email: this.email, password: this.password
        })
      }
    }
  },
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
}
</script>

<style>

</style>
