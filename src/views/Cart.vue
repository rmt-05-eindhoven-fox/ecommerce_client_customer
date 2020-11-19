<template>
  <div>
    <Nvbar/>
    <div class="container">
        <div class="border m-5 p-4" style="background-color:#cfd3ce;">
            <h2>Checkout your products now!</h2>
            <div
            v-for="(cart, i) in carts"
            :key="i"
            class="cart-page">
                <div class="d-flex flex-column">
                    <div class="row">
                        <div class="col-1">
                          <button @click="deleteCart(cart.ProductId)" class="btn">x</button>
                        </div>
                        <div class="col-8">
                            <p class="wel">{{ cart.Product.name }}</p>
                            <p class="wel">{{ cart.Product.price }}</p>
                            <div class="d-flex justify-content-center justify-items-center">
                                <button @click="minusCart(cart.ProductId)" class="minus-btn btn-secondary" type="button" name="button">
                                    <strong>-</strong>
                                </button>
                                <p> qty: {{ cart.quantity }}</p>
                                <button @click="putToCart(cart.ProductId)" class="plus-btn btn-secondary" type="button" name="button">
                                   <strong>+</strong>
                                </button>
                            </div>
                        </div>
                        <div class="col-3">
                            <img class="img-cart" :src="cart.Product.img_url">
                        </div>
                    </div>
                </div>
            </div>
            <div class="total-price mb-2">
                <h2>Total Price: {{ totalPrice }} </h2>
            </div>
            <div class="mb-5">
              <button @click="checkout" class="btn btn-secondary">Checkout</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Nvbar from '../components/Nvbar.vue'
export default {
  name: 'Cart',
  components: {
    Nvbar
  },
  methods: {
    putToCart (id) {
      this.$store.dispatch('putToCart', id)
        .then(result => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          this.$swal(err.response.data)
        })
    },

    minusCart (id) {
      this.$store.dispatch('minusCart', id)
        .then(result => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          this.$swal(err.response.data)
        })
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
        .then(result => {
          this.$store.dispatch('fetchCart')
          this.$swal('The Cart is successfully deleted!')
        })
        .catch(err => {
          this.$swal(err.response.data)
        })
    },
    checkout () {
      this.$store.dispatch('checkout')
        .then(result => {
          this.$store.dispatch('fetchCart')
          this.$swal('Great! enjoy the products!')
        })
        .catch(err => {
          this.$swal(err.response.data)
        })
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      return this.$store.state.totalPrice
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style scoped>
  .cart-page {
    margin: 0px 300px;
    margin-top: 40px
  }
  .img-cart {
    width: 100px;
    height: 125px;
  }
  .wel {
    font-size: 20px;
  }
  .plus-btn {
    width: 25px;
    height: 25px;
  }
  .minus-btn {
    width: 25px;
    height: 25px;
  }
  .total-price {
    margin: 20px;
  }
</style>
