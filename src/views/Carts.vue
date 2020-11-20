<template>
  <section id="cart-page">
    <Navbar/>
    <div class="container mt-5">
      <h2 class="text-left">Carts</h2>
      <hr>
      <div class="row">
        <!-- cart table -->
        <div class="col-7">
          <!-- cart item -->
          <div v-if="carts.length > 0" class="cart-item">
            <CartItem
              v-for="cart in carts"
              :key="cart.id"
              :cart="cart"
              @fetchCarts="fetchCarts"
            />
          </div>
          <div v-else class="alert alert-info" role="alert">
            Carts is still empty
          </div>
        </div>
        <!-- checkout table -->
        <div class="col-5 text-left">
          <h2>Checkout</h2>
          <div>
            <table class="table-borderless">
              <tr v-for="cart in carts"
                :key="cart.id"
              >
                <td>{{cart.Product.name}}</td>
                <td>x {{cart.quantity}}</td>
                <td>= {{ formatRupiah(cart.total) }}</td>
              </tr>
            </table>
            <hr>
            <h4 class="text-left">
              Total = {{ formatRupiah(totalPrice) }}
            </h4>
            <!-- <button class="btn btn-primary">
              Checkout
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CartItem from '@/components/CartItem.vue'

export default {
  name: 'Carts',
  components: {
    Navbar, CartItem
  },
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    },
    formatRupiah (money) {
      return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
      ).format(money)
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      let totalPrice = 0
      this.carts.forEach(cart => {
        totalPrice += cart.total
      })
      return totalPrice
    },
    isLoggedIn () {
      return this.$store.state.isLoggedIn.status
    }
  },
  created () {
    if (this.isLoggedIn) {
      this.fetchCarts()
    } else {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
.card {
  height: 200px;
  text-align: left;
}

/* .product-options {
} */
p {
  margin: 0;
}

/* .product-image {
  height: auto;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
} */
</style>
