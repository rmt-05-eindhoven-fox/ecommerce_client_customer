<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h3 class="text-left"> Cart </h3>
          <div v-for="(cart, i) in cartProducts" :key="i" class="card my-3" style="max-width: 800px;">
            <div class="row no-gutters">
              <div class="col-md-5" style="background: #868e96;">
                <img :src="cart.Product.image_url" class="card-img-top h-100" alt="...">
              </div>
              <div class="col-md-7">
                <div class="card-body text-left">
                  <h5 class="card-title">{{cart.Product.name}}</h5>
                  <!-- <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p> -->
                  <span class="card-text text-danger">${{cart.Product.price}}.00
                    <span class="text-dark">
                    x
                      <a @click.prevent="addToCart(cart.Product.id, -1, cart.quantity, cart.Product.stock)" href="#" class="btn btn-sm bg-dark text-light">-</a>
                    {{cart.quantity}}
                      <a @click.prevent="addToCart(cart.Product.id, 1, cart.quantity, cart.Product.stock)" href="#" class="btn btn-sm bg-dark text-light">+</a>
                    </span>
                  </span>
                </div>
                <!-- <div class="card-body text-left">
                  <h5 class="card-title">Alice Liddel</h5>
                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                  <span class="card-text text-danger">$500.00
                    <span class="text-dark">
                    x
                      <a href="#" class="btn btn-sm bg-dark text-light">-</a>
                    1
                      <a href="#" class="btn btn-sm bg-dark text-light">+</a>
                    </span>
                  </span>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 text-left">
          <h3>Total Price</h3>
          <h3 class="text-success" style="font-family: 'Roboto', sans-serif;">${{totalPrice}}.00</h3>
          <button @click="checkoutProduct" class="btn btn-block bg-warning py-3">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cartProducts () {
      return this.$store.state.cartProducts
    },
    totalPrice () {
      let result = 0
      for (let i = 0; i < this.cartProducts.length; i++) {
        const cart = this.cartProducts[i]
        result += cart.Product.price * cart.quantity
      }
      return result
    }
  },
  methods: {
    addToCart (id, val, quantity, stock) {
      const accessToken = localStorage.getItem('access_token')
      console.log(stock)
      console.log(quantity)
      const payload = {
        id,
        accessToken,
        quantity: val
      }
      if (val === 1) {
        if (quantity >= stock) {
          console.log('cek')
          const payload = {
            id,
            accessToken,
            quantity: 0
          }
          this.$store.dispatch('addToCart', payload)
        } else {
          this.$store.dispatch('addToCart', payload)
        }
      } else {
        if (quantity > 1) {
          this.$store.dispatch('addToCart', payload)
        } else {
          this.deleteProduct(payload.id, stock)
        }
      }
    },
    deleteProduct (id, stock) {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        id,
        accessToken,
        stock
      }
      this.$store.dispatch('deleteFromCart', payload)
    },
    checkoutProduct () {
      this.$noty.success('Thanks for buying our products!')
      const accessToken = localStorage.getItem('access_token')
      for (let i = 0; i < this.cartProducts.length; i++) {
        console.log(i)
        const cart = this.cartProducts[i]
        const id = cart.Product.id
        const stock = cart.Product.stock - cart.quantity
        const payload = {
          accessToken,
          id,
          stock
        }
        this.$store.dispatch('checkoutProduct', payload)
      }
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Gugi&family=Lato&family=Roboto&display=swap');
  * {
    font-family: 'Gugi', cursive;
  }

  .content {
    margin: 8%;
    background-color: #fff;
    padding: 4rem 1rem 4rem 1rem;
    box-shadow: 0 0 5px 5px rgba(0,0,0, .05);
  }
</style>
