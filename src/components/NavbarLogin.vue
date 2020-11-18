<template>
  <div class="container-fluid">
      <!-- NAVBAR -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" class="navbar-brand" ><img :src="logo" width="60"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <!-- <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul> -->
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
