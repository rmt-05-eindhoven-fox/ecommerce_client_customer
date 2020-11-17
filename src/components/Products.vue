<template>
  <div class="products d-flex flex-row flex-wrap justify-content-center">
    <div class="card" style="width: 23rem;">
      <img class="card-img-top" src="../assets/kursi.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text mb-3">Himalayan Salt Lamp Touch.</p>
        <p class="card-text text-danger mb-3" style="font-size: 1.2em;">$499.00</p>
        <button type="button" >Add To Cart</button>
      </div>
    </div>
    <div class="card" style="width: 23rem;">
      <img class="card-img-top" src="../assets/kursi.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text mb-3">Himalayan Salt Lamp Touch.</p>
        <p class="card-text text-danger mb-3" style="font-size: 1.2em;">$499.00</p>
        <button type="button" >Add To Cart</button>
      </div>
    </div>
    <div class="card" style="width: 23rem;">
      <img class="card-img-top" src="../assets/kursi.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text mb-3">Himalayan Salt Lamp Touch.</p>
        <p class="card-text text-danger mb-3" style="font-size: 1.2em;">$499.00</p>
        <button type="button" >Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products'
}
</script>

<style scoped>
  .products-header p {
  }
  .card-body button {
    border: 2px solid #D9D7D9;
    color: #6d6d6d;
    padding: 10px 35px;
    border-radius: 25px;
    background-color: white;
  }
  .card-text {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9em;
  }
</style>
