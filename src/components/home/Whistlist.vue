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
                  <WhistlistRow  v-for="(whistlist, i) in whislists" :key="i" :whistlist="whistlist" />
                  <!-- <tr v-for="(whistlist, i) in whislists" :key="i">
                    <td>
                      <div class="img">
                        <a href="#"><img :src="whistlist.Product.image_url" alt="Image"></a>
                        <p>{{ whistlist.Product.name }}</p>
                      </div>
                    </td>
                    <td>Rp {{ formatNumber(whistlist.Product.price) }}</td>
                    <td>
                      <button v-if="isOutOfStock(whistlist.Product.stock)" class="btn-cart" style="background-color: grey;" disabled>Out of Stock</button>
                      <button v-else class="btn-cart" title="Add to cart" @click="addToCart(whistlist.Product.id)">Add to Cart</button>
                    </td>
                    <td>
                      <button v-if="loading == whistlist.id" class="btn-plus" disabled>
                      <i class="fas fa-spinner fa-spin"></i>
                      </button>
                      <button v-if="loading == false" @click.prevent="deleteWhistlist(whistlist.id)" title="Delete from whistlist">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr> -->
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
import WhistlistRow from '@/components/home/WhistlistRow.vue'

export default {
  name: 'Whistlist',
  computed: {
    whislists () {
      return this.$store.state.whistlists
    }
  },
  components: {
    WhistlistRow
  }
}
</script>

<style>

</style>
