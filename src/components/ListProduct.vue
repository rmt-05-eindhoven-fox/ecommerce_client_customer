<template>
  <div class="card col-2 m-5" style="width: 20%;">
    <img :src="product.image_url" class="card-img-top" alt="" height="180px">
    <div class="card-body">
        <h5 class="card-title product-name">{{product.name}}</h5>
        Price
        <p class="card-text">Rp {{product.price.toLocaleString()}}</p>
        <p class="card-text">Stock {{product.stock}}</p>
        <center v-if="!statusLogin"  class="btn btn-warning"><router-link to='/login'>Add to Cart</router-link></center>
        <center v-else ><a href="#" class="btn btn-success" @click.prevent="addToCart({id: product.id, stock: product.stock})">Add To Cart</a></center>
    </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ListProduct',
  props: ['product'],
  computed: {
    statusLogin () {
      return this.$store.state.userLogin
    }
  },
  methods: {
    addToCart ({ id, stock }) {
      this.$store.dispatch('addToCart', { id, stock })
        .then(response => {
          console.log(response)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success add to Cart',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
    .product-name{
        min-height: 50px;
    }
</style>
