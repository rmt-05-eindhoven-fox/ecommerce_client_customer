<template>
  <div>
    <h1>Your Cart</h1>
    <div class="container d-flex justify-content-between">
      <div class="container">
        <b-card-group deck>
          <b-card header="List of Products">
            <EachCart v-for="(cart, i) in carts" :key="cart.id" :no="i"/>
          </b-card>
        </b-card-group>
      </div>
      <div class="container">
        <b-card-group deck>
          <b-card header="Total">
            RP 6.000.0000
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
  computed: {
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>

<style>

</style>
