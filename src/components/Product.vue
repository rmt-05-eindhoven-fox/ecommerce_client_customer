<template>
    <div class="col-3 mt-5">
      <div v-if="product.stock > 0" class="card shadow shadow-lg" style="width: 18rem; height: 100%">
        <img class="card-img-top" :src="product.image_url" alt="Gaming image" style="width:100%" height="350px">
        <div class="card-body">
          <h6 class="card-title" style="font-family: roboto; font-weight: bold">{{product.Category.name}}</h6>
          <h5 class="card-title" style="font-family: roboto">{{product.name}}</h5>
          <p class="card-text text-info" style="font-family: verdana; font-weight: bold">Rp {{product.price}}</p>
          <p class="text-success">Ready Stock: <span class="text-dark" style="font-weight: bold">{{product.stock}} pcs</span> </p>
          <a @click="addCart(product.id)" class="btn btn-primary"><span class="fas fa-shopping-cart"> Add to cart </span></a>
        </div>
      </div>
      <div v-else-if="product.stock === 0" class="card shadow shadow-lg" style="width: 18rem; height: 100%; opacity: 0.6">
        <img class="card-img-top" :src="product.image_url" alt="Gaming image" style="width:100%" height="350px">
        <div class="card-body">
         <h6 class="card-title" style="font-family: roboto; font-weight: bold">{{product.Category.name}}</h6>
          <h5 class="card-title" style="font-family: roboto">{{product.name}}</h5>
          <p class="card-text text-info" style="font-family: verdana; font-weight: bold">Rp {{product.price}}</p>
          <p class="text-danger" style="font-color: red">Out of stock</p>
          <a id="disabled" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    addCart(productId) {
      const id = +productId;
      const payload = {
        token: localStorage.getItem("token"),
        ProductId: +productId
      }
      this.$store.dispatch('addCart', payload)
      .then(({
        data
      }) => {
         Swal.fire({
            icon: "success",
            title: `success`,
            text: data.msg
          });
        this.$router.push({name: 'Home'})
      })
      .catch(err => {
        Swal.fire({
            icon: "error",
            title: "error",
            text: err.response.data.msg,
        });
      })
    }
  },
}
</script>

<style>
#disabled:hover {
  cursor: no-drop;
}
</style>