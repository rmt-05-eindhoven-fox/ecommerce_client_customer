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
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->
      <Banner v-for="banner in banners" :key="banner.id" :banner="banner"/>
    </b-carousel>
  </div>
</template>

<script>
import Banner from './Banner.vue'
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  components: {
    Banner
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>

</style>
