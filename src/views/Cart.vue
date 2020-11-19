<template>
<div>
  <CartDetail
  v-for="data in Cart"
  :key="data.id"
  :Cart='data'></CartDetail>
</div>
</template>

<script>
import CartDetail from '../components/CartDetail'

export default {
  name: 'Cart',
  components: {
    CartDetail
  },
  computed: {
    Cart () {
      return this.$store.state.Cart
    }
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  created () {
    this.fetchCart()
  }
}
</script>

<style>

</style>
