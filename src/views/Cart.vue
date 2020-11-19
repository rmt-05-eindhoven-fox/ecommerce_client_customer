<template>
  <div>
    <div class="container-fluid d-flex justify-content-between p-3 border bg-light">
      <h3>Your Cart</h3>
      <h3>Hi {{getUser}}</h3>
      <div>
        <button @click="change({ name: 'Content' })" class="btn btn-primary">View Product</button> |
        <button @click="logout" class="btn btn-danger">Sign out</button>
      </div>
    </div>
    <div v-if="errors.length >= 1" class="alert alert-danger text-center" role="alert">
      <p>{{ errors[0] }}</p>
    </div>
    <div v-if="alerts" class="alert alert-success text-center" role="alert">
      <p>{{ alerts[0] }}</p>
    </div>
    <table class="table table-bordered table-hover" style="margin: auto; width: 100%;">
      <thead class="thead-light">
        <th scope="col">Product Image</th>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Amount</th>
        <th scope="col">Action</th>
      </thead>
      <tbody>
        <tr v-for="cart in carts" :key="cart.id">
          <td>
            <img :src="cart.Product.image_url" alt="product-image" style="width:200px; height:200px;">
          </td>
          <td>
            <p>{{cart.Product.name}}</p>
          </td>
          <td>
            <p>Rp. {{cart.Product.price}}</p>
          </td>
          <td>
            <p>{{cart.amount}}</p>
          </td>
          <td>
            <button class="btn btn-success" @click="addAmount({ ProductId: cart.Product.id, amount: cart.Product.stock })">+</button> |
            <button class="btn btn-success" @click="decreaseAmount({ ProductId: cart.Product.id, amount: cart.Product.stock })">-</button>
            <div>
              <br>
              <button class="btn btn-warning" @click="deleteCart(cart.id)">Delete Item</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      user: localStorage.getItem('user')
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    getUser () {
      const name = this.user.split('@')
      return name[0].toLowerCase()
    },
    errors () {
      return this.$store.state.errors
    },
    alerts () {
      return this.$store.state.alerts
    },
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    change (path) {
      this.$router.push(path)
    },
    logout () {
      localStorage.clear()
      this.$store.commit('setStatus', false)
      this.$store.commit('setUser', '')
      this.$router.push({ name: 'Content' })
    },
    addAmount (data) {
      const fetch = this.carts.filter(el => el.ProductId === data.ProductId)
      if (fetch.length === 1 && fetch[0].amount < data.amount) {
        const update = {
          ProductId: data.ProductId,
          amount: fetch[0].amount + 1
        }
        this.$store.dispatch('updateCart', update)
          .then(res => {
            this.fetchCart()
          })
          .catch(err => {
            console.log(err.response.data)
          })
      } else {
        this.$store.commit('error', ['Not Enough Stock'])
        setTimeout(() => {
          this.$store.commit('error', '')
        }, 3000)
      }
    },
    decreaseAmount (data) {
      const fetch = this.carts.filter(el => el.ProductId === data.ProductId)
      if (fetch.length === 1 && fetch[0].amount > 1) {
        const update = {
          ProductId: data.ProductId,
          amount: fetch[0].amount - 1
        }
        this.$store.dispatch('updateCart', update)
          .then(res => {
            this.fetchCart()
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.$store.commit('error', ['Amount Cannot Be Lowered than 1'])
        setTimeout(() => {
          this.$store.commit('error', '')
        }, 3000)
      }
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
        .then(res => {
          this.fetchCart()
          this.$store.commit('alert', ['Item Succesfully Removed From Cart'])
          setTimeout(() => {
            this.$store.commit('alert', '')
          }, 3000)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    if (this.isLogin) {
      this.fetchCart()
    } else {
      this.$router.push({ name: 'Content' })
    }
  }
}
</script>

<style>

</style>
