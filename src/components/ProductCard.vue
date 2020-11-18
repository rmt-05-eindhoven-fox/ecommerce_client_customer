<template>
  <div class="col-3">
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
          <p>{{currencyMoney}}</p>
        </div>
        <button @click="getItemToCart(product.id)" class="btn btn-cart btn-sm"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import bgCard from '@/assets/bg-login.jpg'
import axios from '@/axios/axios.js'
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      bgCard
    }
  },
  methods: {
    getItemToCart (id) {
      const token = localStorage.getItem('token')
      axios({
        url: `/cart/${id}`,
        method: 'post',
        data: {
          ProductId: id
        },
        headers: {
          token
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  computed: {
    currencyMoney () {
      const price = this.product.price
      return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
    }
  }
}
</script>

<style>

</style>
