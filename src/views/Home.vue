<template>
  <div class="home">

    <Navbar />

    <router-view></router-view>

    <!-- <Footer /> -->

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/home/Navbar.vue'
// import Footer from '@/components/home/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  created () {
    const token = localStorage.getItem('access_token')
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchLiveBanner')
    if (token) {
      this.$store.dispatch('fetchWhistlist')
      this.$store.dispatch('fetchCart')
    }
  }
}
</script>

<style scoped>
.featured-product {
    position: relative;
    padding: 30px 0;
}
</style>
