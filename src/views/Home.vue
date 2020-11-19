<template>
<div>
    <Navbar/>
    <div class="row m-4">
        <ListProduct
        v-for="(product,i) in Products"
        :key="i"
        :product="product">
        </ListProduct>
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import ListProduct from '../components/ListProduct'
export default {
  name: 'Home',
  components: {
    ListProduct,
    Navbar
  },
  computed: {
    Products () {
      return this.$store.state.dataProduct
    }
  },
  created () {
    this.$store.dispatch('GET_DATA_PRODUCT')
  }
}
</script>

<style>

</style>
