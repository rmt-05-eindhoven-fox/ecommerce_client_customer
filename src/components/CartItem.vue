<template>
  <div class="card shadow">
    <div class="card-body">
      <div class="row cart-item">
        <div class="col-5 cart-image">
          <img :src="cart.Product.image_url">
        </div>
        <div class="col-7 cart-detail">
          <div>
            {{ cart.Product.name }}
          </div>
          <div>
            Rp. {{ cart.Product.price }} @each
          </div>
          <div class="d-flex ">
            <button @click.prevent="updateCart(cart.id, 2)" type="button" class="btn btn-secondary cart-options">-</button>
            <p class="btn">  {{ cart.quantity }}  </p>
            <button @click.prevent="updateCart(cart.id, 1)" type="button" class="btn btn-success cart-options">+</button>
            <button @click.prevent="deleteCart(cart.id)" type="button" class="btn btn-danger cart-options">Remove Item</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'CartItem',
  props: ['cart'],
  methods: {
    updateCart (id, order) {
      const payload = {
        id,
        order
      }
      this.$store.dispatch('updateCart', payload)
        .then(({ data }) => {
          let msg = ''
          if (order === 1) {
            msg = 'Quantity increased successfully'
          } else {
            msg = 'Quantity reduced successfully'
          }
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: msg,
            showConfirmButton: false,
            timer: 1500
          })
          this.$emit('fetchCarts')
        })
        .catch(({ response }) => {
          console.log(response.data)
          const err = response.data.msg
          Swal.fire(
            'Update Cart Failed',
            err,
            'error'
          )
        })
    },
    deleteCart (id) {
      const payload = {
        id
      }
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return this.$store.dispatch('deleteCart', payload)
          } else {
            return ''
          }
        })
        .then((response) => {
          if (response) {
            Swal.fire('Deleted!', response.data.msg, 'success')
            this.$emit('fetchCarts')
          }
        })
        .catch(({ response }) => {
          console.log(response.data)
          const err = response.data.msg
          Swal.fire(
            'Delete Cart Failed',
            err,
            'error'
          )
        })
    }
  }
}
</script>

<style>
/* .cart-image {
  height: 80%;
} */

.cart-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>
