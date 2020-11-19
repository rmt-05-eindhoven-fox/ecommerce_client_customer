<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto product-card ma-4"
      max-width="230"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover, 'empty-product': !product.stock }"
    >
      <div class="product-img">
        <v-img
          :src="product.image_url"
          max-width="260"
          @click="goToProductDetail"
        ></v-img>
      </div>
      <v-card-text>
        <div class="product-title d-flex">
          <h2>{{product.name}}</h2>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon class="white-heart">mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon class="filled-heart">mdi-heart</v-icon>
          </v-btn>
        </div>
        <p v-if="product.stock">Stock: {{product.stock}}</p>
        <p v-else style="color: red">Out of Stock</p>
        <h3>{{ price }}</h3>
        <v-btn
        block
        color="#FEDBD0"
        class="add-to-cart-btn"
        :disabled="!product.stock || loading"
        @click="addToCart"
        :loading="isLoading"
        >
          <v-icon>mdi-cart-plus</v-icon> Add to cart
        </v-btn>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    price () {
      const num = Number(this.product.price).toLocaleString('id-ID')
      const price = 'Rp. ' + num + ',-'
      return price
    }
  },
  methods: {
    goToProductDetail () {
      const id = this.product.id
      this.$store.dispatch('productDetail', id)
      this.$router.push(`/products/detail/${id}`)
    },
    addToCart () {
      this.isLoading = true
      const accessToken = localStorage.getItem('access_token')
      if (!accessToken) {
        this.isLoading = false
        this.$swal({
          title: 'Login is required',
          text: 'Login is required to do this action',
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'Login',
          reverseButtons: true
        })
          .then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/login')
            }
          })
      } else {
        this.isLoading = true
        const payload = {
          ProductId: this.product.id,
          amount: 1
        }
        this.$store.dispatch('addToCart', payload)
          .then(({ data }) => {
            this.$store.dispatch('fetchCarts')
            this.isLoading = false
            this.$vToastify.success({
              title: 'Success',
              body: 'item successfully added to the cart',
              canTimeout: true,
              duration: 2000,
              theme: 'light'
            })
          })
          .catch(err => {
            this.isLoading = false
            console.log(err)
          })
      }
    }
  }
}
</script>

<style>
.empty-product {
  opacity: 0.5;
}
</style>
