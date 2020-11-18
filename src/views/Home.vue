<template>
<div>
  <NavbarMain/>
  <div class="homepage mt-5">
      <!-- BANNER -->
      <div class="container-fluid">
        <div class="row">
          <div class="jumbotron text-right text-white">
            <h1>Welcome to our shop</h1>
            <h5>{{userName}}</h5>
          </div>
        </div>
        <div class="product-header">
          <h3>Available Product</h3>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <!-- PRODUCT CARD -->
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import NavbarMain from '@/components/NavbarMain.vue'
import ProductCard from '@/components/ProductCard'
export default {
  name: 'Home',
  computed: {
    userName () {
      return this.$store.state.userName
    }
  },
  components: {
    NavbarMain,
    ProductCard
  }
}
</script>
