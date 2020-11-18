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
          <h3>Our Product</h3>
        </div>
      </div>

      <div class="container d-flex justify-content-center">
        <div class="row">
          <!-- PRODUCT CARD -->
          <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          />
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
  data () {
    return {
      userName: localStorage.getItem('full_name')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    NavbarMain,
    ProductCard
  },
  methods: {
    getProduct () {
      this.$store.dispatch('getProduct')
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
