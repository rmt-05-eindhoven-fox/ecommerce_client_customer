<template>
  <div class="text-center pt-2 bg-success">
    <h2>Products</h2>
    <ContainerProducts/>
  </div>
</template>

<script>
import ContainerProducts from '../components/ContainerProducts.vue'

export default {
  name: 'Product',
  components: { ContainerProducts }
}
</script>

<style>

</style>
