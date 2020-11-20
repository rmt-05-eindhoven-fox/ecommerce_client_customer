<template>
    <div class="signinform" style="min-height=50vh">
        <div class="container">
            <div class="w3l-form-info">
                <div class="w3l_form">
                    <div class="left_grid_info">
                        <img src="../assets/fish.gif" alt="" />
                    </div>
                </div>
                <div class="w3_info">
                    <h2>Sign In</h2>
                    <form @submit.prevent="login">
                        <div class="input-group">
                            <span><i class="fa fa-user" aria-hidden="true"></i></span>
                            <input v-model="email" type="email" placeholder="Email" required="">
                        </div>
                        <div class="input-group">
                            <span><i class="fa fa-key" aria-hidden="true"></i></span>
                            <input v-model="password" type="Password" placeholder="Password" required="">
                        </div>
                        <button class="btn btn-primary btn-block" type="submit">Sign In</button>
                    </form>
                     <p>Don't have account yet? <a @click.prevent="toSignup" href="#">Sign Up</a></p>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>&copy; 2020 <a @click.prevent="toHome" href="#">Lapak iWak</a></p>
        </div>
    </div>
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
            const user = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', user)
            .then(({ data }) => {
                localStorage.setItem('token', data.token)
                this.$store.commit('setLoggedIn')
                this.$router.push("/")
            })
            .catch(err => {
                console.log(err.response)
            })
        },
        toSignup() {
            this.$router.push("/signup")
        }, 
        toHome () {
            this.$router.push("/signup")
        },
    }
}
</script>

<style>

</style>