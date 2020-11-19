<template>
  <div>
    <Navbar/>
    <!-- CART LIST -->
    <CartList/>
    <img src="../assets/wave.svg" style="position: fixed; z-index: -1;bottom:0px;">
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartList from '../components/CartList'
import Footer from '../components/Footer.vue'
export default {
  name: 'Carts',
  components: {
    Navbar,
    CartList,
    Footer
  },
  methods: {
  }
}
</script>

<style>

</style>
