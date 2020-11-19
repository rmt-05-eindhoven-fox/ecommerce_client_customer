<template>
  <div class="container">
    <div class="row" v-if="carts.length === 0">
      <div class="col-8 offset-md-2">
        <h1>Masih Kosong Bro</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-5 offset-md-2">
        <div class="card" v-for="cart in carts" :key="cart.id">
          <div class="card-body">
            <i @click.prevent="deleteCart(cart.id)" role="button" class="fas fa-times"></i>
            <div class="row">
              <div class="col-4">
                <img :src="cart.Product.image_url" alt="" style="width: 120%">
              </div>
              <div class="col-8">
                <div class="card-title pb-4" style="text-align: left;">
                  <h4>{{cart.Product.name}}</h4>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <div>
                    <span>{{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(cart.Product.price)}}</span>
                    <span>x{{cart.quantity}}</span>
                  </div>
                  <div>
                    <i @click.prevent="updateCart(cart.quantity + 1, cart.id)" role="button" class="fas fa-plus-circle mx-1" style="color: rgb(20, 154, 208);"></i>
                    <i @click.prevent="updateCart(cart.quantity - 1, cart.id)" role="button" class="fas fa-minus-circle mx-1" style="color: rgb(208, 46, 20);"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 text-left" v-if="carts.length > 0">
        <div>
          <h1>Checkout</h1>
        </div>
        <div>
          <h3>Total: {{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(totalPrice)}}</h3>
        </div>
        <div class="text-right">
          <button @click.prevent="checkout(carts)" class="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    },
    updateCart (quantity, id) {
      const payload = {
        quantity, id
      }
      this.$store.dispatch('updateCart', payload)
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
    },
    checkout (payload) {
      this.$store.dispatch('checkout', payload)
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  },
  created () {
    this.fetchCarts()
  }
}
</script>

<style>
.container {
  margin-top: 15vh;
}
.fa-times {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
