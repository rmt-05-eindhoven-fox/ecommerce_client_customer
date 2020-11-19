<template>
  <div class="history-item">
    <div
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid
    >
      <div class="uk-card-media-left uk-cover-container">
        <img
          :src="history.Product.image_url"
          alt=""
          style="text-align: center; width: 150px; height: 200px; margin: 40px"
        />
      </div>
      <div>
        <div class="history-item-body uk-card-body">
          <h3 class="uk-card-title">{{ history.Product.name }}</h3>
          <p style="margin-top: -20px">Rp. {{ history.Product.price }}</p>
          <div class="quantity-input">
            <p style="margin-top: 9%">Quantity:</p>
            <p>{{ history.quantity }}</p>
          </div>
          <p>Purchase Date: {{ history.updatedAt.slice(0, 10) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: ['history']
}
</script>

<style>
</style>
