<template>
  <div class="home">
    <!-- <HelloWorld :cek="25" msg="Welcome to Your Vue.js App"/> -->
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src'
import Home from '@/components/Home.vue'
export default {
  name: 'Dashboard',
  components: {
    Home
  }
}
</script>
