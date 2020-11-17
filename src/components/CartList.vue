<template>
    <div class="row">
        <div
            v-for="cart in carts"
            :key="cart.id"
            class="col-3"
        >
            <!--Card-->
            <div class="card card-cascade card-ecommerce wider">

                <!--Card image-->
                <div class="view view-cascade overlay">
                <img class="card-img-top" :src="cart.Product.image_url"
                    style="width: 250px; height: 250px; object-fit: contain:">
                </div>

                <!--Card content-->
                <div class="card-body card-body-cascade text-center">
                <h6 class="card-title"><strong><a href="">{{cart.Product.name}}</a></strong></h6>
                <div class="card-footer">
                    <span class="float-left" style="font-size: 13px">Rp {{cart.Product.price.toLocaleString(['ban', 'id'])}}</span><br>
                    <button @click="minus(cart.quantity, cart.id, cart.Product.price)" class="btn btn-primary">-</button>
                    <span class="px-3" style="font-size: 13px">{{cart.quantity}}</span>
                    <button @click="plus(cart.quantity, cart.id, cart.Product.price)" class="btn btn-primary">+</button>
                </div>

                </div>
                <!--/.Card content-->
                <button @click="cartRemove(cart.id)" class="btn btn-danger btn-block">Remove from Cart</button>
            </div>
            <!--/.Card-->
           </div>
           <div>
             TOTAL
             Rp {{total.toLocaleString(['ban', 'id'])}}
           </div>
           <div>
             <button @click="checkout" class="btn btn-primary">CHECKOUT</button>
           </div>
      </div>
</template>

<script>
export default {
  name: 'CartList',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    total () {
      return this.$store.state.total
    }
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    minus (quantity, id, price) {
      const payload = {
        quantity: quantity - 1,
        id: id,
        price: price
      }
      this.$store.dispatch('cartUpdate', payload)
        .then(({ data }) => {
          this.fetchCart()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    plus (quantity, id, price) {
      const payload = {
        quantity: quantity + 1,
        id: id,
        price: price
      }
      this.$store.dispatch('cartUpdate', payload)
        .then(({ data }) => {
          this.fetchCart()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    cartRemove (id) {
      this.$store.dispatch('cartRemove', id)
        .then(({ data }) => {
          this.fetchCart()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    checkout () {
      this.$store.dispatch('checkout')
        .then(({ data }) => {
          this.fetchCart()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  created () {
    this.fetchCart()
    // this.totalPrice()
  }
}
</script>

<style>

</style>
