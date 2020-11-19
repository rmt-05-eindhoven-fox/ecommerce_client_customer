<template>
  <div class="checkout-box shadow">
    <h3 class="checkout-box-text" style="text-decoration: underline">Total Payment:</h3>
    <p class="checkout-box-text">Rp. {{ total }}</p>
    <button @click="checkout" class="checkout-btn">Checkout</button>
  </div>
</template>

<script>
export default {
  name: 'CheckoutBox',
  computed: {
    total () {
      return this.$store.getters.totalPayment
    }
  },
  methods: {
    checkout () {
      this.$store
        .dispatch('checkout')
        .then(() => {
          console.log('user checked out the cart, succeed purchasing')
          this.$router.push({ name: 'Checkout' })
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>
