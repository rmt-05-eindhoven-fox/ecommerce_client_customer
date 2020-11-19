<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation" aria-label="main navigation">
            <div class="container d-flex justify-content-between">
                <router-link
                    class="navbar-brand d-flex align-items-center"
                    to="/dashboard">
                <a class="navbar-brand" href="#">Vue Electronic</a>
                </router-link>
                <router-link
                    class="navbar-brand d-flex align-items-center"
                    to="/dashboard/laptop">
                  Laptop
                </router-link>
                 <router-link
                    class="navbar-brand d-flex align-items-center"
                    to="/dashboard/handphone">
                  Handphone
                </router-link>
            </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                        <router-link to="/dashboard/cart" class="nav-link" ><i class="fa fa-shopping-cart mr-2"  aria-hidden="true" ></i>Cart
                  </router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    User
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a @click.prevent="logout" class="dropdown-item" href="#">Sign Out</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  name: 'Navbar',

  data () {
    return {
      isCheckoutActive: false,
      isMenuOpen: false
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }

}
</script>
