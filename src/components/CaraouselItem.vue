<template>
  <div :class="{ active: isActive }" class="carousel-item">
    <img :src="banners.image_url" class="d-block w-100" alt="Banner Image" />
  </div>
</template>

<script>
export default {
  name: 'CaraouselItem',
  data () {
    return {
      isActive: false
    }
  },
  props: ['banners', 'index'],
  created () {
    if (this.index === 0) {
      this.isActive = true
    }
  }
}
</script>

<style scoped>
img {
  height: 300px;
}
</style>
