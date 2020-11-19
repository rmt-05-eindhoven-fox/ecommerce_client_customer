<template>
  <div>
    <Headers />
    <!-- Main -->
    <div class="flex h-full w-full">
      <Navigation/>
      <Content/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Headers from '@/components/Headers.vue'
import Navigation from '@/components/Navigation.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Headers,
    Navigation,
    Content,
    Footer
  },
  methods: {
    checkLogin () {
    }
  },
  created () {
  }
}
</script>
