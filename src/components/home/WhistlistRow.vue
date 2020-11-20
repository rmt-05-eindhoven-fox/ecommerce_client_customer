<template>
  <tr>
    <td>
      <div class="img">
        <a href="#"><img :src="whistlist.Product.image_url" alt="Image"></a>
        <p>{{ whistlist.Product.name }}</p>
      </div>
    </td>
    <td>Rp {{ formatNumber(whistlist.Product.price) }}</td>
    <td>
      <button v-if="isOutOfStock(whistlist.Product.stock)" class="btn-cart" style="background-color: grey;" disabled>Out of Stock</button>
      <button v-else-if="loading" class="btn-cart" title="Add to cart" disabled>
      <i class="fas fa-spinner fa-spin"></i>
        Add to Cart
      </button>
      <button v-else class="btn-cart" title="Add to cart" @click="addToCart(whistlist.Product.id)">Add to Cart</button>
    </td>
    <td>
      <button v-if="loading" class="btn-plus" disabled>
      <i class="fas fa-spinner fa-spin"></i>
      </button>
      <button v-if="!loading" @click.prevent="deleteWhistlist(whistlist.id)" title="Delete from whistlist">
        <i class="fa fa-trash"></i>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'WhislistRow',
  data () {
    return {
      loading: false
    }
  },
  props: ['whistlist'],
  methods: {
    formatNumber (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    deleteWhistlist (id) {
      this.$swal.fire({
        title: 'Remove from cart?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true
          this.$store.dispatch('deleteWhistlist', id)
            .then((result) => {
              if (result.status === 200) {
                this.$swal.fire(
                  'Deleted!',
                  'Product has been deleted from whistlist.',
                  'success'
                )
              } else {
                this.$swal.fire(
                  'Deleted!',
                  'Failed to delete product from whistlist.',
                  'error'
                )
              }
            }).catch((err) => {
              console.log(err)
            }).then(() => {
              this.loading = false
            })
        }
      })
    },
    addToCart (productId) {
      this.loading = true
      this.$store.dispatch('addToCart', productId)
        .then((result) => {
        }).catch((err) => {
          console.error(err)
        }).then(() => {
          this.loading = false
        })
    },
    isOutOfStock (stock) {
      if (stock < 1) {
        return true
      }
      return false
    }
  }
}
</script>

<style>

</style>
