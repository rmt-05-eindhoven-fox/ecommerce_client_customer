<template>
  <div class="home">
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top  header-transparent ">
    <div class="container d-flex align-items-center">

      <div class="logo mr-auto">
        <!-- <h1 class="text-light"><a href="index.html">Appland</a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html"><img src="../assets/logo-1.png" alt="" class="img-fluid"></a>
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li><a href="#gallery">Home</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">My Cart <i class="fa fa-shopping-bag"></i> </a></li>
          <!-- <li class="galssescart galssescart2 cart cart box_1">
            <form action="#" method="post" class="last">
								<input type="hidden" name="cmd" value="_cart">
								<input type="hidden" name="display" value="1">
								<button class="top_googles_cart" type="submit" name="submit" value="">
									My Cart
									<i class="fas fa-cart-arrow-down"></i>
								</button>
							</form>
          </li> -->
          <li class="get-started"><a href="#features">Login</a></li>
        </ul>
      </nav><!-- .nav-menu -->

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <!-- <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
          <div>
            <h1>Lapak Iwak</h1>
            <h2>Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait</h2>
            <a href="#" class="download-btn"><i class="bx bxl-play-store"></i> Google Play</a>
            <a href="#" class="download-btn"><i class="bx bxl-apple"></i> App Store</a>
          </div>
        </div>
        <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
          <img src="assets/img/hero-img.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>

  </section> -->
  <!-- End Hero -->

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
          <!-- <div class="carousel-inner"> -->
            <!-- <Banner
              v-for="banner in banners"
              :key="banner.id"
              :banner="banner">
          </Banner> -->
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
    <section class="banner-bottom-wthreelayouts py-lg-5 py-3">
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
                  
                  <!-- /womens -->
                  <!-- <div class="col-md-3 product-men women_two shop-gd">
                    <div class="product-googles-info googles">
                      <div class="men-pro-item">
                        <div class="men-thumb-item">
                          <img src="../assets/a.png" class="img-fluid" alt="">
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <a href="single.html" class="link-product-add-cart">Quick View</a>
                            </div>
                          </div>
                          <span class="product-new-top">New</span>
                        </div>
                        <div class="item-info-product">
                          <div class="info-product-price">
                            <div class="grid_meta">
                              <div class="product_price">
                                <h4>
                                  <a href="single.html">Farenheit (Grey)</a>
                                </h4>
                                <div class="grid-price mt-2">
                                  <span class="money ">$575.00</span>
                                </div>
                              </div>
                            </div>
                            <div class="googles single-item hvr-outline-out">
                              <form action="#" method="post">
                                <input type="hidden" name="cmd" value="_cart">
                                <input type="hidden" name="add" value="1">
                                <input type="hidden" name="googles_item" value="Farenheit">
                                <input type="hidden" name="amount" value="575.00">
                                <button type="submit" class="googles-cart pgoogles-cart">
                                  <i class="fa fa-cart-plus"></i>
                                </button>
                              </form>

                            </div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 product-men women_two shop-gd">
                    <div class="product-googles-info googles">
                      <div class="men-pro-item">
                        <div class="men-thumb-item">
                          <img src="../assets/b.png" class="img-fluid" alt="">
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <a href="single.html" class="link-product-add-cart">Quick View</a>
                            </div>
                          </div>
                          <span class="product-new-top">New</span>
                        </div>
                        <div class="item-info-product">

                          <div class="info-product-price">
                            <div class="grid_meta">
                              <div class="product_price">
                                <h4>
                                  <a href="single.html">Opium (Grey)</a>
                                </h4>
                                <div class="grid-price mt-2">
                                  <span class="money ">$325.00</span>
                                </div>
                              </div>
                            </div>
                            <div class="googles single-item hvr-outline-out">
                              <form action="#" method="post">
                                <input type="hidden" name="cmd" value="_cart">
                                <input type="hidden" name="add" value="1">
                                <input type="hidden" name="googles_item" value="Opium (Grey)">
                                <input type="hidden" name="amount" value="325.00">
                                <button type="submit" class="googles-cart pgoogles-cart">
                                  <i class="fa fa-cart-plus"></i>
                                </button>

                              </form>

                            </div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 product-men women_two shop-gd">
                    <div class="product-googles-info googles">
                      <div class="men-pro-item">
                        <div class="men-thumb-item">
                          <img src="../assets/c.png" class="img-fluid" alt="">
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <a href="single.html" class="link-product-add-cart">Quick View</a>
                            </div>
                          </div>
                          <span class="product-new-top">New</span>
                        </div>
                        <div class="item-info-product">

                          <div class="info-product-price">
                            <div class="grid_meta">
                              <div class="product_price">
                                <h4>
                                  <a href="single.html">Kenneth Cole</a>
                                </h4>
                                <div class="grid-price mt-2">
                                  <span class="money ">$575.00</span>
                                </div>
                              </div>
                            </div>
                            <div class="googles single-item hvr-outline-out">
                              <form action="#" method="post">
                                <input type="hidden" name="cmd" value="_cart">
                                <input type="hidden" name="add" value="1">
                                <input type="hidden" name="googles_item" value="Kenneth Cole">
                                <input type="hidden" name="amount" value="575.00">
                                <button type="submit" class="googles-cart pgoogles-cart">
                                  <i class="fa fa-cart-plus"></i>
                                </button>
                              </form>

                            </div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 product-men women_two shop-gd">
                    <div class="product-googles-info googles">
                      <div class="men-pro-item">
                        <div class="men-thumb-item">
                          <img src="../assets/d.png" class="img-fluid" alt="">
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <a href="single.html" class="link-product-add-cart">Quick View</a>
                            </div>
                          </div>
                          <span class="product-new-top">New</span>
                        </div>
                        <div class="item-info-product">

                          <div class="info-product-price">
                            <div class="grid_meta">
                              <div class="product_price">
                                <h4>
                                  <a href="single.html">Farenheit Oval </a>
                                </h4>
                                <div class="grid-price mt-2">
                                  <span class="money ">$325.00</span>
                                </div>
                              </div>
                            </div>
                            <div class="googles single-item hvr-outline-out">
                              <form action="#" method="post">
                                <input type="hidden" name="cmd" value="_cart">
                                <input type="hidden" name="add" value="1">
                                <input type="hidden" name="googles_item" value="Farenheit Oval">
                                <input type="hidden" name="amount" value="325.00">
                                <button type="submit" class="googles-cart pgoogles-cart">
                                  <i class="fa fa-cart-plus"></i>
                                </button>
                              </form>

                            </div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 product-men women_two shop-gd">
                    <div class="product-googles-info googles">
                      <div class="men-pro-item">
                        <div class="men-thumb-item">
                          <img src="../assets/d.png" class="img-fluid" alt="">
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <a href="single.html" class="link-product-add-cart">Quick View</a>
                            </div>
                          </div>
                          <span class="product-new-top">New</span>
                        </div>
                        <div class="item-info-product">

                          <div class="info-product-price">
                            <div class="grid_meta">
                              <div class="product_price">
                                <h4>
                                  <a href="single.html">Farenheit Oval </a>
                                </h4>
                                <div class="grid-price mt-2">
                                  <span class="money ">$325.00</span>
                                </div>
                              </div>
                            </div>
                            <div class="googles single-item hvr-outline-out">
                              <form action="#" method="post">
                                <input type="hidden" name="cmd" value="_cart">
                                <input type="hidden" name="add" value="1">
                                <input type="hidden" name="googles_item" value="Farenheit Oval">
                                <input type="hidden" name="amount" value="325.00">
                                <button type="submit" class="googles-cart pgoogles-cart">
                                  <i class="fa fa-cart-plus"></i>
                                </button>
                              </form>

                            </div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div>
                <!-- <div class="row my-lg-3 my-0">
                    <div class="col-md-3 product-men women_two shop-gd">
                      <div class="product-googles-info googles">
                        <div class="men-pro-item">
                          <div class="men-thumb-item">
                            <img src="../assets/e.png" class="img-fluid" alt="">
                            <div class="men-cart-pro">
                              <div class="inner-men-cart-pro">
                                <a href="single.html" class="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                            <span class="product-new-top">New</span>
                          </div>
                          <div class="item-info-product">
          
                            <div class="info-product-price">
                              <div class="grid_meta">
                                <div class="product_price">
                                  <h4>
                                    <a href="single.html">Aislin Wayfarer </a>
                                  </h4>
                                  <div class="grid-price mt-2">
                                    <span class="money ">$775.00</span>
                                  </div>
                                </div>
                              </div>
                              <div class="googles single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <input type="hidden" name="cmd" value="_cart">
                                  <input type="hidden" name="add" value="1">
                                  <input type="hidden" name="googles_item" value="Aislin Wayfarer">
                                  <input type="hidden" name="amount" value="775.00">
                                  <button type="submit" class="googles-cart pgoogles-cart">
                                    <i class="fa fa-cart-plus"></i>
                                  </button>
                                </form>
          
                              </div>
                            </div>
                            <div class="clearfix"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
              </div>
            </div>
            <!--//product right-->
          </div>
        </div>
      </div>
    </section>
    <!-- Shop Now Section -->
    <!-- ======= Section 2 ======= -->
    <!-- <section class="banner-bottom-wthreelayouts py-lg-5 py-3">
      <div class="container-fluid">
        <div class="inner-sec-shop px-lg-4 px-3">
          <h3 class="tittle-w3layouts my-lg-4 my-4">Shop</h3>
          <div class="row">
            <div class="col-md-3 product-men women_two">
              <div class="product-googles-info googles">
                <div class="men-pro-item">
                  <div class="men-thumb-item">
                    <img src="../assets/a.png" class="img-fluid" alt="">
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                      </div>
                    </div>
                    <span class="product-new-top">Out of Stock</span>
                  </div>
                  <div class="item-info-product">
                    <div class="info-product-price">
                      <div class="grid_meta">
                        <div class="product_price">
                          <h4>
                            <a href="single.html">Farenheit (Grey)</a>
                          </h4>
                          <div class="grid-price mt-2">
                            <span class="money ">$575.00</span>
                          </div>
                        </div>
                      </div>
                      <div class="googles single-item hvr-outline-out">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" value="_cart">
                          <input type="hidden" name="add" value="1">
                          <input type="hidden" name="googles_item" value="Farenheit">
                          <input type="hidden" name="amount" value="575.00">
                          <button type="submit" class="googles-cart pgoogles-cart">
                            <i class="fa fa-cart-plus"></i>
                          </button>

                          
                        </form>

                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 product-men women_two">
              <div class="product-googles-info googles">
                <div class="men-pro-item">
                  <div class="men-thumb-item">
                    <img src="../assets/b.png" class="img-fluid" alt="">
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                      </div>
                    </div>
                  </div>
                  <div class="item-info-product">

                    <div class="info-product-price">
                      <div class="grid_meta">
                        <div class="product_price">
                          <h4>
                            <a href="single.html">Opium (Grey)</a>
                          </h4>
                          <div class="grid-price mt-2">
                            <span class="money ">$325.00</span>
                          </div>
                        </div>
                      </div>
                      <div class="googles single-item hvr-outline-out">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" value="_cart">
                          <input type="hidden" name="add" value="1">
                          <input type="hidden" name="googles_item" value="Opium (Grey)">
                          <input type="hidden" name="amount" value="325.00">
                          <button type="submit" class="googles-cart pgoogles-cart">
                            <i class="fa fa-cart-plus"></i>
                          </button>

                          
                        </form>

                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 product-men women_two">
              <div class="product-googles-info googles">
                <div class="men-pro-item">
                  <div class="men-thumb-item">
                    <img src="../assets/c.png" class="img-fluid" alt="">
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                      </div>
                    </div>
                  </div>
                  <div class="item-info-product">

                    <div class="info-product-price">
                      <div class="grid_meta">
                        <div class="product_price">
                          <h4>
                            <a href="single.html">Kenneth Cole</a>
                          </h4>
                          <div class="grid-price mt-2">
                            <span class="money ">$575.00</span>
                          </div>
                        </div>
                      </div>
                      <div class="googles single-item hvr-outline-out">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" value="_cart">
                          <input type="hidden" name="add" value="1">
                          <input type="hidden" name="googles_item" value="Kenneth Cole">
                          <input type="hidden" name="amount" value="575.00">
                          <button type="submit" class="googles-cart pgoogles-cart">
                            <i class="fa fa-cart-plus"></i>
                          </button>
                          
                        </form>

                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 product-men women_two">
              <div class="product-googles-info googles">
                <div class="men-pro-item">
                  <div class="men-thumb-item">
                    <img src="../assets/d.png" class="img-fluid" alt="">
                    <div class="men-cart-pro">
                      <div class="inner-men-cart-pro">
                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                      </div>
                    </div>
                  </div>
                  <div class="item-info-product">

                    <div class="info-product-price">
                      <div class="grid_meta">
                        <div class="product_price">
                          <h4>
                            <a href="single.html">Farenheit Oval </a>
                          </h4>
                          <div class="grid-price mt-2">
                            <span class="money ">$325.00</span>
                          </div>
                        </div>
                      </div>
                      <div class="googles single-item hvr-outline-out">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" value="_cart">
                          <input type="hidden" name="add" value="1">
                          <input type="hidden" name="googles_item" value="Farenheit Oval">
                          <input type="hidden" name="amount" value="325.00">
                          <button type="submit" class="googles-cart pgoogles-cart">
                            <i class="fa fa-cart-plus"></i>
                          </button>

                          
                        </form>

                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container py-4">
      <div class="copyright">
        <center>&copy; 2020 <strong><span>Lapak Iwak</span></strong>.</center>
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
    }
  },
  created () {
    this.fetchBanners(),
    this.fetchProducts()
  },
  computed: {
    banners () {
      return this.$store.state.banners.filter(banner => banner.status === "Active")
    },     
    products () {
      return this.$store.state.products
    }
  }
}
</script>
