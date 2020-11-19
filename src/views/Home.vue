<template>
  <div>
    <NavbarMain />
    <div class="homepage mt-5">
      <!-- BANNER -->
      <flash-message/>
      <div class="container-fluid">
        <div class="row">
          <div class="jumbotron text-white">
            <div class="header-wrap">
            <h1>Welcome to our shop</h1>
            <h5>{{ userName }}</h5>
            </div>
          </div>
        </div>
        <div class="product-header">
          <h3>Our Product</h3>
        </div>
      </div>
      <div class="container">
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
    <Footer/>
  </div>
</template>

<script>
import NavbarMain from '@/components/NavbarMain.vue'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer.vue'
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
    ProductCard,
    Footer
  },
  methods: {
    getProduct () {
      this.$store.dispatch('getProduct')
    }
  },
  created () {
    this.getProduct()
  },
  beforeRouterEnter (to, from, next) {
    const role = localStorage.getItem('role')
    if (role === 'Admin') {
      next()
    } else {
      next('/')
    }
  }
}
</script>
