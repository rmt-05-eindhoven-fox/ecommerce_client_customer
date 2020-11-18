<template>
  <div class="wishlist-page">
    <div class="container-fluid">
      <div class="wishlist-page-inner">
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="thead-dark">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Add to Cart</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody class="align-middle">
                  <tr v-for="(whistlist, i) in whislists" :key="i">
                    <td>
                      <div class="img">
                        <a href="#"><img :src="whistlist.Product.image_url" alt="Image"></a>
                        <p>{{ whistlist.Product.name }}</p>
                      </div>
                    </td>
                    <td>Rp {{ formatNumber(whistlist.Product.price) }}</td>
                    <td>
                      <button v-if="isOutOfStock(whistlist.Product.stock)" class="btn-cart" style="background-color: grey;" disabled>Out of Stock</button>
                      <button v-else class="btn-cart" title="Add to cart">Add to Cart</button>
                    </td>
                    <td>
                      <button @click.prevent="deleteWhistlist(whistlist.id)" title="Delete from whistlist">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Whistlist',
  computed: {
    whislists () {
      return this.$store.state.whistlists
    }
  },
  methods: {
    formatNumber (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    deleteWhistlist (id) {
      this.$store.dispatch('deleteWhistlist', id)
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
