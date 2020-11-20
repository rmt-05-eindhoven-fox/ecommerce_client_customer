<template>
  <div id="navbar">

    <!-- Nav Bar Start -->
    <div class="nav">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          <a href="#" class="navbar-brand">MENU</a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-between " id="navbarCollapse">
            <div class="navbar-nav mr-auto">
              <router-link :to="{ name: 'Product' }" class="nav-item nav-link active text-light">Home</router-link>
              <!-- <a href="#" class="nav-item nav-link active">Home</a> -->
            </div>
            <div class="navbar-nav ml-auto">
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">{{ userEmail }}</a>
                <div class="dropdown-menu">
                  <a v-if="isLogin" @click.prevent="logout" href="#" class="dropdown-item">Logout</a>
                  <div v-else>
                    <router-link :to="{ name: 'Login' }" class="dropdown-item">Login</router-link>
                    <router-link :to="{ name: 'Register' }" class="dropdown-item">Register</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Nav Bar End -->

    <!-- Bottom Bar Start -->
    <div class="bottom-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-3">
            <div class="logo">
              <router-link :to="{ name: 'Product' }">
                <img src="@/assets/logo.png" alt="Logo">
              </router-link>
              <!-- <a href="#">
              </a> -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="search">
              <input v-model="searchValue" type="text" placeholder="Search">
              <button><i class="fa fa-search"></i></button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="user">
              <!-- <a href="#" @click.prevent="openWhistlist" class="btn wishlist">
                <i class="fa fa-heart"></i>
                <span>({{ whistListCount }})</span>
              </a> -->
              <router-link :to="{ name: 'Whistlist' }" class="btn wishlist">
                <i v-if="loadingWhistlist" class="fas fa-spinner fa-spin"></i>
                <i v-else class="fa fa-heart"></i>
                <span>({{ whistListCount }})</span>
              </router-link>
              <router-link :to="{ name: 'Cart' }" class="btn cart">
                <i v-if="loadingCart" class="fas fa-spinner fa-spin"></i>
                <i v-else class="fa fa-shopping-cart"></i>
                <span>({{ cartCount }})</span>
              </router-link>
              <!-- <a href="#" @click.prevent="openCart" class="btn cart">
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Bar End -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      // loadingWhistlist: false
      userLogin: '',
      isLogin: false,
      searchValue: '',
      myTimeOUt: null
    }
  },
  watch: {
    userLogin () {
      if (this.userLogin === 'Account') {
        this.isLogin = false
      } else {
        this.isLogin = true
      }
    },
    searchValue () {
      clearTimeout(this.myTimeOUt)
      this.myTimeOUt = setTimeout(() => {
        const payload = {
          keyword: this.searchValue,
          tempSearch: this.$store.state.tempSearch
        }
        this.$store.dispatch('searchProduct', payload)
      }, 1000)
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
      this.userLogin = localStorage.getItem('fullname')
    } else {
      this.isLogin = false
      this.userLogin = 'Account'
    }
  },
  computed: {
    whistListCount () {
      const whistlists = this.$store.state.whistlists
      return whistlists.length
    },
    cartCount () {
      const carts = this.$store.state.carts
      return carts.length
    },
    loadingWhistlist () {
      return this.$store.state.loadingWhistlist
    },
    loadingCart () {
      return this.$store.state.loadingCart
    },
    userEmail () {
      return this.userLogin
    }

  },
  methods: {
    openCart () {
      this.$router.push({ path: '/cart' })
    },
    openWhistlist () {
      this.$router.push({ path: '/whistlist' })
    },
    logout () {
      localStorage.clear()
      this.userLogin = 'Account'
      if (this.$route.name !== 'Product') {
        this.$router.push({ name: 'Product' })
      }
      this.$store.dispatch('clearAllData')
    }
  }
}
</script>

<style>

</style>
