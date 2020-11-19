<template>
  <div id="register-form" class="shadow-lg">
    <div style="padding: 56px">
      <h3
        style="
          text-align: center;
          font-size: 40px;
          font-family: 'Assistant', sans-serif;
        "
      >
        Bookoo Shop
      </h3>
      <p style="text-align: center">Register for a new user account</p>
      <a @click.prevent="goToLogin" href="#"
        >Login here if already have an account</a
      >
    </div>
    <form class="form" @submit.prevent="register">
      <fieldset class="uk-fieldset">
        <legend></legend>
        <div class="uk-inline input-box">
          <span
            class="uk-form-icon uk-form-icon-flip"
            uk-icon="icon: user"
          ></span>
          <input
            v-model="user.email"
            type="text"
            class="uk-input"
            placeholder="E-mail address"
            style="letter-spacing: 3px; width: 300px"
          />
        </div>
        <div class="uk-inline input-box">
          <span
            class="uk-form-icon uk-form-icon-flip"
            uk-icon="icon: lock"
          ></span>
          <input
            v-model="user.password"
            type="password"
            class="uk-input"
            placeholder="Password"
            style="letter-spacing: 3px; width: 300px"
          />
        </div>
      </fieldset>
      <button class="register-btn" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.user.email,
        password: this.user.password
      }
      this.$store.dispatch('register', payload)
    },
    goToLogin () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
</style>
