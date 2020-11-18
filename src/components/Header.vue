<template>
    <div class="container col-12">
     <div class="row">
       <div class="col-4 col-sm-12 col-md-4">
          <div class="btn-group">
          </div>
       </div>
       <div class="col-md-4 col-12 text-center my-2">
          <h2 class="my-md-3 site-title text-center">E-Commerce Customer</h2>
       </div>
       <div class="account col-md-4 col-12 my-2">
         <p class="my-md-4 header-links">
          <a v-if="loggedIn === false" href="#" class="px-2"><router-link to="/landingPage/signIn"> Sign In </router-link></a>
          <a v-if="loggedIn === false" href="#" class="px-1"><router-link to="/landingPage/signUp"> Create An Account </router-link></a>
          <a v-if='loggedIn' class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
            User
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
            <li role="presentation"><a @click="logout" class="text-dark pl-2" role="menuitem" tabindex="-1" href="#">Logout</a></li>
          </ul>
         </p>
       </div>
     </div>
     <div class="container-fluid p-0">
       <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" style="font-size: 1em; font-weight: bold">
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/"> HOME </router-link></a>
            </li>
            <li class="nav-item">
              <a @click.prevent="scrollTo(700)" class="nav-link" href="#">CATEGORY</a>
            </li>
            <li class="nav-item">
              <a @click.prevent="scrollTo(10000)" class="nav-link" href="#">PRODUCTS</a>
            </li>
          </ul>
        </div>
        <div v-if="loggedIn" class="navbar-nav px-2 user-nav">
            <a href="#" class="notification mx-3">
              <span><router-link to="/cart"> Cart <i class="fas fa-shopping-basket fa-md"></i></router-link></span>
              <span v-if="cartLength > 0" class="badge">{{cartLength}}</span>
            </a>
            <a href="#">Transaction</a>
        </div>
      </nav>
     </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      loggedIn: false
    }
  },
  methods: {
    checkCredentials () {
      const accessToken = localStorage.getItem('access_token')
      if (!accessToken) {
        this.loggedIn = false
      } else {
        this.loggedIn = true
      }
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/landingPage/signIn')
    },
    showCartProducts () {
      const accessToken = localStorage.getItem('access_token')
      this.$store.dispatch('fetchCartProducts', accessToken)
    },
    scrollTo (val) {
      window.scrollTo(0, val)
    }
  },
  created () {
    this.checkCredentials()
  },
  computed: {
    cartLength () {
      return this.$store.state.cartProducts.length
    }
  },
  watch: {
    cartLength () {
      this.showCartProducts(0)
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Gugi&family=Lato&family=Roboto&display=swap');
  :root{
    --primary-color: #45ccb8;
    --light-gray: #2b3032a1;
    --border: #2b303218;
    --text-color: #ff686b;
    --roboto: "Roboto", sans-serif;
    --gugi: "Gugi", cursive;
    --sofia: "Sofia", cursive;
  }
  .row {
    background-color: #FFB001;
  }
  .site-title {
    color: white;
  }
  * {
    font-family: "Gugi", cursive;
  }
  .container .dropdown-toggle,
  .container .dropdown-item {
    font-family: "Roboto", cursive;
    font-size: 1em;
    color: white;
  }
  .header-links a {
    font-family: "Roboto", cursive;
    font-size: 1em;
    text-decoration: none;
    color: white;
  }
  .navbar-nav {
    padding: 0.8em 0em;
  }
  .navbar-nav .nav-link {
    font-size: 1em;
    color: #2b3032a1 !important;
  }
  .nav-link:hover {
    color: black !important;
  }
  .navbar-nav .nav-item .nav-link {
    padding: 0 1.3em;
  }
  .navbar-nav .basket-icon {
    margin-right: 6.5rem !important;
  }
  .account p a:hover {
    color: #007BFF;
  }
  .user-nav a{
    color: black !important;
  }
  .notification {
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
  border-radius: 2px;
  }

  .notification .badge {
    position: absolute;
    top: -15px;
    left: -26px;
    padding: 5px 10px;
    border-radius: 50%;
    background-color: red;
    color: white;
  }

  li a {
    color: #2b3032a1 !important;
  }
</style>
