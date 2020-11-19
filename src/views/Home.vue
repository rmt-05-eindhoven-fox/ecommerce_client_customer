<template>
  <div class="home">
    <Navigation/>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light text-light sidebar">
          <div class="sidebar-sticky">
          <li class="nav-item">
            <a href="" class="nav-link text-dark" style="font-family: impact; font-size: 1.5em; letter-spacing: 7px" >
              Products
            </a>
          </li>
            <Category v-for="category in categories" :key="category.id" :category="category"/>
          </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-3">
        <div class="row">
          <Product v-for="product in products" :key="product.id" :product="product"/>
        </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Category from '../components/Category.vue'
import Product from '../components/Product.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Category,
    Product
  },
  methods: {
    fetchCategories() {
      this.$store.dispatch('fetchCategories')
    },
    fetchProducts() {
      this.$store.dispatch('fetchProducts')
    },
    fetchCart() {
      const token = localStorage.getItem("token")
      this.$store.dispatch('fetchCart', token)
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    products() {
      return this.$store.state.products
    },
    cart() {
      return this.$store.state.cart
    }
  },
  created() {
    this.fetchCategories(),
    this.fetchProducts(),
    this.fetchCart()
  }
}
</script>
