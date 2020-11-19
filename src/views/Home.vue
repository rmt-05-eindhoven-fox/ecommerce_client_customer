<template>
  <div class="container">
    <Navbar></Navbar>
    <Products></Products>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Products from '../components/Products'

export default {
  name: 'Home',
  components: {
    Navbar,
    Products,
  }
}
</script>

<style>

</style>
