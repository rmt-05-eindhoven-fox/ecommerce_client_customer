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
        Bookoo Shop
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
      <div v-if="errors" class="uk-alert-danger" uk-alert style="font-size: 12px; width: 200px; margin-left: 25%;">
        <a class="uk-alert-close" uk-close></a>
        <p>
          {{errors}}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: ''
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.user.email,
        password: this.user.password,
      };
      this.$store
        .dispatch("login", payload)
        .then(({ data }) => {
          const token = data.token;
          localStorage.setItem("token", token);
          console.log("user is logged in now");
          this.$store.commit("setLoginStatus", true);
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors.join(',')
        });
    },
    goToRegister() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>
