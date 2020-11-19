<template>
  <div>
    <div id="div-banner" class="container mb-3">
      <Carousel />
    </div>
    <div id="div-body" class="container d-flex flex-row">
      <div id="kategory" class="container w-25">
        <Category/>
      </div>
      <div id="body-product" class="container mw-100">
        <Products @changePage="changePage"/>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Category from '../components/Category.vue'
import Products from '../components/ListofProduct.vue'
export default {
  name: 'BoardPage',
  methods: {
    changePage (string) {
      this.$emit('changePage', string)
    }
  },
  components: {
    Carousel,
    Category,
    Products
  }
}
</script>

<style>

</style>
