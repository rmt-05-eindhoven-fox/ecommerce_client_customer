<template>
  <v-app>
    <v-app-bar
      app
      color="#FEDBD0"
      flat
      v-if="isHomePage"
    >
      <v-container class="py-0 fill-height">
        <div class="d-flex align-self-center">
          <img @click="goToHome" src="./assets/skoutwear_logo.svg" alt="" class="logo">
        </div>
        <v-spacer></v-spacer>
        <v-responsive max-width="400">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            filled
            placeholder="Search Product"
            append-icon="mdi-magnify"
            v-model="search"
            @keyup.enter.prevent="searchProducts"
          ></v-text-field>
        </v-responsive>
        <v-spacer></v-spacer>
        <v-btn @click="drawer = !drawer" icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn
          v-show="!islogin"
          color="#442C2E"
          dark
          @click="goToLogin"
        >Login</v-btn>
        <v-btn
          v-show="islogin"
          color="#442C2E"
          dark
          @click="logout"
        >Logout</v-btn>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          right
          temporary
          height="100vh"
          width="35vw"
        >
          <div class="d-flex flex-column">
            <div v-if="!carts.length" class="cart-empty">
              <div class="d-flex flex-column align-center">
                <img src="./assets/cart-illustration.svg" alt="cart-illustration" class="cart-illustration">
                <h1 v-show="!islogin">Please login to continue</h1>
                <v-btn
                v-show="!islogin"
                color="#FEDBD0"
                class="login-btn-checkout"
                >
                  Login
                </v-btn>
                <h1>Your cart is empty</h1>
              </div>
            </div>
            <div v-else class="cart-not-empty">
              <h1 class="text-center cart-title">Your Cart</h1>
              <div class="cart-content">
                <v-row justify="center">
                  <CartCard
                  v-for="cart in carts"
                  :key="cart.id"
                  width="90%"
                  :cart="cart"
                  >
                  </CartCard>
                </v-row>
              </div>
              <v-row class="subtotal">
                <v-col>
                  <h1 class="subtotal-text">Sub Total</h1>
                </v-col>
                <v-col align-self="center" cols="4">
                  <h3>{{ subtotal }}</h3>
                </v-col>
              </v-row>
              <v-row justify="center" class="checkout-btn">
                <v-btn
                color="#FEDBD0"
                @click="checkout"
                >
                  Checkout
                </v-btn>
              </v-row>
            </div>
          </div>
        </v-navigation-drawer>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

    <v-card
      width="100vw"
      color="#FEDBD0"
      class="footer"
      v-if="isHomePage"
    >
      <v-container>
        <h1 class="text-center">© 2020, yosiaelnino</h1>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import CartCard from './components/CartCard'
export default {
  name: 'App',
  components: {
    CartCard
  },
  data () {
    return {
      drawer: false,
      search: ''
    }
  },
  computed: {
    isHomePage () {
      if (this.$route.name === 'Login' || this.$route.name === 'Register') {
        return false
      } else {
        return true
      }
    },
    islogin () {
      return this.$store.state.isLogin
    },
    carts () {
      return this.$store.state.carts
    },
    subtotal () {
      let subtotal = 0
      this.$store.state.carts.forEach(cart => {
        const each = cart.amount * cart.Product.price
        subtotal += each
      })
      const formatted = subtotal.toLocaleString('id-ID')
      const price = 'Rp. ' + formatted + ',-'
      return price
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    goToLogin () {
      this.$router.push('/login')
    },
    searchProducts () {
      this.$router.push('/products')
      this.$store.commit('loadingProduct', true)
      this.$store.commit('changeCurrentCategory', `Search result '${this.search}'`)
      const payload = this.search
      this.$store.dispatch('searchProduct', payload)
      this.search = ''
    },
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$vToastify.success({
        title: 'Success',
        body: 'Logout success.',
        canTimeout: true,
        duration: 2000,
        theme: 'light'
      })
    },
    checkout () {
      this.$swal({
        title: 'Process to Checkout?',
        text: 'Do you want to process to checkout',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        reverseButtons: true
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push('/checkout')
          }
        })
    }
  },
  created () {
    this.fetchCarts()
    this.$store.commit('setLogin')
  }
}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

.logo {
  height: 5vh;
}

.logo:hover {
  cursor: pointer;
}

.footer {
  margin-top: 16px;
}

.product-card {
  border-radius: 15px !important;
}

.category-card {
  border-radius: 15px !important;
}

.cart-title {
  margin-top: 16px;
}

.cart-empty {
  height: 100vh;
}

.cart-illustration {
  width: 30vw;
  margin-top: 64px;
}

.login-btn-checkout {
  margin-top: 16px;
}

.cart-content {
  height: 71vh;
  margin-top: 16px;
  overflow: auto;
}

.amount {
  margin-left: 8px;
}

.amount-group {
  margin-top: 8px;
}

.plus-button {
  margin-left: 8px;
}

.subtotal {
  margin-top: 16px;
  margin-bottom: 16px;
}

.subtotal-text {
  margin-left: 16px;
}
</style>
