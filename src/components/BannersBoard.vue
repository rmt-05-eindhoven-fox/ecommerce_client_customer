<template>
  <section class="banners-board">
      <div id="banners" class="carousel slide mb-2" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#banners" data-slide-to="0" class="active"></li>
          <li
            v-for="(banner, i) in banners"
            :key="i"
            data-target="#banners"
            :data-slide-to="i + 1">
          </li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://i.pinimg.com/originals/2d/73/89/2d7389d43546cb091f52a4b8d43b964e.jpg" alt="First slide">
          </div>
          <BannerItem
            v-for="(banner, i) in banners"
            :key="i"
            :banner="banner"
          />
        </div>
        <a class="carousel-control-prev" href="#banners" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#banners" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  </section>
</template>

<script>
import BannerItem from '@/components/BannerItem.vue'

export default {
  name: 'BannersBoard',
  components: {
    BannerItem
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  computed: {
    banners () {
      const banners = this.$store.state.banners.filter(el => {
        return el.status === 'active'
      })
      return banners
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style scoped>
.carousel-item {
  height: 500px;
}
</style>
