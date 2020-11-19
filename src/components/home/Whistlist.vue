<template>
  <div class="wishlist-page">
    <div class="container-fluid">
      <div class="wishlist-page-inner">
        <div class="row">
          <div class="col-md-12">
            <div v-if="whislists.length < 1" class="h2 text-center">
              You dont have any product in whistlist, happy shopping!
            </div>
            <div v-else class="table-responsive">
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
