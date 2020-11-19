<template>
    <tr>
        <th scope="row">
            <img :src="data.Product.image_url" alt="" width="250px">
            <div style="font-size:25px;">{{data.Product.name}}</div>
        </th>
        <td>Rp. {{data.Product.price.toLocaleString()}}</td>
        <td>
            <button v-if="this.data.quantity > 1" class="far fa-minus-square mr-2" @click="decrementQuantity(data.id)"></button>
            <button v-else class="far fa-minus-square mr-2" @click="decrementQuantity(data.id)" disabled></button>
            {{data.quantity}}
            <button class="far fa-plus-square ml-2" @click="incrementQuantity(data.id)"></button>
        </td>
        <td>
            <button class="btn btn-danger ml-1" @click="Delete(data.id)"> delete </button>
            </td>
    </tr>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['data'],
  methods: {
    incrementQuantity (id) {
      console.log(id)
      this.$store.dispatch('UPDATE_QUANTITY_CART', { id, quantity: this.data.quantity + 1 })
    },
    decrementQuantity (id) {
      console.log(id)
      this.$store.dispatch('UPDATE_QUANTITY_CART', { id, quantity: this.data.quantity - 1 })
    },
    Delete (id) {
      console.log(id, 'dari cartcard.vue delete')
      this.$store.dispatch('DELETE_CART', id)
    }
  }
}
</script>

<style>

</style>
