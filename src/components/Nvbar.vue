<template>
  <nav id="navbar">
    <div class="row">
      <div class="col-4 d-flex justify-content-start">
        <a @click.prevent="gotoHome" class="btn">Home</a>
      </div>
      <div class="col-8 d-flex justify-content-end">
        <a @click.prevent="gotoCart" class="btn">Cart</a>
        <a @click.prevent="signout" class="btn">Signout</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    gotoHome () {
      this.$router.push({ name: 'Product' }, () => {})
    },
    gotoCart () {
      this.$router.push({ name: 'Cart' }, () => {})
    },
    signout () {
      localStorage.removeItem('token')
      this.$router.push({ name: 'Login' }, () => {})
      this.$swal('Youre logged out')
    }
  }
}
</script>

<style scoped>
  #navbar {
    background-color: aqua;
    height: 50px;
  }
  #navbar a {
    font-size: 20px;
  }
</style>
