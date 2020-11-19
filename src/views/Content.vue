<template>
  <div>
    <div class="container-fluid d-flex justify-content-between p-3 border bg-light">
      <h3>E-COMMERCE</h3>
      <h3 v-if="getUser">Hi {{getUser}}</h3>
      <div v-if="isLogin">
        <button @click="change('/cart')" class="btn btn-primary">View Cart</button> |
        <button @click="logout" class="btn btn-danger">Sign out</button>
      </div>
      <div v-else>
        <button @click="change('/landing')" class="btn btn-primary">Have an Account?</button>
      </div>
    </div>
      <table class="table table-bordered table-hover" style="margin: auto; width: 100%;">
        <thead class="thead-light">
          <th scope="col">Product Image</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Action</th>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <img :src="product.image_url" alt="product-image" style="width:200px; height:200px;">
            </td>
            <td>
              <p>{{product.name}}</p>
            </td>
            <td>
              <p>Rp. {{product.price}}</p>
            </td>
            <td>
              <p>{{product.stock}}</p>
            </td>
            <td>
              <button class="btn btn-success" @click="addCart({ ProductId: product.id, amount: product.stock })">Add to Cart</button>
              <div v-if="errors && errors[1] === product.id" class="alert alert-danger text-center" role="alert">
                <p>{{ errors[0] }}</p>
              </div>
              <div v-if="alerts && alerts[1] === product.id" class="alert alert-success text-center" role="alert">
                <p>{{ alerts[0] }}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {}
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    getUser () {
      const name = this.$store.state.user.split('@')
      return name[0].toLowerCase()
    },
    carts () {
      return this.$store.state.carts
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
    fetchProduct () {
      this.$store.dispatch('fetchAllProduct')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('setStatus', false)
      this.$store.commit('setUser', '')
    },
    addCart (data) {
      if (this.isLogin) {
        this.fetchCart()
        const add = {
          ProductId: data.ProductId,
          amount: 1
        }
        if (this.carts.length === 0) {
          this.$store.dispatch('addCart', add)
            .then(res => {
              this.fetchCart()
              this.$store.commit('alert', ['Item Added to Cart', data.ProductId])
              setTimeout(() => {
                this.$store.commit('alert', '')
              }, 3000)
            })
            .catch(err => {
              console.log(err.response)
            })
        } else {
          const fetch = this.carts.filter(el => el.ProductId === data.ProductId)
          if (fetch.length === 1) {
            if (fetch[0].amount < data.amount) {
              const update = {
                ProductId: data.ProductId,
                amount: fetch[0].amount + 1
              }
              this.$store.dispatch('updateCart', update)
                .then(res => {
                  this.fetchCart()
                  this.$store.commit('alert', ['Item Added to Cart', data.ProductId])
                  setTimeout(() => {
                    this.$store.commit('alert', '')
                  }, 3000)
                })
                .catch(err => {
                  console.log(err)
                })
            } else {
              this.$store.commit('error', ['Not Enough Stock', data.ProductId])
              setTimeout(() => {
                this.$store.commit('error', '')
              }, 3000)
            }
          } else {
            this.$store.dispatch('addCart', add)
              .then(res => {
                this.fetchCart()
                this.$store.commit('alert', ['Item Added to Cart', data.ProductId])
                setTimeout(() => {
                  this.$store.commit('alert', '')
                }, 3000)
              })
              .catch(err => {
                console.log(err)
              })
          }
        }
      } else {
        this.$store.commit('error', ['Need To Login First'])
        setTimeout(() => {
          this.$store.commit('error', '')
        }, 3000)
        this.$router.push('/landing')
      }
    },
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    change (path) {
      this.$router.push(path)
    }
  },
  created () {
    this.fetchProduct()
    if (localStorage.getItem('token')) {
      this.$store.commit('setUser', localStorage.getItem('user'))
      this.$store.commit('setStatus', true)
    }
  }
}
</script>
