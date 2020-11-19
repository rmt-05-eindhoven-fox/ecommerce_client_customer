<template>
  <div>
    <Headers/>
    <div class="flex">
      <div v-if="carts" class="w-3/4 flex flex-wrap">
        <div v-for="(cart, i) in carts" :key="i">
          <CartCard :cart="cart"/>
        </div>
      </div>
      <div v-if="!carts" class="w-3/4 flex flex-wrap">
        You haven't add any product to your cart list
      </div>
      <div class="w-1/4 mt-10">
        <div>
          Total Price:
        </div>
        <div>
          {{ totalPrice }}
        </div>
        <button class="bg-blue-400 px-5 py-2">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from '@/components/CartCard.vue'
import Headers from '@/components/Headers.vue'

export default {
  name: 'Cart',
  components: {
    Headers,
    CartCard
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      return this.$store.state.totalPrice
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>

</style>
