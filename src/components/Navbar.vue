<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a
      @click.prevent="click('Home')"
      class="navbar-brand" href=""> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a
            @click.prevent="click('Cart')"
            class="nav-link" href="">My Cart</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            User
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">List</a>
            <a
              @click.prevent="userLogout"
              class="dropdown-item" href="">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    click (value) {
      this.$router.push({ name: value }).catch(_ => {})
    },
    userLogout () {
      this.$store.dispatch('userLogout')
    }
  }

}
</script>

<style>

</style>
