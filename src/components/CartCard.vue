<template>
  <v-card>
    <v-row align-content="center">
      <v-col cols="3">
        <v-img
          :src="cart.Product.image_url"
        ></v-img>
      </v-col>
      <v-col>
        <h2>{{ cart.Product.name }}</h2>
        <div class="d-flex align-center">
          <v-btn
          :loading="isLoading"
          :disabled="loading"
          @click="minusCart"
          icon>
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <h3>{{this.cart.amount}}</h3>
          <v-btn
          :loading="isLoading"
          :disabled="loading"
          @click="plusCart"
          icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn
          :loading="isLoading"
          :disabled="loading"
          @click="deleteCart"
          icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col align-self="center" cols="4">
        <h3>{{totalPrice}}</h3>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['cart'],
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    totalPrice () {
      const total = this.cart.amount * this.cart.Product.price
      const formatted = total.toLocaleString('id-ID')
      const price = 'Rp. ' + formatted + ',-'
      return price
    }
  },
  methods: {
    plusCart () {
      this.isLoading = true
      const payload = {
        id: this.cart.id,
        amount: this.cart.amount += 1,
        ProductId: this.cart.Product.id
      }
      this.$store.dispatch('updateCart', payload)
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
          this.isLoading = false
        })
        .catch(err => {
          this.isLoading = false
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.msg
          })
          this.cart.amount -= 1
        })
    },
    minusCart () {
      const amountNow = this.cart.amount -= 1
      if (amountNow === 0) {
        this.deleteCart()
      } else {
        this.isLoading = true
        const payload = {
          id: this.cart.id,
          amount: amountNow,
          ProductId: this.cart.Product.id
        }
        this.$store.dispatch('updateCart', payload)
          .then(({ data }) => {
            this.$store.dispatch('fetchCarts')
            this.isLoading = false
          })
          .catch(err => {
            this.isLoading = false
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.msg
            })
            this.cart.amount += 1
          })
      }
    },
    deleteCart () {
      this.isLoading = true
      const payload = {
        id: this.cart.id
      }
      this.$store.dispatch('deleteCart', payload)
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
          this.isLoading = false
        })
        .catch(err => {
          this.isLoading = false
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.msg
          })
        })
    }
  }
}
</script>

<style>

</style>
