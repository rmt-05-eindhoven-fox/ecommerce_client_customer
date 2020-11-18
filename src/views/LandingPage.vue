<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-center align-items-center" style="height:100vh; width:100vh;">
        <div class="d-flex justify-content-center align-items-center" style="width:55%; height:100%;">
          <img src="../assets/online_shopping.png" alt="e-commerce logo" style="width:1000px; height:750px">
        </div>
        <div class="card rounded shadow-lg" style="width:40%; height:65%;">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing-page',
  methods: {
    change (path) {
      this.$router.push(path)
    }
  },
  created () {
    this.change('/signin')
  }
}
</script>

<style>

</style>
