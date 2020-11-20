<template>
<div class="my-5 mx-5">
    <mdb-row>
      <mdb-col col="10">
        <mdb-row
        v-for="i in prodRows"
        :key="i"
        class="mt-5 mr-5">
          <mdb-card-group class="row" deck>
            <mdb-card
            class="col-4"
            v-for="prod in perCol(i)"
            :key="prod.id"
            >
              <mdb-view class="mt-3 h-50 align-items-center justify-content-center d-flex zoom" hover>
                <a href="#!">
                  <mdb-card-image :src="prod.image_url" :alt="prod.name"></mdb-card-image>
                  <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                </a>
              </mdb-view>
              <mdb-card-body class="d-flex flex-column">
                <mdb-card-title class="text-left">{{ prod.name }}</mdb-card-title>
                <mdb-card-text
                class="text-left">
                  Rp. {{ prod.price }}
                </mdb-card-text>
                <mdb-card-text
                v-if="prod.stock === 0"
                class="text-left text-danger">No stock available</mdb-card-text>
                <mdb-card-text
                v-else-if="prod.stock < 10"
                class="text-left text-danger">{{ prod.stock }} stock left!</mdb-card-text>
                <mdb-card-text
                v-else
                class="text-left">Available stock : {{ prod.stock }}</mdb-card-text>
                <mdb-btn
                class="mt-auto mx-5"
                v-if="prod.stock > 0"
                @click="checkLogin(prod.id)"
                size="md"
                color="mdb-color"> <mdb-icon icon="cart-plus"/> Add To Cart</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-card-group>
        </mdb-row>
      </mdb-col>
      <mdb-col col="2">
        <mdb-row
        v-for="banner in potraitBanners"
        :key="banner.id">
          <img :src="banner.image_url" class="img-fluid z-depth-1 mt-5" :alt="banner.title">
        </mdb-row>
      </mdb-col>
    </mdb-row>

</div>

</template>

<script>
export default {
  name: 'Category',
  props: ['toggleModal'],
  computed: {
    productsPerCat () {
      return this.$store.getters.getProductsByCategoryId(this.$route.params.id)
    },
    potraitBanners () {
      return this.$store.state.potraitBanners
    },
    prodRows () {
      return Math.ceil(this.productsPerCat.length / 3)
    }
  },
  methods: {
    perCol (i) {
      const start = i * 3 - 3
      return this.productsPerCat.slice(start, start + 3)
    },
    checkLogin (id) {
      if (!localStorage.access_token) {
        this.toggleModal()
      } else {
        const check = this.$store.getters.checkCart(id)
        const payload = { ProductId: id }
        if (check) {
          const amount = this.$store.getters.amountProd(id) + 1
          payload.amount = amount
          this.$store.dispatch('patchCart', payload)
            .then(({ data }) => {
              this.$vToastify.success('You\'ve added product to cart!')
              this.$store.dispatch('fetchCart')
            })
            .catch(({ response }) => {
              this.$vToastify.error('You\'ve reached the limit of available stock!')
            })
        } else {
          this.$store.dispatch('addToCart', payload)
            .then(({ data }) => {
              this.$vToastify.success('You\'ve added product to cart!')
              this.$store.dispatch('fetchCart')
            })
            .catch(({ response }) => {
              this.$vToastify.error(response.data.error)
            })
        }
      }
    }
  },
  beforeCreate () {
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchAllBanners')
      .then(({ data }) => {
        data = data.filter(el => el.status)
        this.$store.commit('setBanners', data)
        this.$store.dispatch('checkBannersOri')
      })
      .catch(err => console.log(err))
    this.$store.dispatch('fetchAllProducts')
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>

</style>
