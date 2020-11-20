<template>
  <div class="carousel-item">
    <img class="d-block w-100" :src="banner.image_url" alt="First slide">
  </div>
</template>

<script>
export default {
  name: 'BannerItem',
  props: ['banner', 'i']
}
</script>

<style>

</style>
