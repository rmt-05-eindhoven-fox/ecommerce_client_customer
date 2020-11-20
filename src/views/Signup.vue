<template>
    <div class="signinform">
        <div class="container">
            <div class="w3l-form-info">
                <div class="w3_info">
                    <h2>Sign Up</h2>
                    <form @submit.prevent="signup">
                        <div class="input-group">
                            <span><i class="fa fa-user" aria-hidden="true"></i></span>
                            <input v-model="email" type="email" placeholder="Email or Username" required="">
                        </div>
                        <div class="input-group">
                            <span><i class="fa fa-key" aria-hidden="true"></i></span>
                            <input v-model="password" type="Password" placeholder="Password" required="">
                        </div>
                        <button class="btn btn-primary btn-block" type="submit">Sign Up</button>
                    </form>
                     <p>Already have an account ? <a @click.prevent="toLogin" href="#">Log In</a></p>
                </div>
                <div class="w3l_form">
                    <div class="left_grid_info">
                        <img src="../assets/b.gif" alt="" style="min-height:353px" />
                    </div>
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
    name: 'Signup',
      data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signup () {
            const user = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('signup', user)
            .then(({ data }) => {
                this.$router.push("/login")
            })
            .catch(err => {
                console.log(err.response)
            })
        },
        toLogin () {
            this.$router.push("/login")
        },
        toHome () {
            this.$router.push("/")
        }
    }
}
</script>

<style>

</style>