<template>
  <div class="mb-3">
    <b-card
      :title="product.name"
      :img-src="product.imgUrl"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 15rem;"
      class="mb-2"
      footer-tag="footer"
    >
      <b-card-text>
        Price : RP {{ product.price }}
      </b-card-text>
      <p>Stock ({{ product.stock }})</p>
      <b-button href="#" variant="primary" @click="addCart"><i class="fas fa-cart-plus"></i> Add to Cart</b-button>
      <template #footer>
        <em><i class="fas fa-tag"></i>{{ product.Category.name }}</em>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    addCart () {
      if (!localStorage.token) {
        this.changePage('Login')
      } else {
        const payload = {
          ProductId: this.product.id
        }
        this.$store.dispatch('addCart', payload)
      }
    },
    changePage (string) {
      this.$emit('changePage', string)
    }
  }
}
</script>

<style>

</style>
