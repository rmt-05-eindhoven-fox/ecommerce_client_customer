<template>
  <div>
    <Navbar />
        <!-- <center><button class="btn btn-success m-5" @click.prevent="onCheckoutHandler"> checkout </button></center> -->
      <table class="table table-striped mt-5">
        <thead>
            <tr>
                <th scope="col">NAME</th>
                <th scope="col">PRICE</th>
                <th scope="col">Quantity</th>
                <th scope="col"> </th>
            </tr>
        </thead>
        <tbody>
            <CartCard
            v-for="(cart,i) in dataCart"
            :key="i"
            :data="cart"
            ></CartCard>
        </tbody>
    </table>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartCard from '../components/CartCard'
export default {
  name: 'Cart',
  components: {
    CartCard, Navbar
  },
  computed: {
    dataCart () {
      console.log('data add to cart.vue', this.$store.state.dataCart)
      return this.$store.state.dataCart
    }
  },
  methods: {
    onCheckoutHandler () {
      this.$store.dispatch('CHECKOUT_CART')
    }
  },
  created () {
    this.$store.dispatch('GET_LIST_CART')
  }
}
</script>

<style>

</style>
