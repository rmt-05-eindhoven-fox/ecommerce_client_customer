<template>
  <div>
    <h2 class="text-center mt-3">Carts</h2>
    <h5 class="text-center mb-2">Item: {{ productCount }} Amount: {{ amountItem }} Total: {{ totalPrice }}</h5>
    <!-- {{ arrayOfCarts }} -->
    <div class="container">
      <div class="row justify-content-center">
        <CartData
          class="col-2"
          v-for="cartData in arrayOfCarts"
          :key="cartData.id"
          :cartData="cartData"
          @cartDeleted="cartDeleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartData from '../components/CartData.vue'

export default {
  name: 'Cart',
  components: { CartData },
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    },
    cartDeleted (ms) {
      setTimeout(() => {
        this.fetchCarts()
      }, ms + 400)
    }
  },
  created () {
    this.fetchCarts()
  },
  computed: {
    arrayOfCarts () {
      return this.$store.state.productStore.carts
    },
    productCount () {
      return this.$store.state.productStore.carts.length
    },
    amountItem () {
      let count = 0
      this.$store.state.productStore.carts.forEach(el => {
        count += el.qty
      })
      return count
    },
    totalPrice () {
      let total = 0
      this.$store.state.productStore.carts.forEach(el => {
        total += el.Product.price * el.qty
      })
      return total
    }
  }
}
</script>

<style>

</style>
