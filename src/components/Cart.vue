<template>
  <div>
    <h1>Your Cart</h1>
    <div class="container d-flex justify-content-between">
      <div class="container">
        <b-card-group deck>
          <b-card header="List of Products">
            <EachCart v-for="cart in carts" :key="cart.id" :cart="cart"/>
          </b-card>
        </b-card-group>
      </div>
      <div class="container w-75">
        <b-card-group deck>
          <b-card header="Total">
            RP {{ totalBelanja }}
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import EachCart from './EachCarts.vue'
export default {
  name: 'Carts',
  components: {
    EachCart
  },
  methods: {
    fetchCarts () {
      this.$emit('fetchCarts')
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalBelanja () {
      let subtotal = 0
      let index = 1
      let totalBelanja = ''
      const carts = this.$store.state.carts
      carts.forEach(el => {
        subtotal += (el.count * el.Product.price)
      })
      // return subtotal
      subtotal = subtotal.toString()
      for (let i = subtotal.length - 1; i >= 0; i--) {
        if (index % 3 === 0 && index !== subtotal.length) {
          index++
          totalBelanja = '.' + subtotal[i] + totalBelanja
        } else {
          index++
          totalBelanja = subtotal[i] + totalBelanja
        }
      }
      return totalBelanja
    }
  },
  created () {
    this.fetchCarts()
  }
}
</script>

<style>

</style>
