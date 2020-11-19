<template>
  <div class="my-5 mx-5">
    <mdb-row>
      <mdb-col col="12">
        <mdb-card>
          <mdb-card-body>
            <div>
              <mdb-tbl responsive>
                <mdb-tbl-head color="dark" textWhite>
                  <tr>
                    <th colspan="2">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </mdb-tbl-head>
                <mdb-tbl-body>
                  <tr
                  v-for="product in cart"
                  :key="product.id"
                  scope="row">
                  <th scope="row">
                  <img :src="product.image_url" :alt="product.name" class="img-thumbnail" style="width: 200px">
                  </th>
                  <td>{{ product.name }}</td>
                  <td>Rp. {{ product.price }}</td>
                  <td>
                  <div class="d-flex justify-content-around">
                    <span class="d-flex flex-column justify-content-center">
                  {{product.Cart.amount}}
                    </span>
                    <span class="d-flex flex-column justify-content-center">
                  <mdb-btn
                  @click.native="plusAmount(product.id, product.Cart.amount, product.stock)"
                  color="indigo" size="sm" class="my-2 mx-0"><mdb-icon icon="plus-square" /></mdb-btn>
                  <mdb-btn
                  @click.native="minusAmount(product.id, product.Cart.amount)"
                  color="indigo" size="sm" class="my-2 mx-0"><mdb-icon icon="minus-square" /></mdb-btn>
                    </span>
                  </div>
                  </td>
                  <td>Rp. {{ product.price * product.Cart.amount }}</td>
                  <td>
                  <mdb-btn
                  @click.native="deleteProd(product.id)"
                  color="danger" size="sm" class="m-0"><mdb-icon icon="trash" /></mdb-btn>
                  </td>
                  </tr>
                </mdb-tbl-body>
              </mdb-tbl>
            </div>
          <mdb-btn color="primary">Checkout</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cart () {
      return this.$store.state.cart
    }
  },
  methods: {
    plusAmount (ProductId, amount, stock) {
      amount++
      if (amount <= stock) {
        const payload = {
          ProductId,
          amount
        }
        this.$store.dispatch('patchCart', payload)
          .then(_ => this.$store.dispatch('fetchCart'))
          .catch(({ response }) => console.log(response.data))
      }
    },
    minusAmount (ProductId, amount) {
      amount--
      const payload = {
        ProductId,
        amount
      }
      if (amount > 0) {
        this.$store.dispatch('patchCart', payload)
          .then(_ => this.$store.dispatch('fetchCart'))
          .catch(({ response }) => {
            this.$vToastify.error(response.data.error)
          })
      } else {
        this.$store.dispatch('deleteCart', payload)
          .then(_ => this.$store.dispatch('fetchCart'))
          .catch(({ response }) => {
            this.$vToastify.error(response.data.error)
          })
      }
    },
    deleteProd (ProductId) {
      const payload = {
        ProductId
      }
      this.$store.dispatch('deleteCart', payload)
        .then(_ => this.$store.dispatch('fetchCart'))
        .catch(({ response }) => console.log(response.data))
    }
  },
  beforeCreate () {
    this.$store.dispatch('fetchAllProducts')
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>

</style>
