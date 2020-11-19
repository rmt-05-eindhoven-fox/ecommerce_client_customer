<template>
  <div class="products">
    <v-row>
      <v-col cols="2">
        <v-sheet>
          <h1>Categories</h1>
          <v-list>
            <v-list-item-group
            color="#c7aca3"
            mandatory
            >
              <v-list-item @click="goToProducts()">
                <v-list-item-content>
                  <v-list-item-title>
                    All Products
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <CategoryList
              v-for="category in categories"
              :key="category.id"
              :category="category">
              </CategoryList>
            </v-list-item-group>
          </v-list>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet>
          <h1>{{ title }}</h1>
          <div class="main-content">
            <div v-if="loadingProduct" class="loading">
              <v-row v-for="(n, i) in 3" :key="i">
                <v-col v-for="(n, i) in 4" :key="i">
                  <v-skeleton-loader
                    class="mx-auto"
                    max-width="300"
                    type="card"
                  ></v-skeleton-loader>
                </v-col>
              </v-row>
            </div>
              <router-view/>
              <div v-if="this.$route.name === 'Products'" class="all-products">
                <v-row class="d-flex">
                  <ProductCard
                  v-for="product in products"
                  :key="product.id"
                  class="product-card-element"
                  :product="product">
                  </ProductCard>
                </v-row>
              </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CategoryList from '../components/CategoryList'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Product',
  components: {
    ProductCard,
    CategoryList
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    categories () {
      return this.$store.state.categories
    },
    loadingProduct () {
      return this.$store.state.loadingProduct
    },
    title () {
      if (!this.$store.state.currentCategory) {
        return 'All Products'
      }
      return this.$store.state.currentCategory
    }
  },
  methods: {
    fetchProducts () {
      this.$store.commit('loadingProduct', true)
      this.$store.dispatch('fetchProducts')
        .then(({ data }) => {
          this.$store.commit('setProducts', data)
          this.$store.commit('loadingProduct', false)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
        .then(({ data }) => {
          this.$store.commit('setCategories', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    goToProducts () {
      this.$store.commit('changeCurrentCategory', 'All Products')
      this.$router.push('/products')
      this.fetchProducts()
    }
  },
  created () {
    this.fetchProducts()
    this.fetchCategories()
  }
}
</script>

<style>
.filled-heart {
  color: red !important;
}

.add-to-cart-btn {
  margin-top: 8px;
  border-radius: 15px;
}

.product-card-element {
  margin-left: 16px;
}

.main-content {
  max-height: 80vh;
  overflow: auto;
}
</style>
