<template>
  <div class="col-sm-6 col-md-5 col-lg-4 item mt-4">
    <div class="card">
      <div class="card-img-top row justify-content-center mt-3">
        <img :src="products.image_url" alt="">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{products.name}}</h5>
        <div class="row justify-content-around">
          <button :disabled="products.stock === 0" @click.prevent="addCart(products.id)" class="btn btn-outline-primary"><i class="fas fa-cart-plus"></i> Add to cart</button>
          <button :disabled="products.stock === 0" @click.prevent="buy(products.id)" class="btn btn-primary">Buy now</button>
        </div>
      </div>
      <div class="card-footer text-muted">
        <div class="row justify-content-around">
          <p>Rp. {{products.price}}</p>
          <p v-if="products.stock !== 1" >remaining {{products.stock}} pieces</p>
          <p v-else-if="products.stock === 1">left 1 piece</p>
          <p v-else>out of stock</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentProduct',
  props: ['products', 'amount'],
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    addCart (id) {
      if (!localStorage.getItem('token')) {
        this.$router.push('/signin')
      } else {
        const payload = {
          ProductId: id,
          amount: 1
        }
        const filter = this.carts.filter(datum => datum.ProductId === id)
        if (!filter[0]) {
          setTimeout(() => {
            this.fetchCart()
          }, 500)
          this.$store.dispatch('addCart', payload)
        } else {
          const amount = ++filter[0].amount
          const payload = {
            ProductId: id,
            amount: amount
          }
          this.$store.dispatch('updateAmount', payload)
        }
      }
    },
    buy (id) {
      if (!localStorage.getItem('token')) {
        this.$router.push('/signin')
      } else {
        const payload = {
          ProductId: id,
          amount: 1
        }
        const filter = this.carts.filter(datum => datum.ProductId === id)
        if (!filter[0]) {
          setTimeout(() => {
            this.$router.push('/cart')
          }, 500)
          this.$store.dispatch('addCart', payload)
        } else {
          this.$router.push('/cart')
        }
      }
    }
  },
  created () {
    this.fetchCart()
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
}
.card-img-top {
  height: 150px;
}
button {
  width: 150px;
}
img {
  max-width: 70%;
  max-height: 100%;
  display: block;
}
.row {
  max-height: 100px;
}
.card:hover{
  border-color: blue;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
}
</style>
