<template>
  <nav class="navbar navbar-light bg-light">
    <div>
      <span class="navbar-brand">Ecommerce-hacktiv</span>
    </div>
    <div>
      <ul v-if="isLoggedIn" class="nav nav-tabs">
        <li class="nav-item">
          <a @click.prevent="goToDashboard" class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a @click.prevent="goToWishlist" class="nav-link" href="#">
            <i class="fas fa-star"> Wishlist</i>
          </a>
        </li>
        <!-- <li class="nav-item">
          <a @click.prevent="goToHistory" class="nav-link" href="#">
            <i class="fas fa-history"> Transaction History</i>
          </a>
        </li> -->
        <li class="nav-item">
          <button @click="goToCart" type="button" class="btn btn-dark">
            <i class="fas fa-shopping-cart"> Cart</i>
          </button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ userLoggedInEmail }}
          </a>
          <div class="dropdown-menu">
            <a @click.prevent="logout" class="dropdown-item" href="#">Logout</a>
          </div>
        </li>
      </ul>
      <ul v-else class="nav nav-tabs">
        <li class="nav-item">
          <a @click.prevent="goToDashboard" class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <button @click.prevent="goToLogin" type="button" class="btn btn-primary">
            <i class="fas fa-arrow-circle-right"> Login</i>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Navbar',
  data () {
    return {
      // isLoggedin: false
    }
  },
  methods: {
    goToLogin () {
      if (this.$route.name !== 'Login') {
        this.$router.push({ name: 'Login' })
      }
    },
    goToDashboard () {
      if (this.$route.name !== 'Dashboard') {
        this.$router.push({ name: 'Dashboard' })
      }
    },
    goToCart () {
      if (this.$route.name !== 'Carts') {
        this.$router.push({ name: 'Carts' })
      }
    },
    goToHistory () {
      if (this.$route.name !== 'History') {
        this.$router.push({ name: 'History' })
      }
    },
    goToWishlist () {
      if (this.$route.name !== 'Wishlists') {
        this.$router.push({ name: 'Wishlists' })
      }
    },
    logout () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Logout'
      })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('email')
            if (this.$route.name !== 'Dashboard') {
              this.$router.push({ name: 'Dashboard' })
            }
            const payload = { status: false, email: '' }
            this.$store.commit('SET_isLoggedIn', payload)
          }
        })
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn.status
    },
    userLoggedInEmail () {
      return this.$store.state.isLoggedIn.email
    }
  },
  created () {
    // console.log(this.$route)
    const token = localStorage.getItem('access_token')
    if (token) {
      const payload = {
        status: true,
        email: localStorage.getItem('email')
      }
      this.$store.commit('SET_isLoggedIn', payload)
    }
  }
}
</script>

<style>
/* .navbar {
  height: 60px;
} */
</style>
