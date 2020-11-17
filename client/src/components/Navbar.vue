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
          <a class="dropdown-item" href="#">iPhone</a>
          <a class="dropdown-item" href="#">iPad</a>
          <a class="dropdown-item" href="#">iMac</a>
          <a class="dropdown-item" href="#">Macbook</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <form @click.prevent="toCart" class="form-inline my-2 my-lg-0 mr-2">
      <button class="btn btn-success my-2 my-sm-0 text-white" type="submit">Cart</button>
    </form>
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
            localStorage.clear()
            this.$router.push('/login')
        },
        toCart(){
          this.$router.push('/cart')
        },
        toHome(){
          this.$router.push('/')
        }
    }
}
</script>

<style>

</style>