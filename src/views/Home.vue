<template>
  <div class="container">
    <Navbar></Navbar>
    <Banner></Banner>
    <Products></Products>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Banner from '../components/Banner'

export default {
  name: 'Home',
  components: {
    Navbar,
    Products,
    Banner
  }
}
</script>

<style>

</style>
