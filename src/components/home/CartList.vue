<template>
  <tr>
    <td>
      <div class="img">
        <a href="#"><img :src="cart.Product.image_url" alt="Image"></a>
        <p>{{ cart.Product.name }}</p>
      </div>
    </td>
    <td>Rp. {{ formatNumber(cart.Product.price) }}</td>
    <td>
      <div class="qty">

        <div v-if="outOfStock" class="d-flex justify-content-center">
          <div>
            <h6><strong><span class="badge badge-secondary p-2">Out of stock</span></strong></h6>
          </div>
        </div>
        <div v-else class="d-flex justify-content-center">
          <button v-if="!loading" class="btn-minus" @click.prevent="reduceAmount(cart.id, 'reduce')"><i class="fa fa-minus"></i></button>
          <button v-else class="btn-plus" disabled>
          <i class="fas fa-spinner fa-spin"></i>
          </button>
          <input v-model="currentamount" type="number"
          @keydown="cartId = cart.id"
          @blur="cartId = null">
          <button v-if="!loading" class="btn-plus" @click.prevent="changeAmount(cart.id, 'add')" :disabled="buttonDisable">
            <i class="fa fa-plus"></i>
          </button>
          <button v-else class="btn-plus" disabled>
          <i class="fas fa-spinner fa-spin"></i>
          </button>
        </div>
      </div>
    </td>
    <td>{{ leftStock() }} items left</td>
    <td>Rp. {{ totalPrice }}</td>
    <td><button @click.prevent="reduceAmount(cart.id, 'delete')"><i class="fa fa-trash"></i></button></td>
  </tr>
</template>

<script>
export default {
  name: 'CartList',
  props: ['cart'],
  data () {
    return {
      outOfStock: false,
      myTimeOut: null,
      clicked: false,
      currentamount: this.cart.amount,
      cartId: false,
      loading: false
    }
  },
  computed: {
    totalPrice () {
      const totPrice = this.cart.amount * this.cart.Product.price
      return this.formatNumber(totPrice)
    },
    buttonDisable () {
      return (this.cart.Product.stock <= this.cart.amount)
    }
  },
  watch: {
    currentamount (newVal, oldVal) {
      if (this.cartId) {
        clearTimeout(this.myTimeOut)
        this.myTimeOut = setTimeout(() => {
          // this.changeAmount(this.cartId, 'magicChange')
          this.reduceAmount(this.cartId, 'magicChange')
          this.cartId = null
        }, 1000)
        console.log('Magic', this.cartId)
      } else {
        console.log('Magic', this.cartId)
      }
    }
  },
  methods: {
    formatNumber (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    leftStock () {
      const currentStock = this.cart.Product.stock - this.cart.amount
      this.outOfStock = (currentStock < 0) || false
      return (currentStock < 0) ? 0 : currentStock
    },
    reduceAmount (id, patch) {
      let nowAmount = (patch === 'magicChange') ? this.currentamount : this.cart.amount - 1
      nowAmount = (patch === 'delete') ? 0 : nowAmount
      console.log(nowAmount)
      if (nowAmount < 1) {
        this.$swal.fire({
          title: 'Remove from cart?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteFromCart', id)
              .then((result) => {
                if (result.status === 200) {
                  this.$swal.fire(
                    'Deleted!',
                    'Product has been deleted from cart.',
                    'success'
                  )
                } else {
                  this.$swal.fire(
                    'Deleted!',
                    'Failed to delete product from cart.',
                    'error'
                  )
                }
              }).catch((err) => {
                console.log(err)
              })
          } else {
            this.currentamount = this.cart.amount
          }
        })
      } else {
        this.changeAmount(id, patch)
      }
    },
    changeAmount (id, patch = 'add') {
      this.loading = true
      let amount = (patch === 'add') ? this.cart.amount + 1 : this.cart.amount - 1
      if (patch === 'magicChange') {
        amount = this.currentamount
      }
      const data = {
        id,
        payload: {
          ProductId: +this.cart.Product.id,
          amount
        }
      }
      this.$store.dispatch('changeAmount', data)
        .then((result) => {
          if (result.status !== 200) {
            this.currentamount = this.cart.amount
          } else {
            this.currentamount = result.cart.amount
          }
        }).catch((err) => {
          console.error(err)
        }).then(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
