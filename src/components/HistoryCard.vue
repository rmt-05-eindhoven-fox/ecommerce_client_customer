<template>
  <div class="cart-card">
    <img class="cart-card-detail-1" style="width:90px" :src="entry.Product.image_url" alt="Card image cap">
    <div class="cart-card-detail-2">
      <h6>{{ entry.Product.name }}</h6>
    </div>
    <div class="cart-card-detail-3">
      <p class="mx-auto" style="text-align: right;">x {{ entry.quantity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: ['entry']
}
</script>

<style>

</style>
