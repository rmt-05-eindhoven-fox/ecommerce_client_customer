<template>
  <div class="product-card uk-card uk-card-hover">
    <div class="uk-card-media-top">
      <img
        class="product-image"
        :src="product.image_url"
        alt=""
        style="width: 170px; height: 230px; margin-left: 40px; margin-top: 10px"
      />
    </div>
    <div class="uk-card-body">
      <h3
        class="uk-card-title product-name"
        style="
          font-weight: bold;
          height: 50px;
          text-align: center;
          font-size: 16px;
          margin-top: -20px;
          padding-right: 40px;
          padding-left: 40px;
          margin-left: -30px;
          margin-right: -30px;
        "
      >
        {{ product.name }}
      </h3>
      <p class="product-price" style="text-align: center; margin-top: -20px">
        Rp. {{ product.price }}
      </p>
      <button @click="addToCart(product.id)" class="add-cart-btn uk-animation-toggle">
        <div class="uk-animation-slide-bottom-small">Add to Cart</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart (id) {
      const token = localStorage.getItem('token')
      const payload = {
        productId: id,
        quantity: 1
      }
      this.$store.dispatch('addToCart', payload)

      if (token) {
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style>
</style>
