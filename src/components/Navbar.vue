<template>
    <div class="py-1 shadow-sm " >
      <nav class="px-4">
          <div id="logo" class="font-weight-bold">
              <div >SHOPPEDIA</div>
          </div>
          <div style="display: flex; align-items: center; font-size: 12px">
              <div class="pr-3">EMAIL</div>
              <a class="text-decoration-none px-2" href="#">LOGIN</a>
          </div>
          <div>
            <a @click.prevent="changePage('carts')" href="">CART</a>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {
  },
  methods: {
    changePage (path) {
      this.$store.dispatch('changePage', path)
    }
  }
}
</script>

<style>

</style>
