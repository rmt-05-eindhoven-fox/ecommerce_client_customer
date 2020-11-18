<template>
  <div class="col-md-4">
    <div class="card card-product">
      <div class="card-body p-2">
        <img :src="bgCard" style="max-width: 180px;" alt="">
        <div class="product-name">
          <p>Gibson Les Paul</p>
        </div>
        <div class="product-stock">
          <p>In Stock: 10</p>
        </div>
        <div class="product-price">
          Rp. 30.000.000
        </div>
        <button class="btn btn-cart btn-sm"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import bgCard from '@/assets/bg-login.jpg'
export default {
  name: 'ProductCard',
  data () {
    return {
      bgCard
    }
  }
}
</script>

<style>

</style>
