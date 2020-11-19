<template>
  <div class="container-fluid mt-5">
    <div class="d-flex flex-wrap justify-content-center">
      <div class="mb-4"  v-for="product in Product" :key="product.id">
        <div class="card mx-3" style="width: 18rem;">
          <div class="w-100" style="position: relative">
           <img
            class="product-img-top"
            :src="product.image_url"
            alt="electronic"
            style="height: 250px"
            font-scale="1"
          />
        </div>
        <div class="card-title mt-3 mb-0" style="border-bottom-width: 1px; border-bottom-style: solid;">
          <h2 class="text-center">{{product.name}}</h2>
        </div>
        <div class="card-body mb-0 pb-0 d-flex justify-content-lg-between">
          <div>
            <p class="text-secondary">
              <b> {{product.stock}} </b>
            </p>
          </div>
          <div>
            <p class="text-secondary">
              <b><strong>&euro; {{ product.price }}</strong> </b>
            </p>
          </div>
        </div>
        <div class="card-footer" style="background-color: hsl(195, 100%, 18%)">
          <div>
            <p role="button" @click.prevent="addtoCart(product.id)" class="text-light m-0 w-100 text-center" style="font-size: 1.5rem; " id="addtoCart">Add to Cart</p>
          </div>
      </div>
    </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  components: {
  },

  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    addtoCart (product) {
      const payload = {
        ProductId: product
      }
      this.$store.dispatch('addToCart', payload)
      this.$router.push('/dashboard/cart')
    }
  },

  computed: {
    Product () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>
