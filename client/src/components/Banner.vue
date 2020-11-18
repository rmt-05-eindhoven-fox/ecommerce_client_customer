<template>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div v-for="(banner, i) in banners" :key="banner.id" class="carousel-item" v-bind:class="i === 0 ? 'active' : ''">
      <img class="d-block w-100 h-50" :src="banner.image_url" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
          <h5>{{ banner.title }}</h5>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
export default {
    name: 'Banner',
    created () {
      this.fetchBanner(),
      this.$store.dispatch('fetchProduct')
    },
    methods: {
      fetchBanner(){
        this.$store.dispatch('fetchBanner')
      }
    },
    computed: {
      banners () {
        return this.$store.state.banners
      }
    }
}
</script>

<style>
.carousel-item {
    width: 100%;
    max-height: 430px !important;
}
</style>