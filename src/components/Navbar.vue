<template>
    <section class="border-bottom sticky-top mb-4 py-1 shadow-sm" style="background-color: #007bff;">
        <nav class="px-4">
          <div id="logo" class="mt-1" >
            <a class="text-decoration-none " @click.prevent="changePage('')" href="">
              <h5 class="font-weight-bolder text-putih">SHOPPEDIA</h5>
            </a>
          </div>
          <div style="display: flex; align-items: center; font-size: 12px">
              <div v-if="isLogin === true" class="widget-header  mr-3">
                <a @click.prevent="changePage('carts')"  href="#" class="icon icon-sm rounded-circle "><i class="fa fa-shopping-cart text-putih icon-product" style="font-size: 13px"></i></a>
                <span class="badge badge-pill badge-danger notify">{{carts.length}}</span>
              </div>

              <div class="text-putih pr-3 font-weight-bold">{{email}}</div>
              <span v-if="isLogin === false" @click.prevent="changePage('login')"  class="text-decoration-none px-2 font-weight-bold text-putih" type="button">SIGN IN</span>
              <span v-if="isLogin === false" @click.prevent="changePage('register')"  class="text-decoration-none px-2 font-weight-bold text-putih" type="button">REGISTER</span>
              <span v-if="isLogin === true" @click.prevent="logout"  class="text-decoration-none px-2 font-weight-bold text-putih" type="button">SIGN OUT</span>
          </div>
        </nav>

    </section>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    isLogin () {
      return this.$store.state.isLogin
    },
    email () {
      return this.$store.state.email
    }
  },
  methods: {
    changePage (path) {
      this.$store.dispatch('changePage', path)
    },
    logout () {
      this.$store.dispatch('logout')
    },
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.fetchCart()
    }
  }
}
</script>

<style>
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
}

nav .links ul {
    list-style: none;
}
</style>
