<template>
    <div class="login-form container mt-5">
      <div class="row justify-content-center">
        <div class="col-4 p-3 mt-5 shadow rounded">
          <h1 class="mt-2" style="margin-bottom: 20px">Login</h1>
          <img
            src="../assets/login-logo.png"
            style="width:200px; margin:10px"
          />
          <form @submit.prevent="login" id="login-form">
            <div class="form-group">
              <input
                v-model="payload.email"
                type="email"
                class="form-control"
                id="login-email"
                aria-describedby="emailHelp"
                placeholder="Email"
                autocomplete="false"
              />
            </div>
            <div class="form-group">
              <input
                v-model="payload.password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                autocomplete="false"
              />
            </div>
            <button type="submit" class="login-btn mt-4">Login</button><br><br>

            <p>Don't Have Account? <a @click.prevent="jumpToRegister" href="#">Register here</a></p>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'FormLogin',
    data () {
        return {
            payload: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            const payload = {
                email: this.payload.email,
                password: this.payload.password
            }
            this.$store.dispatch('login', payload)
            this.$store.commit('SET_LOGINSTATUS', true);
        },
        jumpToRegister() {
            this.$router.push({ name: 'Register'})
        }
    }
}
</script>

<style>

</style>