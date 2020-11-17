<template>
  <div class="container">
    <Navbar/>
    <!-- CART LIST -->
    <CartList/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartList from '../components/CartList'
export default {
  name: 'Carts',
  components: {
    Navbar,
    CartList
  },
  methods: {
  }
}
</script>

<style>

</style>
