<template>
  <div class="product-card uk-card uk-card-default">
    <div class="uk-card-media-top">
      <img
        class="product-image"
        :src="product.image_url"
        alt=""
        style="width: 170px; height: 230px; margin-left: 25px; margin-top: 10px"
      />
    </div>
    <div class="uk-card-body">
      <h3
        class="uk-card-title product-name"
        style="font-size: 18px; margin-top: -20px; margin-bottom: -15px"
      >
        {{ product.name }}
      </h3>
      <p class="product-price">Rp. {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>
</style>
