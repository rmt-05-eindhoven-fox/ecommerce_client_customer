<template>
  <!-- Cart Start -->
<div class="cart-page">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-9">
        <div class="cart-page-inner">
          <div class="table-responsive">
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

                <CartList v-for="(cart, i) in carts" :key="i" :cart="cart"/>

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
                  <p>Sub Total<span>Rp. 2299</span></p>
                  <p>Shipping Cost<span>Rp. 0</span></p>
                  <h2>Grand Total<span>Rp. 22100</span></h2>
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
      form: {}
    }
  },
  components: {
    CartList
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.amountValue()
  },
  methods: {
    formatNumber (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    amountValue (id, value) {
      this.form[id] = value
    }
  }
}
</script>

<style>

</style>
