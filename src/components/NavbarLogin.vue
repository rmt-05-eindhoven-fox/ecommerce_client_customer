<template>
  <div class="container-fluid">
      <!-- NAVBAR -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" class="navbar-brand" ><img :src="logo" width="60"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        </div>
      </nav>
    </div>
</template>

<script>
import logo from '@/assets/ls-logo.png'
export default {
  name: 'NavbarLogin',
  data () {
    return {
      logo
    }
  }
}
</script>

<style>

</style>
