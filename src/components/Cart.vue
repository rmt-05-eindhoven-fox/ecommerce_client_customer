<template>
    <div class="container pt=6rem">
      <div class="card shopping-cart">
          <div class="card-header bg-dark text-light">
             <i class="fas fa-shopping-cart"></i>
             Shopping cart
             <div class="clearfix"></div>
      </div>
      <div class="card-body">
          <CartItem
            v-for="itemCart in cart" :key="itemCart.id"
            :product="itemCart">
          </CartItem>
          <h3 class="dispaly-4 text-cente" v-if="cart.length === 0" >
              <h3>Empty cart product</h3>
          </h3>
      </div>
      <div class="card-footer">
          <div class="pull-right" style="margin:10px">
              <div class="pull-right" style="margin:5px">
                  Total Price: <b>${{$store.getters.totalPrice}}</b>
              </div>
          </div>
      </div>
      </div>
    </div>
</template>

<script>

import CartItem from './CartItem'
export default {
  name: 'Cart',
  props: ['product'],
  components: { CartItem },
  computed: {
    cart () {
      return this.$store.state.carts
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
