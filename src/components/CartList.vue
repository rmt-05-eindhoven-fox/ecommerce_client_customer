<template>
    <div class="col-4 mt-5">
      <div class="card shadow shadow-lg" style="width: 20rem; height: 100%">
        <img class="card-img-top" :src="item.Product.image_url" alt="Gaming image" style="width:100%" height="350px">
        <div class="card-body">
          <h5 class="card-title" style="font-family: roboto; font-weight: bold">{{item.Product.name}}</h5>
          <p class="card-text text-info" style="font-family: verdana; font-weight: bold">Rp {{item.Product.price}} / pcs</p>
          <p class="text-success">Quantity: <span class="text-dark" style="font-weight: bold">{{item.quantity}} pcs</span> </p>
          <a  @click="updateCart('min', item.id)" class="btn btn-primary mr-3"><span class="fas fa-minus"> </span></a>
          <a @click="updateCart('plus', item.id)" class="btn btn-primary mr-3"><span class="fas fa-plus"> </span></a>
          <a @click="deleteCart(item.id)" class="btn btn-danger"><span class="fas fa-trash"> </span></a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CartList',
  props: ['item'],
  methods: {
    updateCart(marking, cartId) {
      const payload = {
        token: localStorage.getItem("token"),
        marking: marking,
        cartId: cartId
      }
      this.$store.dispatch('updateCart', payload)
      .then(({
        data
      }) => {
        Swal.fire({
            icon: "success",
            title: `success`,
            text: data.msg
          });
        this.$router.push({name: 'Cart'})
      })
      .catch(err => {
        Swal.fire({
            icon: "error",
            title: "error",
            text: err.response.data.msg,
        });
      })
    },
    deleteCart(cartId) {
      const payload = {
        token: localStorage.getItem("token"),
        cartId: cartId
      }
      this.$store.dispatch('deleteCart', payload)
      .then(({
        data
      }) => {
        Swal.fire({
            icon: "success",
            title: `success`,
            text: data.msg
          });
        this.$router.push({name: 'Cart'})
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