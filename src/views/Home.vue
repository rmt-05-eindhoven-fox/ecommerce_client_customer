<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="banner in banners"
        :key="banner.id"
        :img-src="banner.url"
      ></b-carousel-slide>
    </b-carousel>

      <div class="d-flex flex-wrap justify-content-center mt-5">
        <div v-for="product in products" :key="product.id" class="row mx-4 bg-warning rounded shadow my-4">
          <div class="card body p-2" style="height: 23em; width: 15em;">
            <div class="row no-gutters d-flex align-items-center h-100">
              <div class="row no-gutters">
                <img :src="product.image_url" alt="" class="w-100">
              </div>
            </div>
            <div class="row no-gutters justify-content-center mb-2">
              <div class="h5 font-weight-bold">
                {{ product.name }}
              </div>
            </div>
            <div class="row no-gutters justify-content-center my-2">
              <div class="font-weight-lighter">
                {{ product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR"}) }}
              </div>
            </div>
            <div class="row no-gutters justify-content-around my-1">
              <a href="" @click.prevent="cart(product.id)">
                <b-icon icon="cart-plus-fill" class="mb-2" variant="success"/>
              </a>
              <div class="text-muted" style="font-size: small;">
                {{ product.stock }} remaining
              </div>
            </div>
            <div class="row no-gutters justify-content-center">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapState(['banners']),
    ...mapState(['products']),
    ...mapGetters(['categories', 'perCategory'])
  },
  mounted () {
    this.$store.dispatch('banners')
    this.$store.dispatch('products')
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    cart (id) {
      this.$store.dispatch('addToCart', { id })
      this.$store.dispatch('getCart')
    }
  }
}
</script>
