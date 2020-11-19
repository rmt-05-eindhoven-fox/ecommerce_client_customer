<template>
  <div class="home">
    <NavbarHome/>

    <Loading v-if="$store.state.loadingStatus"/>
     <div class="d-flex mx-auto animated slideInDown" style="min-height: 100%">
    <img src="../assets/ddf7620b1a1af96d24f1413bb336f096.gif"  alt="login-page" style="margin-left:600px; width:400px;height:400px;">
       </div>
    <div class="d-flex flex-row justify-content-center mx-3 mb-3">
      <form @submit.prevent ="filterCategories" class="form-inline " style="justify-content: center!important;">
        <select id="inputCategory" class="form-control form-group mx-sm-3 mb-2" v-model="category" style="width:200px;">
         <option selected value="Unknown">Unknown</option>
          <option value="Game Console">Game Console</option>
          <option value="Smartphones and Tablets">Smartphones and Tablets</option>
          <option value="Home Electronics">Home Electronics</option>
          <option value="Gadget Accessories">Gadget Accessories</option>
          <option value="Wearable Devices">Wearable Devices</option>
        </select>
        <button type="submit" class="btn btn-warning mb-2">Filter</button>
      </form>
        <router-link class="btn btn-warning mb-2 ml-auto" to="/products"><i class="fas fa-sticky-note"></i> Create Product</router-link>
    </div>

      <div class="container animated slideInDown">
        <table class="table table-hover" style="font-size: 1.2em">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product ID</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              <Products v-for="(product, index) in data.products" :key="index"
                    :itemData="product" :number="index" @removeData="removeItem"></Products>
          </tbody>
        </table>
        </div>

  </div>
</template>

<script>
import Products from '../components/Products.vue'
import NavbarHome from '../components/NavbarHome.vue'
import Loading from '../components/Loading.vue'
// import SoldChart from '../components/SoldChart.vue'
export default {
  name: 'Home',
  components: {
    Products,
    NavbarHome,
    Loading
    // SoldChart
  },
  data () {
    return {
      category: ''
    }
  },
  computed: {
    data () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    removeItem (id) {
      this.data.products = this.data.products.filter(item => item.id !== id)
    },
    filterCategories () {
      this.data.products = this.data.products.filter(item => item.category === this.category)
    },
    goToCreateProduct () {
      this.$router.push('/products')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
</style>