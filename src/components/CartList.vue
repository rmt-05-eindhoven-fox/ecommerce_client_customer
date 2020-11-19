<template>
  <section class="animate__animated animate__fadeIn">

    <img v-if="isLoading === true" src="../assets/animation_500_khoa45kz.gif" class="animate__animated animate__fadeIn" style="position: fixed; z-index: 999; top:0; left:0; right:0; bottom:0; margin:auto;" height="300">
    <section class="section-pagetop bg">
      <div class="container">
          <h2 class="title-page text-blue">Shopping cart</h2>
      </div>
    </section>

    <section class="section-content padding-y">
      <div class="container">

      <div class="row">
          <main class="col-md-9">
      <div class="card mb-5">

      <table class="table table-borderless table-shopping-cart">
        <thead class="text-muted">
          <tr class="small text-uppercase">
          <th scope="col">Product</th>
          <th scope="col" width="120">Quantity</th>
          <th scope="col" width="120">Price</th>
          <th scope="col" class="text-right" width="200"> </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="cart in carts"
            :key="cart.id"
          >
            <td>
              <div class="itemside">
                <div class="aside">
                  <img :src="cart.Product.image_url" class="img-sm" >
                </div>

                <div class="info">
                  <div href="" class="title text-dark">{{cart.Product.name}}</div>
                </div>
            </div>
          </td>
          <td>
            <button v-if="cart.quantity <= 1" @click.prevent="minus(cart.quantity, cart.id, cart.Product.price)" class="text-decoration-none" disabled style="border: none; background: none; padding: 5px"   href=""><i class="fas fa-minus"></i></button>
            <button v-else @click.prevent="minus(cart.quantity, cart.id, cart.Product.price)" class="text-decoration-none" style="border: none; background: none; padding: 5px; color: blue" href=""><i class="fas fa-minus"></i></button>

            <span class="px-3" style="font-size: 13px">{{cart.quantity}}</span>

            <button v-if="cart.quantity >= cart.Product.stock" @click.prevent="plus(cart.quantity, cart.id, cart.Product.price)" disabled style="border: none; background; none: padding: 5px"  href=""><i  class="fas fa-plus"></i></button>
            <button v-else @click.prevent="plus(cart.quantity, cart.id, cart.Product.price)" style="border: none; background: none; padding: 5px; color: blue" href=""><i  class="fas fa-plus"></i></button>
          </td>
          <td>
            <div class="price-wrap">
                <var class="price" style="font-size: 15px">Rp {{(cart.Product.price * cart.quantity).toLocaleString(['ban', 'id'])}}</var>
                <br>
                <small class="text-muted" style="font-size: 12px">
                 Rp {{cart.Product.price.toLocaleString(['ban', 'id'])}} each
                </small>
            </div>
          </td>
          <td class="text-right">
          <a @click.prevent="cartRemove(cart.id)" href="" class="btn btn-light"> Remove</a>
          </td>
          </tr>
        </tbody>
      </table>

      <div class="card-body border-top">
        <a @click.prevent="checkout" href="#" class="btn btn-primary float-md-right"> Checkout <i class="fa fa-chevron-right"></i> </a>
        <a @click.prevent="changePage('')" href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
      </div>
    </div> <!-- card.// -->

      </main> <!-- col.// -->
      <aside class="col-md-3">

        <div class="card">
          <div class="card-body">
            <dl class="dlist-align">
              <dt>Total:</dt>
              <dd class="text-right  h5"><strong>Rp {{total.toLocaleString(['ban', 'id'])}}</strong></dd>
            </dl>
            <hr>
            <p class="text-center mb-3">
                <img src="../assets/download.jpg" height="20">
            </p>

          </div>
        </div>
      </aside>
    </div>

    </div>
    </section>

  </section>
</template>

<script>
import Swal from 'sweetalert2'

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
    },
    isLoading () {
      return this.$store.state.isLoading
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
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: (err.response.data.msg)
          })
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
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: (err.response.data.msg)
          })
        })
    },
    cartRemove (id) {
      this.$store.dispatch('cartRemove', id)
        .then(({ data }) => {
          this.fetchCart()
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Product has been removed'
          })
        })
        .catch(err => {
          console.log(err.response.data)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: (err.response.data.msg)
          })
        })
    },
    checkout () {
      this.$store.dispatch('checkout')
        .then(({ data }) => {
          this.fetchCart()
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Checkout succesfully'
          })
        })
        .catch(err => {
          console.log(err.response.data)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: (err.response.data.msg)
          })
        })
    },
    changePage (path) {
      this.$store.dispatch('changePage', path)
    }
  },
  created () {
    this.fetchCart()
  }
}
</script>

<style>
  .img-sm {
      width: 80px;
      height: 80px;
  }
  .img-xs, .img-sm, .img-md, .img-lg {
    object-fit: cover;
    flex-shrink: 0;
    flex-grow: 0;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  .itemside .info {
    padding-left: 15px;
    padding-right: 7px;
  }
  .itemside .title {
    display: block;
    margin-bottom: 5px;
  }
  .text-dark {
    color: #212529 !important;
  }
  .itemside .aside {
    position: relative;
    flex-shrink: 0;
  }
  .itemside {
    position: relative;
    display: flex;
    width: 100%;
  }

</style>
