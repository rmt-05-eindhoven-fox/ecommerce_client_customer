<template>
  <div class="dashboard">
    <!-- NAVBAR -->
    <Navbar/>

    <!-- PRODUCTS -->
    <div class="container my-3 pb-5">
      <div class="row">
        <div class="col d-flex justify-content-between align-items-center ml-4 mr-2">
          <div style="width: 222px">
            <select v-model="selectedCategory" class="form-control text-light" style="background-color: #596e79;">
              <option value="">All Products</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
            </select>
          </div>
        </div>
      </div><br>
      <div class="container mx-2">
        <Products
        v-for="product in products"
        :key="product.id"
        :product="product"
        />
      </div>
    </div>
    <!-- PRODUCTS -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Products from '../components/Products'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Products
  },
  data () {
    return {
      // Filter
      selectedCategory: ''
    }
  },
  computed: {
    login_user () {
      return localStorage.getItem('login_user')
    },
    products () {
      if (this.selectedCategory) {
        return this.$store.getters.filteredProductsByCategory(this.selectedCategory)
      } else {
        return this.$store.state.products
      }
    },
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    readProducts () {
      this.$store.dispatch('readProducts')
    },
    readCategories () {
      this.$store.dispatch('readCategories')
    }
  },
  created () {
    this.readProducts()
    this.readCategories()
  }
}
</script>
