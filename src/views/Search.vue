<template>
  <div class="row mx-0 px-5">
    <div class="row w-100 no-gutters">
      <router-link to="/" class="text-decoration-none text-muted">Home</router-link>
      <p class="text-muted mx-1">></p>
      <p class="text-muted mx-1">Search Result</p>
      <p class="text-muted mx-1">></p>
      <p class="text-muted mx-1">{{ $route.params.name }}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['products']),
    ...mapGetters(['categories', 'perCategory'])
  },
  mounted () {
    this.$store.dispatch('products')
  }
}
</script>

<style>

</style>
