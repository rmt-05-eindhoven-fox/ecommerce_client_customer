<template>
  <section id="cart" class="container">
    <div class="row">
      <!-- cart table -->
      <div class="col-7">
        <div class="cart-item">
          <div class="card shadow">
            <div class="card-body">
              <!-- cart item -->
              <div class="row cart-item">
                <div class="col-5 product-image">
                  <img src="https://2.bp.blogspot.com/-Z6oLgsJCGZQ/Xz4zGaDUU_I/AAAAAAACc8I/sHFmUrgeaxc6rx7e0vKqpgw6Pu30fbA2ACLcBGAsYHQ/s550/arsenal-20-21-away-kit-5.jpg">
                </div>
                <div class="col-7 product-detail">
                  <div>
                    Arsenal Jersey 2020/2021
                  </div>
                  <div>
                    Rp. 980.000 @each
                  </div>
                  <div class="d-flex ">
                    <button type="button" class="btn btn-secondary product-options">-</button>
                    <p class="product-quantity"> 1 </p>
                    <button type="button" class="btn btn-success product-options">+</button>
                    <button type="button" class="btn btn-danger product-options">Remove Item</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- checkout table -->
      <div class="col-5 text-left">
        <h2>Checkout</h2>
        <div>
          <table class="table-borderless">
            <tr>
              <td>Arsenal Jersey 2020/2021</td>
              <td>x 2</td>
              <td>= Rp. 1.900.000</td>
            </tr>
            <tr>
              <td>Barcelona Jersey 2020/2021</td>
              <td>x 1</td>
              <td>= Rp. 1.100.000</td>
            </tr>
          </table>
          <hr>
          <h4 class="text-left">
            Total = Rp. 3.740.000
          </h4>
          <button class="btn btn-primary">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style scoped>
.card {
  height: 200px;
  text-align: left;
}

/* .product-options {
} */
p {
  margin: 0;
}

.product-quantity {
  font-size: 1em;
}

.product-image {
  height: auto;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>
