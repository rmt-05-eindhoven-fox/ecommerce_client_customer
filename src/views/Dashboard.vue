<template>
  <section class="dashboard">
    <Navbar/>
    <div id="dasboard-content">
      <div class="row justify-content-center">
        <!-- CERITANYA SIDE MENU TAPI BELUM JADI -->
        <!-- <div id="side-menu" class="col-2 bg-light">
          This is side menu
        </div> -->
        <div id="products-board" class="col-10 px-4">
          <!-- banners -->
          <BannersBoard/>
          <!-- select category -->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="category">Category</label>
            </div>
            <select v-model="selectedCategory" class="custom-select" id="category">
              <option value="" selected>All Category</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <!-- products -->
          <div id="products-board-items">
            <div class="row">
              <ProductItem
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import BannersBoard from '@/components/BannersBoard.vue'
import ProductItem from '@/components/ProductItem.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar, BannersBoard, ProductItem
  },
  data () {
    return {
      selectedCategory: ''
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    // setSelectedCategory () {
    //   this.$store.commit('SET_SELECTED_CATEGORY', this.selectedCategory)
    // },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  computed: {
    products () {
      let products = this.$store.state.products
      if (this.selectedCategory) {
        products = products.filter(product => product.CategoryId === this.selectedCategory)
      }
      return products
    },
    // selectedCategory () {
    //   return this.$store.state.selectedCategory
    // },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchProducts()
    this.fetchCategories()
  },
  watch: {
    // selectedCategory () {
    //   // this.setSelectedCategory(this.selectedCategory)
    //   this.$store.commit('SET_SELECTED_CATEGORY', this.selectedCategory)
    // }
    selectedCategory () {
      console.log(this.selectedCategory)
    }
  }
}
</script>

<style>
/* body {
  background-color: rgba(15, 12, 12, 0.616);
} */

/* #side-menu {
  height: 100vh;
  overflow-x: hidden;
  padding-top: 20px;
} */
</style>
