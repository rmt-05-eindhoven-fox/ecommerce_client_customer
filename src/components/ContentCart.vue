<template>
  <div class="product">
    <div class="row">
      <div class="col-md-3">
        <img
          class="img-fluid mx-auto d-block image"
          :src="carts.Product.image_url"
        />
      </div>
      <div class="col-md-8">
        <div class="info">
          <div class="row">
            <div class="col-md-4 product-name">
              <div class="product-name">
                <h5>{{carts.Product.name}}</h5>
              </div>
            </div>
            <div class="col-md-4 quantity">
              <label for="quantity">Quantity:</label>
              <input
                id="quantity"
                type="number"
                min="1"
                :max="carts.Product.stock"
                :value="carts.amount"
                class="form-control quantity-input"
              />
            </div>
            <div class="col-md-3 price">
              <span>Rp. {{carts.Product.price * carts.amount}}</span>
            </div>
            <div class="col-md-1 tex-danger">
              <i class="fas fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCart',
  props: ['carts']
}
</script>

<style>
</style>
