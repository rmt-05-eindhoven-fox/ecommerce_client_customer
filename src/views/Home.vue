<template>
  <div class="home">
    <nav class="navbar navbar-light bg-light border-bottom shadow-sm">
      <router-link to="/" class="navbar-brand ml-3 font-weight-bold">JuaLaku</router-link>
      <div>
        <router-link to='/carts' class="mr-4 text-decoration-none text-dark">Your Cart ({{carts.length}})</router-link>
        <button @click.prevent="logout" class="btn btn-danger my-2 my-sm-0">Logout</button>
      </div>
    </nav>
    <!-- FETCH ALL PRODUCTS -->
    <div class="row ml-3 mr-1">
      <div v-for="product in products" :key="product.id" class="col-lg-3 mt-4 p-3">
        <div class="card p-3" style="width: 18rem; height: 450px">
          <img :src="product.image_url" class="card-img-top" style="height: 240px" :alt="product.name" :title="product.name">
          <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">Rp {{product.price}}</p>
            <p class="card-text">In Stock ({{product.stock}} items)</p>
            <a @click.prevent="addToCart(product.id)" class="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  methods: {
    fetchProducts () {
      const token = localStorage.getItem('access_token')
      this.$store.dispatch('fetchProducts', token)
    },
    addToCart (id) {
      const payload = {
        id,
        token: localStorage.getItem('access_token')
      }
      this.$store.dispatch('addToCart', payload)
        .then(response => {
          this.$router.push('/carts')
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
    products () {
      return this.$store.state.products
    },
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.fetchProducts()
    this.$store.dispatch('fetchProductsInCart', localStorage.access_token)
  }
}
</script>
