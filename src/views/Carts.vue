<template>
  <div>
    <!-- NAVBAR -->
    <Navbar/>

    <!-- CARTS PRODUCTS -->
    <div class="container my-3 pb-5">
      <div class="row">
        <div class="col d-flex justify-content-between align-items-center ml-4 mr-2">
          <div>
            <h2>Your Cart :</h2>
          </div>
        </div>
      </div><br>
      <h2 v-if="carts.cart.length <= 0" class="text-center mt-5 pt-5"> . .Your Carts is Empty. . </h2>
      <div v-else-if="carts.cart.length > 0" class="container mx-2">
        <div class="row">
          <div class="col-md">
            <CartsProducts
              v-for="cartsProduct in carts.cart"
              :key="cartsProduct.id"
              :cartsProduct="cartsProduct"
            />
          </div>
          <div class="col-md-auto text-center">
            <h3 class="bg-light rounded p-3 shadow">Total: {{carts.total}}</h3>
            <button @click.prevent="checkout()" class="btn btn-primary btn-lg">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
    <!-- CARTS PRODUCTS -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartsProducts from '../components/CartsProducts.vue'

export default {
  name: 'Carts',
  components: {
    Navbar,
    CartsProducts
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  methods: {
    readCart () {
      this.$store.dispatch('readCart')
    },
    checkout () {
      this.$store.dispatch('checkout')
    }
  },
  created () {
    this.readCart()
  }
}
</script>

<style>

</style>
