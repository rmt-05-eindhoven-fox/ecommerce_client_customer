<template>
  <div class="mb-3">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="cart.Product.imgUrl" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="cart.Product.name">
            <b-card-text>
              <button class="btn btn-danger" @click="decreaseCart"><i class="fas fa-minus"></i></button> Qty: {{ cart.count }} <button class="btn btn-success" @click="addCart"><i class="fas fa-plus"></i></button>
            </b-card-text>
            <div>
              Total: RP {{ total }}
            </div>
            <div class="mt-3">
              <button class="btn btn-light text-danger" @click="deleteCart">Remove From Cart</button>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'EachCart',
  props: ['cart'],
  methods: {
    addCart () {
      const payload = {
        ProductId: this.cart.Product.id
      }
      this.$store.dispatch('addCart', payload)
      this.fetchCart()
    },
    fetchCart () {
      this.$store.dispatch('fetchCarts')
    },
    deleteCart () {
      this.$store.dispatch('deleteCart', this.cart.Product.id)
      this.fetchCart()
    },
    decreaseCart () {
      this.$store.dispatch('decreaseCart', this.cart.Product.id)
      this.fetchCart()
    }
  },
  computed: {
    total () {
      let total = this.cart.count * this.cart.Product.price
      let index = 1
      let result = ''
      total = total.toString()
      for (let i = total.length - 1; i >= 0; i--) {
        if (index % 3 === 0 && index !== total.length) {
          result = '.' + total[i] + result
          index++
        } else {
          index++
          result = total[i] + result
        }
      }
      return result
    }
  },
  created () {
    this.fetchCart()
  }
}
</script>

<style>

</style>
