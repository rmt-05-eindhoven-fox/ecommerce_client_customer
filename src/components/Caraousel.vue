<template>
  <div
    id="carouselExampleIndicators"
    class="container carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <CaraouselItem
        v-for="(banner, index) in banners"
        :key="banner.id"
        :banners="banner"
        :index="index"
      />
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import CaraouselItem from '@/components/CaraouselItem.vue'
export default {
  name: 'Caraousel',
  components: {
    CaraouselItem
  },
  computed: {
    banners () {
      const dataBanners = this.$store.state.banners
      return this.filterBanners(dataBanners)
    }
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    filterBanners (banners) {
      return banners.filter(banner => banner.status === true)
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>
.carousel-item img {
  height: 300px;
}
</style>
