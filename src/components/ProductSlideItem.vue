<template>
  <swiper-slide>
    <v-hover v-slot="{ hover }">
      <v-card
        class="mx-auto product-card ma-4"
        max-width="260"
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
        @click="goToProductDetail"
      >
        <div class="product-img">
          <v-img
            :src="product.image_url"
            :class="{ 'transform': hover }"
          ></v-img>
        </div>
        <v-card-title
        class="product-card-title"
        >
          {{ product.name }}
        </v-card-title>
        <v-card-subtitle>
          <p v-if="product.stock">Stock: {{ product.stock }}</p>
          <p v-else style="color: red">Out of Stock</p>
        </v-card-subtitle>
        <v-card-title
        class="product-card-price"
        >
          {{ price }}
        </v-card-title>
      </v-card>
    </v-hover>
  </swiper-slide>
</template>

<script>
import { SwiperSlide } from 'vue-awesome-swiper'
import '../../node_modules/swiper/swiper-bundle.css'
export default {
  name: 'ProductSlideItem',
  props: ['product'],
  components: {
    SwiperSlide
  },
  computed: {
    price () {
      const num = Number(this.product.price).toLocaleString('id-ID')
      const price = 'Rp. ' + num + ',-'
      return price
    }
  },
  methods: {
    goToProductDetail () {
      const id = this.product.id
      this.$store.dispatch('productDetail', id)
      this.$router.push(`/products/detail/${id}`)
    }
  }
}
</script>

<style>

</style>
