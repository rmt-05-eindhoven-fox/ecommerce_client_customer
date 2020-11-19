<template>
  <div>
    <nav class="navbar navbar-light bg-light border-bottom shadow-sm">
      <router-link to="/" class="navbar-brand ml-3 font-weight-bold">JuaLaku</router-link>
      <div>
        <router-link to='/carts' class="mr-4 text-decoration-none text-dark">Your Cart ({{carts.length}})</router-link>
        <button @click.prevent="logout" class="btn btn-danger my-2 my-sm-0">Logout</button>
      </div>
    </nav>
    <div class="row justify-content-center mr-auto mt-4">
      <div class="col-12 mb-3">
        <h2>Your Cart</h2>
      </div>
      <!-- List of Carts -->
      <div class="col-sm-7">
        <div v-for="cart in carts" :key="cart.id" :carts="carts" class="card ml-auto mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-5 p-3">
              <img :src="cart.Product.image_url" class="card-img" :alt="cart.Product.name" :title="cart.Product.name">
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">{{cart.Product.name}}</h5>
                <p class="card-text">Rp {{cart.quantity * cart.Product.price}}</p>
                <div class="form-group row justify-content-center">
                  <button @click.prevent="updateQuantity(cart.id, 'minus', cart.quantity)" class="form-control btn btn-light mr-2" style="width:35px">-</button>
                  <p class="form-control border-0 text-center mr-2" style="width:45px">{{ cart.quantity }}</p>
                  <button @click.prevent="updateQuantity(cart.id, 'plus', cart.quantity)" class="form-control btn btn-light mr-2" style="width:35px">+</button>
                </div>
                <button @click.prevent="removeCart(cart.id)" class="form-control btn btn-outline-danger" style="width:139px" type="submit">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Total Price -->
      <div class="col-sm-5">
        <div class="card mb-3 mr-auto p-3" style="max-width: 320px;">
          <div class="">
            <h5>Total</h5>
            <p class="font-weight-bold">Rp {{ totalPrice }}</p>
            <button class="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carts',
  methods: {
    fetchProductsInCart () {
      const token = localStorage.getItem('access_token')
      this.$store.dispatch('fetchProductsInCart', token)
    },
    updateQuantity (id, status, quantity) {
      if (status === 'minus') {
        quantity--
      } else {
        quantity++
      }
      const payload = {
        token: localStorage.getItem('access_token'),
        quantity,
        id
      }
      this.$store.dispatch('updateQuantity', payload)
        .then(response => {
          console.log(response)
          this.fetchProductsInCart()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    removeCart (id) {
      const payload = {
        id,
        token: localStorage.getItem('access_token')
      }
      this.$store.dispatch('removeCart', payload)
        .then(({ data }) => {
          console.log(data)
          this.fetchProductsInCart()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  computed: {
    totalPrice () {
      let totalPrice = 0
      this.carts.forEach(cart => {
        totalPrice += cart.quantity * cart.Product.price
      })
      return totalPrice
    },
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.fetchProductsInCart()
  }
}
</script>

<style>

</style>
