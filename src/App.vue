<template>
  <div id="app">
    <Loading />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'

export default {
  name: 'App',
  components: {
    Loading
  }
}
</script>
<style>
</style>
