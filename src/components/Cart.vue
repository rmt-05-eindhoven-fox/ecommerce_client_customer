<template>
  <div>
    <b-modal
    :hide-footer="true"
    title="Cart"
    v-model="cartShown"
    @change="close"
    scrollable
    >
      <div v-if="carts.length > 0">
        <!-- <div v-for="(product, i) in carts" :key="i" class="text-danger font-weight-bolder text-sm-center border mb-1 rounded border-danger pb-1">{{ product }}</div> -->
        <div v-for="cart in carts" :key="cart.id" class="card mb-2 rounded" style="width: 100%; height: 7em;">
          <div class="row no-gutters" style="height: 100%;">
            <div class="col-md-4 d-flex justify-content-center align-items-center" style="height: 100%;">
              <img
                style="
                max-height:100%;
                max-width: 100%;
                height:auto;
                width:auto;"
                :src="cart.Product.image_url" class="card-img" alt="...">
            </div>
            <div class="col-md-7">
              <div class="card-body p-2">
                <div class="row justify-content-around w-100 ml-0">
                  <p class="col-6 card-title font-weight-bold" style="font-size: small;">{{ cart.Product.name }}</p>
                  <p class="col-6 card-text" style="font-size: small;">{{ cart.Product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR"})}}</p>
                </div>
                <div class="row justify-content-around">
                  <p class="col-6 card-text text-muted" style="font-size: small;">{{ cart.Product.stock }} remaining</p>
                </div>
                <div class="row justify-content-center">
                </div>
              </div>
              <div class="row justify-content-around">
                <input type="number" v-model="cart.amount" :max="cart.Product.stock" class="form-control form-control-sm col-2" @change="editAmount(cart)">
                <p class="col-9 card-text">total: {{ (cart.amount * cart.Product.price).toLocaleString("id-ID", { style: "currency", currency: "IDR"}) }}</p>
              </div>
            </div>
            <div class="col-1 d-flex justify-content-center align-items-center">
              <a href="" @click.prevent="delCart(cart.Product.id)" class="">
                <b-icon icon="cart-x-fill" variant="danger" class=""/>
              </a>
            </div>
          </div>
        </div>
        <div class="row no-gutters justify-content-end">
          <button class="btn btn-success" @click="checkout">Checkout</button>
        </div>
      </div>
      <div v-else>
        <div class="h4 row mx-0">UPS, KERANJANG KAMU KOSONG.</div>
        <div class="d-flex">
          <div class="h6 mr-2">Temukan katalog produk lainnya</div>
          <router-link to="/" class="h6 font-weight-bolder text-decoration-none" style="color: #036933;">disini.</router-link>
        </div>
      </div>

    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$store.commit('CLOSE_CART')
    },
    editAmount (cart) {
      this.$store.dispatch('editAmount', cart)
    },
    delCart (id) {
      this.$store.dispatch('deleteCart', id)
      this.$store.dispatch('getCart')
    },
    checkout () {
      this.$store.dispatch('checkout')
      this.$store.dispatch('products')
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
