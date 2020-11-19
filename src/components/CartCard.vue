<template>
    <tr>
        <th scope="row">
            <img :src="data.Product.image_url" alt="" width="250px">
            <div style="font-size:25px;">{{data.Product.name}}</div>
        </th>
        <td>Rp. {{(data.Product.price*data.quantity).toLocaleString()}}</td>
        <td>
            <button v-if="this.data.quantity > 1" class="far fa-minus-square mr-2" @click="decrementQuantity(data.id)"></button>
            <button v-else class="far fa-minus-square mr-2" @click="decrementQuantity(data.id)" disabled></button>
            {{data.quantity}}
            <button class="far fa-plus-square ml-2" @click="incrementQuantity(data.id)"></button>
        </td>
        <td>
            <button class="btn btn-danger ml-1" @click="deleteProduct(data.id)"> Remove from cart </button>
            </td>
    </tr>
</template>

<script>
import Swal from 'sweetalert2'

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
    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Delete this cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          return this.$store.dispatch('deleteProduct', id)
        }
      })
        .then(({ data }) => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.$store.dispatch('GET_LIST_CART')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
