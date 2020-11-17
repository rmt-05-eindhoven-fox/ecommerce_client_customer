<template>
  <div id="login-form" class="shadow-lg">
    <div style="padding: 40px">
      <h3
        style="
          text-align: center;
          font-size: 40px;
          font-family: 'Assistant', sans-serif;
        "
      >
        Bookoo
      </h3>
      <p style="text-align: center">Please login first to continue shopping</p>
      <a @click.prevent="goToRegister" href="#"
        >Register if you don't have an account here</a
      >
    </div>
    <form class="form" @submit.prevent="login">
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
      <button class="login-btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.user.email,
        password: this.user.password
      }
      this.$store.dispatch('login', payload)
    },
    goToRegister () {
      this.$router.push({ name: 'Register' })
    }
  }
}
</script>
