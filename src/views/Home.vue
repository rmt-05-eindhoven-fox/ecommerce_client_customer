<template>
  <div>
    <banner/>
    <div class="d-flex flex-wrap justify-content-center mt-5">
      <div v-for="product in products" :key="product.id">
        <product :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Product from '../components/ProductDetail.vue'
import Banner from '../components/Banner.vue'

export default {
  components: { Product, Banner },
  computed: {
    ...mapState(['products'])
  },
  mounted () {
    this.$store.dispatch('products')
  }
}
</script>
