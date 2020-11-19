<template>
  <div class="cart">
    <h1 class="cart-page-title">
      My Shopping Cart:
    </h1>
    <div v-if="!carts.length" class="cart-list">
      <h3 style=" margin-left: 100px; margin-top: 50px; font-family: Assistant">You don't have any products in cart yet!</h3>
    </div>
    <div v-if="carts" class="cart-list">
      <cart-item
        v-for="cart in carts"
        :key="cart.id"
        :cart="cart"
      ></cart-item>
    </div>
    <CheckoutBox />
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import CheckoutBox from '@/components/CheckoutBox.vue'

export default {
  name: 'Cart',
  computed: {
    carts () {
      return this.$store.getters.filteredCarts
    }
  },
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    }
  },
  components: {
    CartItem,
    CheckoutBox
  },
  created () {
    this.fetchCarts()
  }
}
</script>
