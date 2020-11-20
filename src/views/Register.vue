<template>
  <div class="container">
      <NavbarLogin />
      <RegisterForm />
   </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'
import NavbarLogin from '@/components/NavbarLogin.vue'
export default {
  name: 'Register',
  components: {
    NavbarLogin,
    RegisterForm
  }
}
</script>

<style>

</style>
