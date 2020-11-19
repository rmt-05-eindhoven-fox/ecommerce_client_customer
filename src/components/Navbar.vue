<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a
      @click.prevent="goTo('Home')"
      class="navbar-brand" href=""><img src="../assets/Unikloh.png" style="width:50px" alt="Unikloh"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a
            @click.prevent="goTo('Cart')"
            class="nav-link" href="">My Cart</a>
        </li>
        <li class="nav-item">
          <a
            @click.prevent="goTo('History')"
            class="nav-link" href="">Purchase History</a>
        </li>
        <li class="nav-item">
          <a
            @click.prevent="userLogout"
            class="nav-link" href="">Logout</a>
        </li>
      </ul>

    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goTo (value) {
      this.$router.push({ name: value }).catch(_ => {})
    },
    userLogout () {
      this.$store.dispatch('userLogout')
    },
    toastTest () {
      // this.$vToastify.error('easy-peasy')
      this.$store.commit('showSuccess', 'easy-peasy')
    }
  }

}
</script>

<style>

</style>
