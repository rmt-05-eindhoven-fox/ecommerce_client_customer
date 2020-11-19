<template>
  <div class="home">
    <Navigation/>
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-9 col-lg-10 px-4 mt-3" style="margin-left: 10%">
       <div class="row justify-content-between">
          <CartList v-for="item in cart" :key="item.id" :item="item"/>
       </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import CartList from '@/components/CartList.vue'

export default {
  name: 'Cart',
  components: {
    Navigation,
    CartList
  },
  methods: {
    fetchCart() {
      const token = localStorage.getItem("token")
      this.$store.dispatch('fetchCart', token)
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    }
  },
  created() {
    this.fetchCart()
  }
}
</script>
