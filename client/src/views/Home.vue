<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="jumbotron">
      <Banner></Banner><br>
      <Card></Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'Home',
  components: {
    Navbar, Banner, Card
  }
}
</script>
