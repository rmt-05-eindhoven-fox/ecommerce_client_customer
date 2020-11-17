<template>
    <div class="row">
        <div
            v-for="product in products"
            :key="product.id"
            class="col-3"
        >
            <!--Card-->
            <div class="card card-cascade card-ecommerce wider">

                <!--Card image-->
                <div class="view view-cascade overlay">
                <img class="card-img-top" :src="product.image_url"
                    style="width: 250px; height: 250px; object-fit: contain:">
                </div>

                <!--Card content-->
                <div class="card-body card-body-cascade text-center">
                <h6 class="card-title"><strong><a href="">{{product.name}}</a></strong></h6>
                <div class="card-footer">
                    <span class="float-left" style="font-size: 13px">Rp {{product.price.toLocaleString(['ban', 'id'])}}</span><br>
                    <span class="float-left" style="font-size: 13px">{{product.stock}} left</span>

                </div>

                </div>
                <!--/.Card content-->
                <button @click="addCart(product.id)" class="btn btn-primary btn-block">Add to Cart</button>
            </div>
            <!--/.Card-->
           </div>
      </div>
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

</style>
