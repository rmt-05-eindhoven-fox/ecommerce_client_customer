<template>
  <!-- Main Slider Start -->
  <div class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">

          <div id="carouselRandom" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li v-for="(product, i) in randomProducts" :key="i" data-target="#carouselRandom" :data-slide-to="i"></li>
              <!-- <li data-target="#carouselRandom" data-slide-to="1"></li>
              <li data-target="#carouselRandom" data-slide-to="2"></li> -->
            </ol>
            <div class="carousel-inner">
              <div v-for="(product, i) in randomProducts" :key="i" :class="getClass(i)">
                <div class="col-lg-4 m-1 mb-4" style="max-width: 320px">
                  <div class="product-item">
                    <div class="product-title">
                      <a href="#">{{ product.name }}</a>
                    </div>
                    <div class="product-image">
                      <a href="#">
                        <img :src="product.image_url" height="250px" alt="Product Image">
                      </a>
                      <div class="product-action">
                        <h5 v-if="isOutOfStock(product.stock)">
                          <span class="badge badge-secondary">Out of Stock</span>
                        </h5>
                        <div v-else>
                          <a href="#" @click.prevent="addToCart(product.id)"><i class="fa fa-cart-plus"></i></a>
                          <a href="#" @click.prevent="addToWhistlist(product.id)"><i class="fa fa-heart"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="product-price">
                      <h3><span>Rp</span>{{ formatNumber(product.price)}}</h3>
                      <a v-if="isOutOfStock(product.stock)" class="float-right mt-1">
                        <span class="badge badge-danger font-weight-bold">Out of Stock</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselRandom" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselRandom" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-9">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li v-for="(banner, i) in banners" :key="i" data-target="#carouselExampleIndicators" :data-slide-to="i"></li>
              <!-- <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> -->
            </ol>
            <div class="carousel-inner">
              <div v-for="(banner, i) in banners" :key="i" :class="getClass(i)">
                <img class="d-block w-100" :src="banner.image_url" alt="First slide" style="height: 400px;">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Main Slider End -->
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      items: [1, 2, 3, 4]
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners
    },
    randomProducts () {
      return this.$store.state.randomProducts
    }
  },
  methods: {
    isOutOfStock (stock) {
      if (stock < 1) {
        return true
      }
      return false
    },
    addToWhistlist (produtcId) {
      // console.log(produtcId)
      const token = localStorage.getItem('access_token')
      if (token) {
        this.$store.dispatch('addWhistlist', produtcId)
          .then((result) => {
            console.log(result)
          }).catch((err) => {
            console.log(err)
          })
      } else {
        this.$router.push('/auth/login')
      }
    },
    addToCart (productId) {
      const token = localStorage.getItem('access_token')
      if (token) {
        this.$store.dispatch('addToCart', productId)
      } else {
        this.$router.push('/auth/login')
      }
    },
    getClass (i, from = null) {
      if (from && i < 1) {
        return ['active']
      } else if (!from && i < 1) {
        return ['carousel-item', 'active']
      } else if (!from && i > 0) {
        return ['carousel-item']
      }
      return ['']
    },
    formatNumber (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>

<style>

</style>
