<template>
   <div class="container">
      <NavbarLogin />
      <LoginForm />
   </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import NavbarLogin from '@/components/NavbarLogin.vue'
export default {
  name: 'Login',
  components: {
    NavbarLogin,
    LoginForm
  }
}
</script>

<style>

</style>
