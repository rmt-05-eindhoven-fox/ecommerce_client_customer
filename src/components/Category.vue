<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <a @click.prevent="fetchProducts(category.name)" class="nav-link text-dark" style="font-family: sans-serif; font-size: 1em" href="">
        {{category.name}}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Category',
  props: ['category'],
  methods: {
    fetchProducts() {
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style>

</style>