<template>
  <div class="">
    <!-- First -->
    <div class="navbar p-1" style="background-color: rgb(251, 240, 0);">
      <p class="font-weight-bolder mb-0 w-100">Melayani dengan hati, mendengarkan sepenuh jiwa</p>
    </div>
    <!-- Second -->
    <div class="navbar navbar-expand-md row mx-0 py-3" style="background-color: #036933;">
      <div class="col-6">
        <img src="https://cdn.shopify.com/s/files/1/0016/5111/4048/files/logo_store_persebaya_font_360x.png?v=1545135961" alt="">
      </div>
      <div class="col-6">
        <div class="">

          <div class="row justify-content-end">
            <div class="col-4">

            </div>
            <div class="col-6 d-flex justify-content-end">
              <div v-if="!logged">
                <b-icon icon="box-arrow-in-right" variant="light"></b-icon>
                <router-link to="/account/login" class="text-light font-weight-bolder ml-2">Log in</router-link>
              </div>
              <div v-else>
                <b-icon icon="box-arrow-left" variant="light"></b-icon>
                <a href="" @click.prevent="logout" class="text-light font-weight-bolder ml-2">Log out</a>
              </div>
              <span v-if="logged" class="text-light mx-2">|</span>
              <a v-if="logged" href="" @click.prevent="cart">
                <b-icon icon="cart3" variant="light"></b-icon>
                <span class="font-weight-bolder text-light mx-2">Cart</span>
              </a>
            </div>
          </div>

        </div>

          <div class="d-flex justify-content-end mt-3">
            <form class="bg-white btn p-1">
              <input type="search" placeholder="Apa yang kamu cari ?" aria-label="Apa yang kamu cari ?" style="border: none">
              <button type="submit" class="" style="border: none; background: none;">
                <b-icon icon="search"></b-icon>
              </button>
            </form>
          </div>
      </div>
    </div>
    <!-- Third -->
    <div class="navbar p-1" style="background-color: #213e3b;">
    </div>
    <!-- <div class="navbar p-1" style="background-color: rgb(251, 240, 0);">
    </div> -->

    <div class="navbar d-flex justify-content-center pt-1 pb-2">
      <p class="h6 font-weight-bold mx-4">NEW!</p>
      <div @mouseover="drop = true" @mouseleave="drop = false">
        <div class="d-flex">
          <b-icon icon="chevron-double-down" class="mt-0"/>
          <p class="h6 font-weight-bold" >Category</p>
        </div>
        <b-list-group v-if="drop" class="position-absolute" style="z-index: 100">
          <a href="" v-for="(category, i) in categories" :key="i" class="text-decoration-none text-dark font-weight-bold">
            <b-list-group-item>{{ category }}</b-list-group-item>
            </a>
        </b-list-group>
      </div>
      <p class="h6 font-weight-bold mx-4">Best Seller!</p>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    cart () {
      this.$store.commit('SHOW_CART')
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/account/login')
    }
  },
  mounted () {
    this.$store.dispatch('products')
  },
  computed: {
    ...mapGetters(['categories', 'logged'])
  },
  data () {
    return {
      drop: false
    }
  }
}
</script>

<style>

</style>
