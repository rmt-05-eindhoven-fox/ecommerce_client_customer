<template>
  <div class="m-5 py-2 px-5 bg-yellow-500 rounded">
    <div class="mb-3">
      {{ product.name }}
    </div>
    <img :src="`${product.image_url}`" class="h-40 mb-3"/>
    <div class="mb-3">
      Rp {{ product.price }}
    </div>
    <div class="mb-3">
      Stock   {{ product.stock }}
    </div>
    <input class="py-1 rounded w-auto" type="number" min="1" :max="product.stock" v-model="qty">
    <div @click="addToCart" class="bg-blue-500 py-2 cursor-pointer">
      Add to cart +
    </div>
    <div v-if="showError" class="text-red-500 mt-2">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  data () {
    return {
      qty: 1,
      showError: false,
      erroMessage: ''
    }
  },
  props: ['product'],
  methods: {
    addToCart () {
      if (!localStorage.getItem('access_token')) {
        return this.$router.push('auth')
      }
      const payload = {
        ProductId: this.product.id,
        qty: +this.qty
      }
      // console.log(payload, '<< vue ProductId')
      this.$store.dispatch('addToCart', payload)
        .then(({ data }) => {
          console.log(data)
          console.log('Add Success')
        })
        .catch(err => {
          console.log(err)
          console.log(err.response.data.message)
          this.showError = true
          this.errorMessage = err.response.data.message
        })
    }
  }
}
</script>

<style>

</style>
