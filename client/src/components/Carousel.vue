<template>
  <div class="carousel">
    <slot></slot>
    <button
      @click="next"
      class="next banner-btn"
      uk-icon="icon: arrow-right; ratio: 2.5"
    ></button>
    <button
      @click="prev"
      class="prev banner-btn"
      uk-icon="icon: arrow-left; ratio: 2.5"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  methods: {
    next () {
      this.$emit('next')
    },
    prev () {
      this.$emit('prev')
    }
  }
}
</script>
