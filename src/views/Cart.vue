<template>
  <div class="container">
    <Navbar />

    <div class="row mt-4">
      <div class="col"></div>
      <div class="col-10">
        <div
          v-if="this.cart.length > 0"
        >
          <h1>My Shopping Cart</h1>

          <CartCard
            v-for="product in cart"
            :key="product.id"
            :product="product"
          />

          <hr>
          <div class="total-purchase">
            <h5>Total Purchase : </h5>
            <h5>{{ totalPriceDisplay }}</h5>

          </div>
          <button
            @click="checkout"
            class="btn btn-outline-dark float-right mt-4">Checkout</button>

        </div>

        <div
          v-else
        >
          <lottie-player
          class="mx-auto"
          src="https://assets6.lottiefiles.com/packages/lf20_ibd44T.json"
          background="transparent"  speed=".5" style="width: 200px; height: 200px;" loop autoplay></lottie-player>
          <h1 class="mt-3" style="text-align:center">Your Cart is Empty</h1>
        </div>
      </div>
      <div class="col"></div>

    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartCard from '../components/CartCard'
import currencyConvert from '../helpers/currencyConvert'

export default {
  name: 'Cart',
  components: {
    Navbar,
    CartCard
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    totalPrice () {
      let output = 0
      this.cart.forEach(product => {
        const price = product.Product.price
        const quantity = product.quantity

        output += (price * quantity)
      })

      return output
    },
    totalPriceDisplay () {
      return currencyConvert(this.totalPrice)
    }
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout')
    }
  },
  created () {
    this.$store.dispatch('fetchUserCart')
  }
}
</script>

<style>

</style>
