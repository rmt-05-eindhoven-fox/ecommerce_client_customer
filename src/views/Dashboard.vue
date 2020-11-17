<template>
  <section class="dashboard">
    <Navbar/>
    <div id="dasboard-content">
      <div class="row justify-content-center">
        <div id="side-menu" class="col-2 bg-light">
          <!-- <div class="card"> -->
            <!-- <div class="card-body"> -->
              This is side menu
            <!-- </div> -->
          <!-- </div> -->
        </div>
        <div id="products-board" class="col-10 px-4">
          <div id="banners" class="carousel slide mb-2" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#banners" data-slide-to="0" class="active"></li>
              <li data-target="#banners" data-slide-to="1"></li>
              <li data-target="#banners" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="https://borneosport.com/wp-content/uploads/2018/03/BANNER-SPECS-METASALA-KNIGHT.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://img.okezone.com/content/2016/05/14/47/1388404/juventus-resmi-luncurkan-jersey-2016-2017-oKEcOyjpbb.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://s3.nikecdn.com/events-platform/pre-prod/NET_Admin/header/2019-02-01_2205_BannerNRCEnero_01.jpg" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#banners" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#banners" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="category">Category</label>
            </div>
            <select class="custom-select" id="category">
              <option value="" selected>All Category</option>
              <option value="1">Apparel</option>
              <option value="2">Futsal Shoes</option>
              <option value="3">Football Shoes</option>
            </select>
          </div>
          <div id="products-board-items">
            <div class="row">
              <div class="col-3">
                <div class="card product-item">
                  <!-- <div class="pb-2"> -->
                    <div class="product-image">
                      <img src="https://2.bp.blogspot.com/-Z6oLgsJCGZQ/Xz4zGaDUU_I/AAAAAAACc8I/sHFmUrgeaxc6rx7e0vKqpgw6Pu30fbA2ACLcBGAsYHQ/s550/arsenal-20-21-away-kit-5.jpg">
                    </div>
                    <span class="badge badge-info item-category">Apparel</span>
                    <h5 class="card-title mt-2">Arsenal Jersey 2020/2021</h5>
                    <div class="d-flex justify-content-between px-3 mb-3">
                      <i class="fas fa-box-open"> in stock (20)</i>
                      <i class="fas fa-tag"> Rp.1000.000</i>
                    </div>
                    <a href="#" class="btn btn-primary">Add to chart</a>
                  <!-- </div> -->
                </div>
              </div>
              <div class="col-3">
                <div class="card product-item">
                  <!-- <div class="pb-2"> -->
                    <div class="product-image">
                      <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b6fc709336cc4b22abcea80f009c3e46_9366/Ultraboost_Shoes_White_BB6168_07_standard.jpg">
                    </div>
                    <h5 class="card-title">Arsenal Jersey 2020/2021</h5>
                    <div class="d-flex justify-content-between px-3 my-1">
                      <i class="fas fa-box-open"> 20</i>
                      <i class="fas fa-tag"> Rp.1000.000</i>
                    </div>
                    <a href="#" class="btn btn-primary">Add to chart</a>
                  <!-- </div> -->
                </div>
              </div>
              <div class="col-3">
                <div class="card product-item">
                  <!-- <div class="pb-2"> -->
                    <div class="product-image">
                      <img src="https://4.bp.blogspot.com/-ElEkIvqsIYA/XZMZFMpyiAI/AAAAAAACGnE/SUHdXUGiLCo-Wsz-oKAMtMIax6f_UtHtQCNcBGAsYHQ/s1600/nike-total-90-2019-remake-abll%2B%25287%2529.jpg">
                    </div>
                    <h5 class="card-title">Arsenal Jersey 2020/2021</h5>
                    <div class="d-flex justify-content-between px-3 my-1">
                      <i class="fas fa-box-open"> 20</i>
                      <i class="fas fa-tag"> Rp.1000.000</i>
                    </div>
                    <a href="#" class="btn btn-primary">Add to chart</a>
                  <!-- </div> -->
                </div>
              </div>
              <div class="col-3">
                <div class="card product-item">
                  <!-- <div class="pb-2"> -->
                    <div class="product-image">
                      <img src="https://2.bp.blogspot.com/-Z6oLgsJCGZQ/Xz4zGaDUU_I/AAAAAAACc8I/sHFmUrgeaxc6rx7e0vKqpgw6Pu30fbA2ACLcBGAsYHQ/s550/arsenal-20-21-away-kit-5.jpg">
                    </div>
                    <h5 class="card-title">Arsenal Jersey 2020/2021</h5>
                    <div class="d-flex justify-content-between px-3 my-1">
                      <i class="fas fa-box-open"> 20</i>
                      <i class="fas fa-tag"> Rp.1000.000</i>
                    </div>
                    <a href="#" class="btn btn-primary">Add to chart</a>
                  <!-- </div> -->
                </div>
              </div>
              <div class="col-3">
                <div class="card product-item">
                  <!-- <div class="pb-2"> -->
                    <div class="product-image">
                      <img src="https://topscore.b-cdn.net/wp-content/uploads/2020/03/SEPATU-SEPAKBOLA-SPECS-ACCELARATOR-LIGHTSPEED-II-PRO-FG-BLACK-SILVER-1.jpg">
                    </div>
                    <h5 class="card-title">Arsenal Jersey 2020/2021</h5>
                    <div class="d-flex justify-content-between px-3 my-1">
                      <i class="fas fa-box-open"> 20</i>
                      <i class="fas fa-tag"> Rp.1000.000</i>
                    </div>
                    <a href="#" class="btn btn-primary">Add to chart</a>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar
  },
  data () {
    return {
      selectedCategory: ''
    }
  }
}
</script>

<style scoped>
body {
  background-color: rgba(15, 12, 12, 0.616);
}

#side-menu {
  height: 100vh;
  /* width: 160px; */
  /* position: fixed; */
  /* z-index: 1;
  top: 0;
  left: 0; */
  /* background-color: #111; */
  overflow-x: hidden;
  padding-top: 20px;
  /* margin-top: 30px; */
}

.product-item {
  margin: 10px;
  height: 95%;
  box-shadow: 1px 1px 2px 1px rgb(211, 211, 211);
  padding: 0;
  text-align: center;
  position: relative;
}

.item-category {
  position: absolute;
}

/* .card {
  margin: 0px;
  text-align: center;
} */
.carousel-item {
  height: 400px;
}

.product-image {
  height: 80%;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
}

</style>
