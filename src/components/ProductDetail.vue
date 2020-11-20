<template>
  <div class="row mx-4 bg-warning rounded shadow my-4">
    <div class="card body p-2" style="height: 23em; width: 15em;">
      <div class="row no-gutters d-flex align-items-center h-100">
        <div class="row no-gutters">
          <img :src="product.image_url" alt="" class="w-100">
        </div>
      </div>
      <div class="row no-gutters justify-content-center mb-2">
        <div class="h5 font-weight-bold">
          {{ product.name }}
        </div>
      </div>
      <div class="row no-gutters justify-content-center my-2">
        <div class="font-weight-lighter">
          {{ product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR"}) }}
        </div>
      </div>
      <div class="row no-gutters justify-content-around my-1">
        <a href="" @click.prevent="cart(product.id)">
          <b-icon icon="cart-plus-fill" class="mb-2" variant="success"/>
        </a>
        <div class="text-muted" style="font-size: small;">
          {{ product.stock }} remaining
        </div>
      </div>
      <div class="row no-gutters justify-content-center">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    cart (id) {
      this.$store.dispatch('addToCart', { id })
    }
  }
}
</script>

<style>

</style>
