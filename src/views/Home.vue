<template>
  <div class="home">
    <Banner></Banner>
    <div class="latest-item">
      <div class="d-flex align-self-center">
        <h1>Latest product</h1>
        <v-spacer></v-spacer>
        <v-btn
          color="#442C2E"
          outlined
          @click="goToProducts"
        >View all</v-btn>
      </div>
      <v-sheet
      class="mx-auto"
      max-width="100%"
      >
      </v-sheet>
      <v-sheet
        class="mx-auto"
      >
        <swiper class="swiper" :options="swiperOption">
          <ProductSlideItem
            class="product-slide-item"
            v-for="product in products"
            :key="product.id"
            :product="product"
          >
          </ProductSlideItem>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </v-sheet>
      <v-row v-if="isLoading">
        <v-col v-for="(n, i) in 4" :key="i">
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
    <v-divider></v-divider>
    <div class="categories">
      <div class="d-flex align-self-center">
        <h1>Browse by Category</h1>
      </div>
      <v-row class="d-flex">
        <CategoryCard
        v-for="category in categories"
        :key="category.id"
        class="category-card-element"
        :category="category"
        >
        </CategoryCard>
      </v-row>
      <v-row v-if="isLoadingCategories">
        <v-col v-for="(n, i) in 5" :key="i">
          <v-skeleton-loader
            class="mx-auto"
            max-width="200"
            type="card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'
import '../../node_modules/swiper/swiper-bundle.css'
import Banner from '../components/Banner'
import CategoryCard from '../components/CategoryCard'
import ProductSlideItem from '../components/ProductSlideItem'

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false,
      isLoadingCategories: false,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 40,
        grabCursor: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    Banner,
    ProductSlideItem,
    CategoryCard,
    Swiper
  },
  computed: {
    products () {
      const products = this.$store.state.products.filter(product => product.stock > 0)
      if (products.length > 7) {
        return products.slice(0, 8)
      }
      return products
    },
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    goToProducts () {
      this.$router.push('/products')
    },
    fetchProducts () {
      this.isLoading = true
      this.$store.dispatch('fetchProducts')
        .then(({ data }) => {
          this.isLoading = false
          this.$store.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategories () {
      this.isLoadingCategories = true
      this.$store.dispatch('fetchCategories')
        .then(({ data }) => {
          this.isLoadingCategories = false
          this.$store.commit('setCategories', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProducts()
    this.fetchCategories()
  }
}
</script>

<style>
.home {
  color: #442C2E;
}

.latest-item {
  margin-top: 16px;
}

.v-card {
  transition: opacity .4s ease-in-out;
}

.category-card:not(.on-hover) {
  opacity: 0.8;
}

.category-card:hover {
  cursor: pointer;
}

.show-btns {
  background-color: red !important;
}

.category-card-element {
  margin-left: 16px;
  margin-top: 16px;
}

.v-divider {
  margin-top: 16px;
  margin-bottom: 8px;
}

.product-card:hover {
  cursor: pointer;
}

.product-img {
  max-height: 220px;
  overflow: hidden;
}

.transform {
  transform: scale(1.5)
}

.product-card-title {
  color: #442C2E;
}

.product-card-price {
  color: #442C2E;
  background-color: #FEDBD0;
}

.swiper-button-next {
  color: #442C2E !important;
}

.swiper-button-prev {
  color: #442C2E !important;
}
</style>
