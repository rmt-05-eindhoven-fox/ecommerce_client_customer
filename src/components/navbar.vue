<template>
  <div class="menu container-fluid fixed-top">
    <div class="row d-flex justify-content-between">
      <div class="col-1 brand">
        <h4><strong><a @click.prevent="changePage('/product')" href="#">Vuemerce</a></strong></h4>
      </div>
      <div class="col-2 d-flex justify-content-around right-navbar">
        <button @click="changePage('/cart')" class="btn btn-dark"><i class="fas fa-shopping-cart">Cart</i></button>
        <button @click.prevent="logout" class="btn btn-danger">Sign Out</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    changePage (payload) {
      this.$router.push(payload)
    }
  }
}
</script>

<style>
.menu {
  height: 12vh;
  background-color: aqua;
}
.brand {
  margin-top: 2vh;
}
.right-navbar {
  margin: 1vh;
}
a {
  text-decoration: none;
  color: black;
}
</style>
