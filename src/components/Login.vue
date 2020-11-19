<template>
  <section>
    <div class="login-form">
      <form @submit.prevent="login">
        <div class="form-group">
          <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="email" class="form-control" name="email" placeholder="Email" required="required" aria-describedby="emailHelp" v-model="email">
          </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input type="password" class="form-control" name="password" placeholder="Password" required="required" v-model="password">
            </div>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-success btn-block login-btn">Login</button>
        </div>
      </form>
      <div class="hint-text small">Don't have an account?
        <router-link to="/register">
          <a class="text-primary">Register Now!</a>
        </router-link>
      </div>
    </div>
  </section>
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

      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>
.login-form {
  width: 340px;
  margin: 30px auto;
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}

.login-form h2 {
  margin: 0 0 15px;
}
.login-form .hint-text {
  color: #000000;
  padding-bottom: 15px;
  text-align: center;
}
.form-control, .btn {
  min-height: 38px;
  border-radius: 2px;
}
.login-btn {
  font-size: 15px;
  font-weight: bold;
}
.or-seperator {
  margin: 20px 0 10px;
  text-align: center;
  border-top: 1px solid #ccc;
}
.or-seperator i {
  padding: 0 10px;
  background: #f7f7f7;
  position: relative;
  top: -11px;
  z-index: 1;
}
.social-btn .btn {
  margin: 10px 0;
  font-size: 15px;
  text-align: left;
  line-height: 24px;
}
.social-btn .btn i {
  float: left;
  margin: 4px 15px  0 5px;
  min-width: 15px;
}
.input-group-addon .fa{
  font-size: 18px;
}
</style>
