<template>
  <div>
    <Nvbar/>
    <div>
        <div class="border m-5 p-4" style="background-color:#cfd3ce;">
            <h2>Happy Shopping!</h2>
            <div class="product-page row d-flex justify-content-center flex-wrap">
                <div
                    v-for="(product, i) in products"
                    :key="i" class="product-card card col-3">
                    <img class="product-img card-img-top" :src="product.img_url" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">Price: {{ product.price }}</p>
                        <p class="card-text"><small class="text-muted">Stock {{ product.stock }}</small></p>
                    </div>
                    <button @click="putToCart(product.id)" class="btn btn-secondary mb-2">add to cart</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Nvbar from '../components/Nvbar.vue'
export default {
  name: 'Navbar',
  components: {
    Nvbar
  },
  methods: {
    putToCart (id) {
      this.$store.dispatch('putToCart', id)
        .then(result => {
          this.$store.dispatch('fetchProduct')
          this.$swal('The product has been added to cart')
        })
        .catch(err => {
          this.$swal(err.response.data)
        })
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style scoped>
  .product-page {
    margin: 40px;
    padding: 20px;
  }
  .product-card {
    align-items: center;
  }
  .product-img {
    width: 200px;
    height: 250px;
  }
</style>
