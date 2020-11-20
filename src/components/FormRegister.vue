<template>
    <div class="login-form container mt-5">
      <div class="row justify-content-center">
        <div class="col-4 p-3 mt-5 shadow rounded">
          <h1 class="mt-2" style="margin-bottom: 20px">Who are you?</h1>
          <img
            src="../assets/register-logo.png"
            style="width:150px; margin:40px"
          />
          <form @submit.prevent="register" id="register-form">
            <div class="form-group">
              <input
                v-model="payload.email"
                type="email"
                class="form-control"
                id="register-email"
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
            <button type="submit" class="register-btn mt-4">Register</button><br><br>
            <p>Already Have Account? <a @click.prevent="jumpToLogin" href="#">Login</a></p>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'FormRegister',
    data () {
        return {
            payload: {
                email: '',
                password: '',
                role: ''
            }
        }
    },
    methods: {
        register() {
            const payload = {
                email: this.payload.email,
                password: this.payload.password,
                role: this.payload.role
            }
            this.$store.dispatch('register', payload)
        },
        jumpToLogin() {
            this.$router.push({ name: 'Login'})
        }
    }
}
</script>

<style>

</style>