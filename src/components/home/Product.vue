<template>
  <div id="product-list p-1 m-0">

    <Carousel />
    <div class="row container-fluid">
      <!-- Side Bar Start -->
      <div class="col-md-3 sidebar">
        <div class="sidebar-widget category">
          <h2 class="title">Category</h2>
          <nav class="navbar bg-light">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a @click.prevent="allProduct" class="nav-link" href="#">All Category</a>
              </li>
              <li v-for="(cat, index) in categories" :key="index" class="nav-item">
                <a @click.prevent="productByCategory(cat.id)" class="nav-link" href="#">{{ cat.name }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- Side Bar End -->

      <div class="col-md-9">
        <div class="row">
          <h1 v-if="products < 1" class="text-center">No product with selected category</h1>
          <div v-for="(product, index) in products" :key="index" class="col-lg-4 m-0 mb-4" style="max-heiht: 310px; min-width: 310px">
            <div class="product-item">
              <div class="product-title">
                <a href="#">{{ product.name }}</a>
              </div>
              <div class="product-image">
                <a href="#">
                  <img :src="product.image_url" alt="Product Image" width="100px" height="250px">
                </a>
                <div class="product-action">
                  <h5 v-if="isOutOfStock(product.stock)">
                    <span class="badge badge-secondary">Out of Stock</span>
                  </h5>
                  <div v-else>
                    <a href="#" @click.prevent="addToCart(product.id)"><i class="fa fa-cart-plus"></i></a>
                    <a href="#" @click.prevent="addToWhistlist(product.id)"><i class="fa fa-heart"></i></a>
                  </div>
                </div>
              </div>
              <div class="product-price">
                <h3><span>Rp</span>{{ formatNumber(product.price)}}</h3>
                <a v-if="isOutOfStock(product.stock)" class="float-right mt-1">
                  <span class="badge badge-danger font-weight-bold">Out of Stock</span>
                </a>
                <!-- <a class="btn" href="">Ready stock</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue'

export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    formatNumber (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    productByCategory (id) {
      this.$store.dispatch('fetchProductByCategory', id)
    },
    allProduct () {
      this.$store.dispatch('fetchProducts')
    },
    isOutOfStock (stock) {
      if (stock < 1) {
        return true
      }
      return false
    },
    addToWhistlist (produtcId) {
      // console.log(produtcId)
      const token = localStorage.getItem('access_token')
      console.log(token)
      if (token) {
        this.$store.dispatch('addWhistlist', produtcId)
          .then((result) => {
            console.log(result)
          }).catch((err) => {
            console.log(err)
          })
      } else {
        this.$router.push({ name: 'Login' })
      }
    },
    addToCart (productId) {
      const token = localStorage.getItem('access_token')
      console.log(token)
      if (token) {
        this.$store.dispatch('addToCart', productId)
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  },
  components: {
    Carousel
  }
}
</script>

<style>

</style>
