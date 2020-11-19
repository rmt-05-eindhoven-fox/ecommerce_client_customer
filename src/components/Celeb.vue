<template>
<div class="home-page">
  <nav class="navbar navbar-expand-lg fixed-top bg-white">
    <h5 role="button" class="nav-link text-dark">
      <h3>Date With Celebs...</h3>
    </h5>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <div>
            <button class="btn btn-light fa fa-shopping-basket mx-2">
            </button>
            <button class="btn btn-danger mx-2">
              <b @click.prevent="logout">Sign Out</b>
            </button>
          </div>
        </li>
      </ul>
      </div>
  </nav>
  <h1 class="mt-4">Choose your favorite celeb!</h1>
  <div class="container-fluid">
    <div class="d-flex flex-wrap justify-content-center mt-3">
      <div v-for="celeb in celebs"
      :key="celeb.id" class="mb-4">
        <div class="card mx-3" style="width: 18rem;">
          <div class="w-100" style="position: relative">
            <img :src="celeb.image_url" height="150px">
        </div>
        <div class="card-title mt-2 mb-0" style="border-bottom-width: 1px; border-bottom-style: solid;">
          <h2 class="text-center">{{celeb.name}}</h2>
        </div>
        <div class="card-body mb-0 pb-0 d-flex justify-content-lg-between">
          <div>
            <p class="text-secondary">
              <b>{{celeb.stock}}</b>
            </p>
          </div>
          <div>
            <p class="text-secondary">
              <b>Rp {{celeb.price}}</b>
            </p>
          </div>
        </div>
        <button type="submit" class="btn btn-dark">Date Me !</button>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Celebs',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  computed: {
    celebs () {
      return this.$store.state.celebs
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    fetchCelebs () {
      this.$store.dispatch('fetchCelebs')
    }
  },
  created () {
    this.fetchCelebs()
  }
}
</script>
