<template>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-white" href="" @click.prevent="toHome"><h1>Apple</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="" @click.prevent="showCategory('')">All</a>
          <a class="dropdown-item" href="" @click.prevent="showCategory('SmartWatch')">SmartWatch</a>
          <a @click.prevent="showCategory(Laptop)" class="dropdown-item" href="">Laptop</a>
          <a @click.prevent="showCategory('SmartPhone')" class="dropdown-item" href="">SmartPhone</a>
          <a @click.prevent="showCategory('Tablet')" class="dropdown-item" href="">Tablet</a>
          <a @click.prevent="showCategory('PowerBank')" class="dropdown-item" href="">PowerBank</a>
          <a @click.prevent="showCategory('Aksesoris')" class="dropdown-item" href="">Aksesoris</a>
          <a @click.prevent="showCategory('Lainnya')" class="dropdown-item" href="">Lainnya</a>
        </div>
      </li>
    </ul>
    <form @click.prevent="toCart" class="form-inline my-2 my-lg-0 mr-2">
      <button class="btn btn-success my-2 my-sm-0 text-white" type="submit">Cart</button>
    </form>
    <!-- <form class="form-inline my-2 my-lg-0 mr-2">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
    <form class="form-inline my-2 my-lg-0">
      <button @click.prevent="logout" class="btn btn-danger my-2 my-sm-0 text-white" type="submit">Logout</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        logout(){
          this.$store.dispatch('logout')
        },
        toCart(){
          this.$router.push('/cart')
        },
        toHome(){
          this.$router.push('/')
        },
        showCategory(category){
          const data = {
            category: category
          }
          this.$store.dispatch('fetchProduct', data)
        }
    }
}
</script>

<style>

</style>