<template>
  <div class="col-3 d-flex justify-content-center">
    <div class="card card-product">
      <div class="card-body">
        <img :src="product.image_url" style="max-width: 180px;" alt="">
        <div class="product-name">
          <p>{{product.name}}</p>
        </div>
        <div class="product-stock">
          <p>Stock: {{product.stock}}</p>
        </div>
        <div class="product-price">
          <p>{{displayCurrency}}</p>
        </div>
        <p class="text-center text-success" v-if="isShow">Added to cart</p>
        <button @click="getItemToCart(product.id)" class="btn btn-cart btn-sm"><i class="fas fa-shopping-cart" ></i> Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import bgCard from '@/assets/bg-login.jpg'
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      bgCard,
      isShow: false
    }
  },
  methods: {
    getItemToCart (id) {
      const payload = {
        token: localStorage.getItem('token'),
        id,
        isShow: true
      }
      this.$store.dispatch('getItemToCart', payload)
    }
  },
  computed: {
    displayCurrency () {
      const price = this.product.price
      return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
    }
  }
}
</script>

<style>

</style>
