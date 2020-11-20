<template>
  <div class="col-3">
    <div class="card product-item">
        <div class="product-image">
          <img :src="wishlist.Product.image_url">
        </div>
        <h5 class="card-title mt-2">{{ wishlist.Product.name }}</h5>
        <div class="d-flex flex-column px-3 mb-3">
          <i class="fas fa-tag mb-2"> {{ formatRupiah(wishlist.Product.price) }}</i>
          <i class="fas fa-box-open"> in stock ({{ wishlist.Product.stock }})</i>
        </div>
        <a @click.prevent="deleteWishlist(wishlist.id)" href="#" class="btn btn-danger">Remove from wishlist</a>
        <a @click.prevent="addCart(wishlist.Product.id)" href="#" class="btn btn-primary">Add to chart</a>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'WishlistItem',
  props: ['wishlist'],
  methods: {
    addCart (ProductId) {
      this.$store.dispatch('addCart', ProductId)
    },
    formatRupiah (money) {
      return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
      ).format(money)
    },
    deleteWishlist (id) {
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
            return this.$store.dispatch('deleteWishlist', payload)
          } else {
            return ''
          }
        })
        .then((response) => {
          if (response) {
            Swal.fire('Deleted!', response.data.msg, 'success')
            this.$emit('fetchWishlists')
          }
        })
        .catch(({ response }) => {
          console.log(response.data)
          const err = response.data.msg
          Swal.fire(
            'Delete Wishlist Failed',
            err,
            'error'
          )
        })
    }
  }
}
</script>

<style>

</style>
