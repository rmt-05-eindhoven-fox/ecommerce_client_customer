<template>
  <div class="row justify-content-md-center" style="margin-top: 30px;">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="Cart.Product.image_url" class="card-img" alt="...">
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">{{ Cart.Product.name }}</h5>
            <p class="card-text">Price : Rp. {{ price }}</p>
            <label for="" style="margin-right: 10px;">Quantity </label>
            <input type="number" min="1" :max="Cart.Product.stock" v-model="quantity">
          </div>
        </div>
        <div class="col">
          <button class="btn" @click.prevent="deleteCart"> X </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'CartDetail',
  props: ['Cart'],
  data () {
    return {
      quantity: this.Cart.quantity,
      price: ''
    }
  },
  watch: {
    quantity (val) {
      const payload = {
        id: this.Cart.id,
        quantity: val
      }

      this.$store.dispatch('updateCart', payload)
    }
  },
  methods: {
    rupiah () {
      this.price = this.Cart.Product.price.toString().split('').reverse().join('')
      this.price = this.price.match(/\d{1,3}/g)
      this.price = this.price.join('.').split('').reverse().join('') + ',-'
    },

    deleteCart () {
      Swal.fire({
        title: 'Do you want to delete the changes?',
        showDenyButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: 'Dont Delete'
      })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Delete!', '', 'success')
            const payload = {
              id: this.Cart.id
            }

            this.$store.dispatch('deleteCart', payload)
              .then(({ data }) => {
                this.$store.dispatch('fetchCart')
              })
              .catch(err => {
                console.log(err)
              })
          } else if (result.isDenied) {
            Swal.fire('Changes are not delete', '', 'info')
          }
        })
    }
  },
  created () {
    this.rupiah()
  }
}
</script>

<style>

</style>
