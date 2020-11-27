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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('banners')
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapState(['banners'])
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>

</style>
