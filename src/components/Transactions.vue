<template>
  <div>
    <h2> Transactions </h2>
    <table class="table">
      <thead>
          <tr>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
          <th scope="row">{{transaction.Product.updatedAt}}</th>
          <td>{{transaction.Product.name}}</td>
          <td>{{transaction.quantity}}</td>
          <td>${{transaction.Product.price * transaction.quantity}}.00</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Transactions',
  computed: {
    cartProducts () {
      return this.$store.state.cartProducts
    },
    totalPrice () {
      let result = 0
      for (let i = 0; i < this.transactions.length; i++) {
        const cart = this.transactions[i]
        result += cart.Product.price * cart.quantity
      }
      return result
    },
    transactions () {
      return this.$store.state.transactions
    }
  },
  methods: {
    showTransactions () {
      const accessToken = localStorage.getItem('access_token')
      this.$store.dispatch('fetchTransactions', accessToken)
    }
  },
  mounted () {
    this.showTransactions()
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
