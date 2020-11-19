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
        Price : RP {{ newPrice }}
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
  },
  computed: {
    newPrice () {
      let total = this.product.price
      let index = 1
      let result = ''
      total = total.toString()
      for (let i = total.length - 1; i >= 0; i--) {
        if (index % 3 === 0 && index !== total.length) {
          result = '.' + total[i] + result
          index++
        } else {
          index++
          result = total[i] + result
        }
      }
      return result
    }
  }
}
</script>

<style>

</style>
