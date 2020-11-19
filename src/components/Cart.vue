<template>
  <div>
    <b-modal
    :hide-footer="true"
    title="Cart"
    v-model="cartShown"
    @change="close"
    >
      <div v-if="carts.length > 0">
        <div v-for="(product, i) in carts" :key="i" class="text-danger font-weight-bolder text-sm-center border mb-1 rounded border-danger pb-1">{{ product }}</div>
      </div>
      <div v-else>
        <div class="h4 row mx-0">UPS, KERANJANG KAMU KOSONG.</div>
        <div class="d-flex">
          <div class="h6 mr-2">Temukan katalog produk lainnya</div>
          <router-link to="/products" class="h6 font-weight-bolder text-decoration-none " style="color: #036933;">disini.</router-link>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    close () {
      this.$store.commit('CLOSE_CART')
    }
  },
  mounted () {
    this.$store.dispatch('getCart')
  },
  computed: mapState(['carts', 'cartShown'])
}
</script>

<style>

</style>
