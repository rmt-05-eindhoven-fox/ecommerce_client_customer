<template>
  <div class="checkout">
		<h1 class="checkout-text">Checkout Successful</h1>
		<img class="checkout-pic" src="../assets/neko-gold.jpg" alt="neko-logo">
		<h3 class="checkout-text">Thank you for your purchase!</h3>
		<p class="checkout-text">You can check your purchase history <a @click.prevent="goToHistory" href="#">here</a></p>
	</div>
</template>

<script>
export default {
  name: 'Checkout',
  methods: {
    goToHistory () {
      this.$router.push({ name: 'PurchaseHistory' })
    }
  }
}
</script>
