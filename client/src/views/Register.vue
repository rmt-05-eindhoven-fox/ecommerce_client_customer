<template>
  <div>
    <div class="container my-3">
      <div class="row">
        <div class="col-12 p-0 text-center">
          <img src="https://image.freepik.com/free-vector/login-concept-illustration_114360-757.jpg" alt="" style="height:40%;" />
          <div class="row">
            <div class="col-md-6 mx-auto">
              <form @submit.prevent="register">
                <div class="form-group">
                  <label for="exampleInputEmail1" class="text-left">Email address</label>
                  <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" />
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword">Password</label>
                  <input v-model="password" type="password" class="form-control" id="exampleInputPassword" aria-describedby="emailHelp"
                    placeholder="Enter password" />
                </div>

                <button type="submit" class="btn btn-primary btn-block">Register</button>
              </form><br>
                <p>Already have an account?</p>
                <a @click.prevent="toLogin('LoginPage')" href="">Login</a>
            </div>
          </div>
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
            password: ''
        }
    },
    methods: {
        toLogin(page){
            this.$emit('toLogin', page)
        },
        register() {
            this.$emit('register', { email: this.email, password: this.password})
        }
    }
}
</script>

<style>

</style>