<template>
  <div class="home">
    <!--Carousel-->
    <div class="banners">
      <carousel
        @next="next"
        @prev="prev"
        style="margin-left: 100px"
      >
        <carousel-slide
          v-for="(banner, index) in banners"
          :key="banner.id"
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"
        >
          <img :src="banner.image_url" alt="" style="margin-left: 300px; width: 55%;" />
        </carousel-slide>
      </carousel>
    </div>
    <!--Product list-->
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel'
import Carousel from '@/components/Carousel.vue'
import CarouselSlide from '@/components/CarouselSlide.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  data () {
    return {
      visibleSlide: 0,
      direction: 'left'
    }
  },
  components: {
    Carousel,
    CarouselSlide,
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    banners () {
      return this.$store.getters.filteredBanners
    },
    bannersLen () {
      return this.banners.length
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    next () {
      if (this.visibleSlide >= this.bannersLen - 1) {
        this.visibleSlide = 0
      } else {
        this.visibleSlide++
      }
      this.direction = 'left'
    },
    prev () {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.bannersLen - 1
      } else {
        this.visibleSlide--
      }
      this.direction = 'right'
    }
  },
  created () {
    this.fetchProducts()
    this.fetchBanners()
  }
}
</script>
