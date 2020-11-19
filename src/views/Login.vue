<template>
  <div>
      <Navbar/>
      <img v-if="isLoading === true" class="animate__animated animate__fadeIn" src="../assets/animation_500_khoa45kz.gif" style="position: fixed; z-index: 999; top:0; left:0; right:0; bottom:0; margin:auto;" height="300">

      <div class="row justify-content-center animate__animated animate__fadeIn" style="margin-top: 15vh;">

            <div class="card shadow p-2 col-3 align-items-center" >
                <div class="card-body">
                    <h4 class="text-center text-blue">SHOPPEDIA</h4>
                    <form @submit.prevent="login">
                        <div class="form-group ">
                            <label >
                                Email
                            </label>
                            <input
                                v-model="email"
                                class="form-control text-blue"
                                type="email"
                            >
                        </div>

                        <div class="form-group">
                            <label >
                                Password
                            </label>
                            <input
                                v-model="password"
                                class="form-control text-blue"
                                type="password"
                            >
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                        <div class="text-center mb-4" style="font-size: 12px;">Don't have an account? <a @click.prevent="changePage('register')" class="btn-link" href="#" >Register</a></div>
                    </form>
                    <!-- <a v-google-signin-button="clientId" id="google-button" class="btn btn-block btn-social btn-google">
                        <i class="fa fa-google"></i> Sign in with Google
                    </a> -->
                </div>
            </div>

            <img class="card shadow col-3 align-items-center" width="190px" src="../assets/undraw_verified_re_4io7 (1).svg">

        </div>
        <img src="../assets/wave.svg" style="position: fixed; z-index: -1;bottom:0px;">
        <Footer/>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar'
export default {
  name: 'Login',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('SET_LOGIN', data.access_token)
          this.$router.push('/')
          this.$store.commit('SET_ISLOADING', false)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        })
        .catch(err => {
          this.$store.commit('SET_ISLOADING', false)
          console.log(err.response.data)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: (err.response.data.msg)
          })
        })
    },
    changePage (path) {
      this.$store.dispatch('changePage', path)
    }
  }
}
</script>

<style>

</style>
