<template>
  <div class="home">
    <!-- <HelloWorld :cek="25" msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src'
import Header from '@/components/Header.vue'
export default {
  name: 'Dashboard',
  components: {
    Header
  },
  computed: {
    cartWatch () {
      return this.$store.state.cartWatch
    }
  },
  methods: {
    showCartProducts () {
      const accessToken = localStorage.getItem('access_token')
      this.$store.dispatch('fetchCartProducts', accessToken)
    },
    showProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  watch: {
    cartWatch () {
      this.showCartProducts()
      this.showProducts()
    }
  },
  mounted () {
    this.showCartProducts()
    this.showProducts()
  },
  created () {
    this.$store.dispatch('changeBgColor', '#FFFFFF')
  }
}
</script>
