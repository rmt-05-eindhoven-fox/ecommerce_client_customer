<template>
  <div class="home">
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top  header-transparent ">
    <div class="container d-flex align-items-center">
      <div class="logo mr-auto">
        <a href="/"><img src="../assets/logo-1.png" alt="" class="img-fluid"></a>
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li><a data-toggle="modal" data-target="#modal_aside_right" href="#faq">My Cart <i class="fa fa-shopping-bag"></i> </a></li>
          <li class="get-started"><a  v-if="isLoggedIn" @click.prevent="logout" href="#features">Logout</a></li>
          <li class="get-started"><a v-if="!isLoggedIn" @click.prevent="toLogin" href="#features">Login</a></li>
        </ul>
      </nav>
      <!-- .nav-menu -->
    </div>
  </header>
  <!-- End Header -->
  <main id="main">
    <!-- ======= Gallery Section ======= -->
    <section id="gallery" class="gallery">
      <div class="container">

        <div class="section-title">
          <h2><img src="../assets/title.png" alt="" class="img-fluid"></h2>
          <p>Ikan.. ikan apa yang labil? <br>
             Ikan kembung! Udah tau kembung masih aja di air.
          </p>
        </div>

        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
          <Banner></Banner>
          <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    <!-- End Gallery Section -->
     <!-- ======= Shop Now Section ======= -->
    <section id="shop" class="banner-bottom-wthreelayouts py-lg-5 py-3">
      <div class="container-fluid">
        <div class="inner-sec-shop px-lg-4 px-3">
          <h3 class="tittle-w3layouts my-lg-4 mt-3">Shop </h3>
          <div class="row">
            <!-- product left -->
            <div class="side-bar col-lg-3">
              <div class="search-hotel">
                <h3 class="agileits-sear-head">Search Here..</h3>
                <form action="#" method="post">
                    <input class="form-control" type="search" name="search" placeholder="Search" required="">
                    <button class="btn1">
                        <i class="fa fa-search"></i>
                    </button>
                    <div class="clearfix"> </div>
                  </form>
              </div>
              <!-- Category -->
              <div class="left-side">
                <h3 class="agileits-sear-head">Category</h3>
                <ul>
                  <li>
                    <input type="checkbox" class="checked">
                    <span class="span">Cupang</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked">
                    <span class="span">Lohan</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked">
                    <span class="span">Aquarium</span>
                  </li>
                </ul>
              </div>
              <!-- //Category -->
            </div>
            <!-- //product left -->
            <!--/product right-->
            <div class="left-ads-display col-lg-9">
              <div class="wrapper_top_shop">
                <div class="row my-lg-3 my-0">
                  <Product  
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                  ></Product>
                </div>
              </div>
            </div>
            <!--//product right-->
          </div>
        </div>
      </div>
    </section>
  </main><!-- End #main -->
  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container py-4">
      <div class="copyright">
        <center>&copy; 2020 <strong><span>Lapak iWak</span></strong>.</center>
      </div>
    </div>
  </footer>
  <!-- End Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '../components/Banner'
import Product from '../components/Product'

export default {
  name: 'Home',
  components: {
    Banner, Product
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }, 
    toLogin () {
      this.$router.push("/login")
    },
    logout () {
      // this.$router.push('/')
      localStorage.clear()
      this.$store.commit('setLoggedIn')
    }
  },
  created () {
    this.fetchBanners(),
    this.fetchProducts(),
    this.$store.commit('setLoggedIn')
  },
  computed: {
    isLoggedIn() {      
      // return localStorage.getItem("token");    
      return this.$store.state.isLoggedIn
    },
    banners () {
      return this.$store.state.banners.filter(banner => banner.status === "Active")
    },     
    products () {
      return this.$store.state.products
    }
  }
}
</script>
