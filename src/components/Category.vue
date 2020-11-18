<template>
  <div class="category">
    <VueSlickCarousel v-bind="secondSlider">
      <div class="categories">
        <img src="../assets/106725307-1601554921056-surface-laptop-go.jpg" class="img-thumbnail" alt="product-1" />
        <p class="site-btn btn-span text-center my-2">LAPTOP & COMPUTERS</p>
      </div>
      <div class="categories">
        <img src="../assets/kursi.png" class="img-thumbnail" alt="product-1" />
        <p class="site-btn btn-span text-center my-2">SOFA & CHAIRS</p>
      </div>
      <div class="categories">
        <img src="../assets/pot.png" class="img-thumbnail" alt="product-1" />
        <p class="site-btn btn-span text-center my-2">DECORATIONS</p>
      </div>
      <div class="categories">
        <img src="../assets/alexa.png" class="img-thumbnail" alt="product-1" />
        <p class="site-btn btn-span text-center my-2">HOME ELECTRONICS</p>
      </div>
      <div class="categories">
        <img src="../assets/microwave.png" class="img-thumbnail" alt="product-1" />
        <p class="site-btn btn-span text-center my-2">APPLIANCES</p>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Category',
  data () {
    return {
      secondSlider: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      }
    }
  },
  components: {
    VueSlickCarousel
  }
}
</script>

<style>
  .categories p {
    font-weight: bold;
  }
</style>
