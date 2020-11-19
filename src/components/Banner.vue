<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    height="40vh"
  >
    <v-carousel-item
      v-for="banner in banners"
      :key="banner.id"
      :src="banner.image_url"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Banner',
  computed: {
    banners () {
      const result = this.$store.state.banners.filter(banner => banner.status === 'Active')
      return result
    }
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>

</style>
