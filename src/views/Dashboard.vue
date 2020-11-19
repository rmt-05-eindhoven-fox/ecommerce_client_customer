<template>
  <div>
    <Navbar/>
    <!-- PRODUCT LIST -->
    <ProductList/>
    <img src="../assets/wave.svg" style="position: fixed; z-index: -1;bottom:0px;">
    <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    ProductList,
    Footer
  }
}
</script>
