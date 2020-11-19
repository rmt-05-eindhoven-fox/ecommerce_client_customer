<template>
  <div>
    <Navbar/>
    <!-- PRODUCT LIST -->
    <ProductList/>

  </div>

</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    ProductList
  }
}
</script>
