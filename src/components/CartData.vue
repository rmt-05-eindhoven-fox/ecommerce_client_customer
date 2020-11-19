<template>
  <div class="card p-0 m-1">
    <p class="card-header bg-info" style="height: 100px;">{{ cartData.Product.name }}</p>
    <p class="m-0">Price: {{ cartData.Product.price }}</p>
    <p class="m-0">Qty: {{ cartData.qty }}</p>
    <div class="container mb-2">
      <span><button @click="decrement" class="btn btn-secondary btn-sm font-weight-bold mr-1">-</button></span>
      <span><input :value="qty" type="number" min="0" :max="cartData.Product.stock" style="width: 36px;" class="text-center"></span>
      <span><button @click="increment" class="btn btn-secondary btn-sm font-weight-bold ml-1">+</button></span>
    </div>
    <div class="mb-1">
      <button @click="updateQty" class="btn btn-outline-primary btn-sm col-6">Update Qty</button>
    </div>
    <div>
      <button @click="deleteCart" class="btn btn-outline-danger btn-sm col-6">Remove Cart</button>
    </div>
    <div>
      <p>{{ msg }}</p>
    </div>
    <img class="card-img" :src="cartData.Product.image_url" :alt="cartData.Product.name">
  </div>
</template>

<script>
export default {
  name: 'CartData',
  props: ['cartData'],
  data () {
    return {
      qty: this.cartData.qty || 0,
      msg: ''
    }
  },
  methods: {
    increment () {
      if (this.qty < this.cartData.Product.stock) {
        this.qty += 1
      }
    },
    decrement () {
      if (this.qty > 0) {
        this.qty -= 1
      }
    },
    updateQty () {
      this.$store.dispatch('updateQty', { qty: this.qty, id: this.cartData.id })
        .then(({ data }) => {
          console.log(data)
          // state.carts = data
          this.cartData.qty = data.qty
          this.showMsg('Update qty success', 3000)
        })
        .catch(({ response }) => {
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.data)
          console.log(response.data.msg)
        })
    },
    deleteCart () {
      this.$store.dispatch('deleteCart', { id: this.cartData.id })
        .then(({ data }) => {
          console.log(data)
          this.$emit('cartDeleted', 3000)
          this.showMsg(data.msg, 3000)
        })
        .catch(({ response }) => {
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.data)
          console.log(response.data.msg)
        })
    },
    showMsg (msg, ms) {
      this.msg = msg
      setTimeout(() => {
        this.msg = ''
      }, ms)
    }
  }
}
</script>

<style>

</style>
