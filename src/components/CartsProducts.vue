<template>
  <div class="row mb-3">
    <div class="col-md-auto">
      <img :src="cartsProduct.Product.image_url" height="162" alt="" srcset="">
    </div>
    <div class="col-md">
      <div class="card-header">
        <div class="row d-flex justify-content-between">
          <div class="pt-1 ml-3">
            <h5>{{cartsProduct.Product.name}}</h5>
          </div>
          <div>
            <a href="#" @click.prevent="deleteCart(cartsProduct.id)" class="btn btn-warning btn-sm"><i class="fas fa-trash-alt text-danger"></i> REMOVE</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h6 class="card-title"><i class="fas fa-tags"></i> : {{cartsProduct.moneyFormat}} / Items</h6>
        <form @submit.prevent="updateCart()">
          <label for="quantity" class="mr-2">Quantity : </label>
          <input v-model="cartsProduct.quantity" type="number" name="quantity" min="1" :max="cartsProduct.Product.stock">
          <input type="submit" class="ml-2" value="Submit"><span v-if="cartsProduct.quantity >= cartsProduct.Product.stock" class="text-danger font-weight-bold"> *Max limit stock!</span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartsProducts',
  props: ['cartsProduct'],
  methods: {
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
    },
    updateCart () {
      const payload = {
        id: this.cartsProduct.id,
        quantity: this.cartsProduct.quantity
      }
      this.$store.dispatch('updateCart', payload)
    }
  }
}
</script>

<style>

</style>
