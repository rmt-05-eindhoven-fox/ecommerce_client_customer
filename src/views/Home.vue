<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <!-- <Banner/> -->
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar'
// import Banner from '../components/Banner'
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
