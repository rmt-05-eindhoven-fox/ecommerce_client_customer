<template>
  <section class="section-name padding-y-sm animate__animated animate__fadeIn">
    <img v-if="isLoading === true" class="animate__animated animate__fadeIn" src="../assets/animation_500_khoa45kz.gif" style="position: fixed; z-index: 999; top:0; left:0; right:0; bottom:0; margin:auto;" height="300">
    <div class="container">

    <header class="section-heading">
        <h2 class="section-title text-blue">Products</h2>
    </header>

    <div class="row">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-3"
        >
            <div v-if="product.stock !== 0" href="#" class="card card-hover card-product-grid shadow-sm">
              <a class="img-wrap" > <img class="img-center" :src="product.image_url" title="" style="" height="175"> </a>
              <div class="info-wrap">
                  <div href="" class="title">{{product.name}}</div>
                  <div class="mt-1 font-weight-bold price-product">Rp {{product.price.toLocaleString(['ban', 'id'])}}</div>
                  <span class="float-left stock" style="font-size: 13px">{{product.stock}} left</span>
                  <span v-if="isLogin === true" @click.prevent="addCart(product.id)" class="float-right icon-product" style="font-size: 13px" type="button">
                    <img v-if="isLoading === true" class="animate__animated animate__fadeIn" src="../assets/animation_200_kho8sqjs.gif" height="60" style="position: absolute; right: 11px; bottom: -3px">
                    <span v-else>
                      <i class="fas fa-shopping-cart"></i> Cart
                    </span>

                  </span>

              </div>
            </div>
            <div v-else href="#" class="card card-product-grid shadow-sm" style="background-color: #f0f0ee;padding: 18px 20px;">
              <a class="img-wrap" > <img class="img-center" :src="product.image_url" title="" style="opacity: 0.3" height="175"> </a>
              <div class="info-wrap">
                  <div href="" class="title text-muted">{{product.name}}</div>
                  <div class="mt-1 font-weight-bold">Sold Out</div>
                  <span v-if="isLoading === true" class="float-left stock text-muted" style="font-size: 13px">{{product.stock}} left</span>
              </div>
            </div>
        </div>
    </div> <!-- row.// -->

    </div><!-- container // -->
  </section>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      quantity: null
    }
  },
  components: {
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    isLogin () {
      return this.$store.state.isLogin
    },
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    addCart (id) {
      this.$store.dispatch('addCart', id)
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>
  .card-product-grid {
      margin-bottom: 20px;
  }
  .card .img-wrap {
    overflow: hidden;
    position: relative;
  }

  .card-hover {
    transition: all .5s;
  }
  .card-hover:hover {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    outline: 1px solid #007bff ;
  }

  .card .img-wrap .img-center {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
  }

  .card-product-grid .img-wrap {
    border-radius: 0.2rem 0.2rem 0 0;
    height: 220px;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }
  .card-hover .info-wrap {
    overflow: hidden;
    padding: 18px 20px;
    transition: all .5s;
    color: #007bff
  }

  .card-hover:hover .info-wrap {
    overflow: hidden;
    padding: 18px 20px;
    background-color: #007bff;
    /* border-top: 1px solid #007bff ; */
    color: #fff
  }

  .card-hover .info-wrap .title {
    color: #215994;
    transition: all .5s;
    /* text-shadow: 0 0 1px #007bff; */
  }

  .card-hover:hover .info-wrap .title {
    color: #fff;
  }

  .card-hover .info-wrap .price-product {
    color: #007bff;
    font-size: 16px;
    transition: all .5s;
  }

  .card-hover:hover .info-wrap .price-product {
    color: #fff;
  }

  .card-hover .info-wrap .stock {
    color: #94c8ff;
    transition: all .5s;
  }

  .card-hover:hover .info-wrap .stock {
    color: #fff;
  }

  .icon-product {
    transition: all .3s;
  }

  .icon-product:hover {
    color: #fff;
    transform: scale(1.1);
    text-shadow: 0 0 5px #fff;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .text-blue {
    color: #007bff;
  }
  .text-putih {
    color: #fff;
    transition: all .3s;
  }

  .text-putih:hover {
    text-shadow: 0 0 5px #fff;
  }
</style>
