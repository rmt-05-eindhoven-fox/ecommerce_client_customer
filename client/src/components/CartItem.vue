<template>
  <div class="cart-item">
    <div
      class="cart-card uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
      uk-grid
    >
      <div class="uk-card-media-left uk-cover-container">
        <img
          :src="cart.Product.image_url"
          alt=""
          style="text-align: center; width: 150px; height: 200px; margin: 40px"
        />
      </div>
      <div>
        <div class="cart-item-body uk-card-body">
          <h3 class="uk-card-title">{{ cart.Product.name }}</h3>
          <p style="margin-top: -20px">Rp. {{ cart.Product.price }}</p>
          <div class="quantity-input">
            <p style="margin-top: 9%">Quantity:</p>
            <button
              @click="decreaseQty"
              class="minus"
              uk-icon="icon: minus"
            ></button>
            <p>{{ cart.quantity }}</p>
            <button
              @click="increaseQty"
              class="plus"
              uk-icon="icon: plus"
            ></button>
          </div>
          <button @click="removeCart" class="remove-btn" uk-icon="icon: trash">
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['cart'],
  data () {
    return {}
  },
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    },
    removeCart () {
      const payload = {
        id: this.cart.id
      }
      this.$store
        .dispatch('removeCart', payload)
        .then(({ data }) => {
          console.log('remove product item from cart succeed')
          this.fetchCarts()
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    decreaseQty () {
      const payload = {
        id: this.cart.id,
        quantity: this.cart.quantity - 1
      }

      this.$store
        .dispatch('updateCart', payload)
        .then(({ data }) => {
          if (data.quantity === 0) {
            this.$store
              .dispatch('removeCart', payload)
              .then(({ data }) => {
                console.log('remove product item from cart succeed')
                this.fetchCarts()
              })
              .catch((err) => {
                console.log(err.response)
              })
          }
          console.log('update cart succeed')
          this.fetchCarts()
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    increaseQty () {
      const payload = {
        id: this.cart.id,
        quantity: this.cart.quantity + 1
      }
      this.$store
        .dispatch('updateCart', payload)
        .then(({ data }) => {
          console.log('update cart succeed')
          this.fetchCarts()
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  created () {
    this.fetchCarts()
  }
}
</script>
