<template>
    <div class="about">
      <section class="banner-bottom-wthreelayouts py-lg-5 py-3">
        <div class="container">
            <h3 class="tittle-w3layouts my-lg-4 mt-3">Checkout </h3>
            <div class="checkout-right">
              <h4>Your shopping cart contains:
                <span>2 Products</span>
              </h4>
             <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cupang Pinky</td>
                    <td>
                      <a href="single.html">
                        <img src="../assets/a.png" data-imagezoom="true" alt=" " class="img-responsive">
                      </a>
                    </td>
                    <td>						
                      <div class="quantity">
                        <div class="quantity-select">
                          <div class="entry value-minus">&nbsp;</div>
                          <div class="entry value">
                            <span>1</span>
                          </div>
                          <div class="entry value-plus active">&nbsp;</div>
                        </div>
                      </div>
                    </td>
                    <td>Rp 250.000,-</td>
                  <td>
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Rare Cupang</td>
                    <td>
                      <a href="single.html">
                        <img src="../assets/b.png" data-imagezoom="true" alt=" " class="img-responsive">
                      </a>
                    </td>
                    <td>						
                      <div class="quantity">
                        <div class="quantity-select">
                          <div class="entry value-minus">&nbsp;</div>
                          <div class="entry value">
                            <span>1</span>
                          </div>
                          <div class="entry value-plus active">&nbsp;</div>
                        </div>
                      </div>
                    </td>
                    <td>Rp 500.000,-</td>
                    <td><i class="fa fa-times" aria-hidden="true"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </section>
  </div>
</template>
<script>
export default {
  name: "Checkout"
}
</script>
<style scoped>
/* td.invert-image a img {
	width: 30%; */
	/* margin: 0 auto; */
/* } */
</style>
