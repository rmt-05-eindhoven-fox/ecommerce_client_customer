<template>
  <!-- Cart Start -->
<div class="cart-page">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-9">
        <div class="cart-page-inner">
          <div v-if="errorMessage" v-show="error" class="alert alert-danger alert-dismissible fade show" role="alert">
            {{ errorMessage }}
            <button @click.prevent="error = false" type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div v-if="carts.length < 1" class="h2 text-center">
            You dont have any product in cart, happy shopping!
          </div>
          <div v-else class="table-responsive">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Stock</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody class="align-middle">

                <CartList
                v-for="(cart, i) in carts"
                :key="i"
                :cart="cart"
                @errorMessage="setErrorMessage"/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="cart-page-inner">
          <div class="row">
            <div class="col-md-12">
              <div class="cart-summary">
                <div class="cart-content">
                  <h1>Cart Summary</h1>
                  <p>Items<span>{{ itemTotal }} Items</span></p>
                  <p>Sub Total<span>Rp. {{ formatNumber(subTotal) }}</span></p>
                  <p>Shipping Cost<span>Rp. 0</span></p>
                  <h2>Grand Total<span>Rp. {{ formatNumber(subTotal) }}</span></h2>
                </div>
                <div class="cart-btn">
                  <button class="float-right mr-0">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Cart End -->
</template>

<script>
import CartList from '@/components/home/CartList.vue'

export default {
  name: 'Cart',
  data () {
    return {
      errorMessage: '',
      error: false,
      itemTotal: 0
    }
  },
  components: {
    CartList
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    subTotal () {
      return this.sumTotal()
    }
  },
  methods: {
    formatNumber (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    setErrorMessage (message) {
      this.errorMessage = message
      this.error = true
    },
    sumTotal () {
      const carts = this.$store.state.carts
      this.errorMessage = ''
      this.error = false
      let total = 0
      for (let i = 0; i < carts.length; i++) {
        const stock = carts[i].Product.stock
        const price = carts[i].Product.price
        const amount = carts[i].amount
        console.log(stock, price, amount)
        if (stock >= amount) {
          this.itemTotal += 1
          total += (amount * price)
        } else {
          this.setErrorMessage('Some products may not be available, you can delete them')
        }
      }
      return total
    }
  }
}
</script>

<style>

</style>
