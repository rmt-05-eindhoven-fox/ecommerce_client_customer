<template>
    <tr>
        <th scope="row">
            <img :src="data.Product.image_url" alt="" width="250px">
            <div style="font-size:25px;">{{data.Product.name}}</div>
        </th>
        <td>Rp. {{data.Product.price.toLocaleString()}}</td>
        <td>
            <i class="far fa-minus-square mr-2" @click="decrementQuantity(data.ProductId)"></i>
            {{data.quantity}}
            <i class="far fa-plus-square ml-2" @click="incrementQuantity(data.ProductId)"></i>
        </td>
        <td>
            <button class="btn btn-danger ml-1" @click="Delete(data.ProductId)"> delete </button>
            </td>
    </tr>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['data'],
  methods: {
    incrementQuantity (id) {
      this.$store.dispatch('UPDATE_QUANTITY_CART', { id, quantity: 1 })
    },
    decrementQuantity (id) {
      this.$store.dispatch('UPDATE_QUANTITY_CART', { id, quantity: -1 })
    },
    Delete (id) {
      console.log(this.data, 'dari cartcard.vue delete')
      this.$store.dispatch('DELETE_CART', id)
    }
  }
}
</script>

<style>

</style>
