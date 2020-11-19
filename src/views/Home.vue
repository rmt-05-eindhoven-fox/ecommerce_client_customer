<template>
  <div>
    <div class="d-flex flex-column mb-3">
      <div id="div-navbar" class="container mb-3 shadow rounded">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="d-flex justify-content-between container">
            <div><a class="navbar-brand" href="" @click.prevent="changePage('Home')"><img src="../assets/D'STore.png" style="height:50px">D'Store</a></div>
            <div v-if="flagLogin == true" class="d-flex flex-row align-items-center">
              <div class="mr-3"><a href="" @click.prevent="changePage('Carts')"><i class="fas fa-shopping-cart"></i></a></div>
              <div class="mr-3"><a href="" @click.prevent="postLogout">Logout</a></div>
              <div class="mt-3"><p>Welcome, {{ username }}</p></div>
            </div>
            <div v-else-if="flagLogin == false"><a href="" @click.prevent="changePage('Login')">Login</a></div>
          </div>
        </nav>
      </div>
      <BoardPage v-if="defaultPage == 'Home'"
      @changePage="changePage"
      @fetchProducts="fetchProducts"/>
      <Login v-else-if="defaultPage == 'Login'"
      @checkLogin="checkLogin"/>
      <Carts v-else-if="defaultPage == 'Carts'"
      @fetchCarts="fetchCarts"/>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'
import BoardPage from './Boardpage.vue'
import Carts from '../components/Cart.vue'
export default {
  name: 'Home',
  data () {
    return {
      flagLogin: false,
      username: '',
      defaultPage: 'Home'
    }
  },
  methods: {
    fetchCategory () {
      this.$store.dispatch('fetchCategory')
    },
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    },
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    changePage (string) {
      this.defaultPage = string
    },
    checkLogin () {
      if (localStorage.token) {
        this.flagLogin = true
        this.defaultPage = 'Home'
      } else {
        this.flagLogin = false
        this.defaultPage = 'Home'
      }
    },
    postLogout () {
      localStorage.clear()
      this.flagLogin = false
    },
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    }
  },
  components: {
    Login,
    BoardPage,
    Carts
  },
  created () {
    this.fetchCategory()
    this.fetchBanner()
    this.fetchProducts()
    this.checkLogin()
    this.username = localStorage.username
  }
}
</script>
