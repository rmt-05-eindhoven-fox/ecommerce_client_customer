<template>
  <div>
    <NavbarMain />
    <div class="container">
      <div class="card">
        <div class="card-body d-flex justify-content-between">
          <h3>Your Cart</h3>
          <h4>Total price: {{getPrice}}</h4>
          <button class="btn btn-success" @click="checkoutCart">Checkout</button>
        </div>
      </div>
      <div class="row d-flex">
        <!-- CARD CART -->
        <CartCard v-for="product in getCart"
        :key="product.id"
        :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarMain from '@/components/NavbarMain.vue'
import CartCard from '@/components/CartCard.vue'
export default {
  name: 'Cart',
  components: {
    NavbarMain,
    CartCard
  },
  computed: {
    itemCart () {
      return this.$store.state.itemCart
    },
    getCart () {
      return this.$store.state.cartUser
    },
    getPrice () {
      let total = 0
      this.getCart.forEach(el => {
        const price = el.Product.price
        const amount = el.amount
        total += (price * amount)
      })
      return total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
    }
  },
  methods: {
    retrieveUserCart () {
      this.$store.dispatch('retrieveUserCart')
    },
    checkoutCart () {
      this.$store.dispatch('checkoutCart')
    }
  },
  created () {
    this.retrieveUserCart()
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top : 100px;
  font-family: 'Roboto Slab', sans-serif;

  .card-header{
   background-color : #FFFFFF ;
  }

  .btn-success {
    border-radius: 8px;
  }
}
</style>
