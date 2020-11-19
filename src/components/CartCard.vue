<template>
  <div class="m-5 py-2 px-5 bg-yellow-500 rounded shadow-xl">
    <div class="mb-3">
      {{ cart.Product.name }}
    </div>
    <img :src="`${cart.Product.image_url}`" class="h-40 m-auto mb-3"/>
    <div class="mb-3">
      Rp {{ cart.Product.price }}
    </div>
    <div class="mb-3">
      Quantity:
    </div>
    <div>
      <button @click="qty--" class="px-3 py-1 bg-blue-400 rounded mr-1 shadow-xl">
        -
      </button>
      <input class="py-1 rounded w-auto" type="text" min="1" :max="cart.Product.stock" v-model="qty">
      <button @click="qty++" class="px-3 py-1 bg-blue-400 rounded ml-1 shadow-xl ">
        +
      </button>
    </div>
    <div @click="deleteCart" class="mt-3 cursor-pointer bg-red-500 rounded px-5 py-1">
      Remove from Cart X
    </div>
    <div v-if="showError" class="text-red-500 mt-2">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  data () {
    return {
      qty: this.cart.qty,
      showError: false,
      errorMessage: '',
      qtyTemp: this.qty,
      timeOut: null
    }
  },
  watch: {
    qty (newValue) {
      console.log(this.qtyTemp, '<< this.qtyTemp')
      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        const payload = {
          CartId: this.cart.id,
          ProductId: this.cart.Product.id,
          qty: +this.qty
        }
        this.$store.dispatch('updateCart', payload)
          .then(({ data }) => {
            this.showError = false
            this.$store.dispatch('fetchCart')
          })
          .catch(err => {
            console.log(err.response.data)
            this.showError = true
            this.errorMessage = err.response.data.message + ', ' + this.cart.Product.name + ' current stock is ' + this.cart.Product.stock
            this.$store.dispatch('fetchCart')
          })
      }, 300)
    }
  },
  props: ['cart'],
  methods: {
    deleteCart () {
      const payload = {
        CartId: this.cart.id
      }
      this.$store.dispatch('deleteCart', payload)
        .then(({ data }) => {
          console.log(data.message)
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
