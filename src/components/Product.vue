<template>
  <div class="card" style="width: 10rem;">
    <img :src="product.image_url" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Rp. {{ price }}</p>
      <p class="card-text">stock : {{ product.stock }}</p>
      <a class="btn btn-primary" @click.prevent="addCart()">Add Cart</a>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Product',
  props: ['product'],
  data () {
    return {
      price: ''
    }
  },
  methods: {
    addCart () {
      const ProductId = this.product.id
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      this.$store.dispatch('addCart', ProductId)
        .then(({ data }) => {
          Toast.fire({
            icon: 'success',
            title: 'Add Cart in successfully'
          })
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: 'Your Have Login'
          })

          this.$router.push({ name: 'Login' })
          console.log(err)
        })
    },
    rupiah () {
      this.price = this.product.price.toString().split('').reverse().join('')
      this.price = this.price.match(/\d{1,3}/g)
      this.price = this.price.join('.').split('').reverse().join('') + ',-'
    }
  },
  created () {
    this.rupiah()
  }
}
</script>

<style>

</style>
