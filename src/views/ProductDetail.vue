<template>
  <div class="ProductDetail">
    <v-row>
      <v-col cols="4">
        <v-img
          :src="product.image_url"
          max-width="300px"
        ></v-img>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <h1 class="product-detail-title">{{product.name}}</h1>
            <h4>Price:</h4>
            <h1>{{price}}</h1>
            <h4 v-if="product.stock" class="quantity">Quantity ({{product.stock}} availables)</h4>
            <h4 v-else style="color: red">Out of Stock</h4>
            <IntegerPlusminus
            v-model="amount" class="quantity-count" min="1" :max="product.stock" ></IntegerPlusminus>
            <v-btn
            color="#FEDBD0"
            class="add-to-cart-btn"
            @click="addToCart"
            :loading="isLoading"
            :disabled="!product.stock || loading"
            >
              <v-icon>mdi-cart-plus</v-icon> Add to cart
            </v-btn>
          </v-col>
          <v-col>
            <h1>Description</h1>
            <p>{{product.description}}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="suggestion">
      <h1>Suggestions</h1>
      <v-sheet
        class="mx-auto"
      >
        <swiper class="swiper" :options="swiperOption">
          <ProductSlideItem
            class="product-slide-item"
            v-for="product in products"
            :key="product.id"
            :product="product"
          >
          </ProductSlideItem>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import { IntegerPlusminus } from 'vue-integer-plusminus'
import { Swiper } from 'vue-awesome-swiper'
import '../../node_modules/swiper/swiper-bundle.css'
import ProductSlideItem from '../components/ProductSlideItem'

export default {
  name: 'ProductDetail',
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 40,
        grabCursor: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      amount: 1,
      isLoading: false
    }
  },
  components: {
    IntegerPlusminus,
    Swiper,
    ProductSlideItem
  },
  computed: {
    product () {
      return this.$store.state.detailProduct
    },
    price () {
      const num = Number(this.product.price).toLocaleString('id-ID')
      const price = 'Rp. ' + num + ',-'
      return price
    },
    products () {
      const products = this.$store.state.products.filter(product => product.stock > 0 && product.name !== this.product.name)
      if (products.length > 7) {
        return products.slice(0, 8)
      }
      return products
    }
  },
  methods: {
    fetchProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('productDetail', id)
      this.$router.push(`/products/detail/${id}`)
    },
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
        .then(({ data }) => {
          this.$store.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart () {
      this.isLoading = true
      const accessToken = localStorage.getItem('access_token')
      if (!accessToken) {
        this.isLoading = false
        this.$swal({
          title: 'Login is required',
          text: 'Login is required to do this action',
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'Login',
          reverseButtons: true
        })
          .then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/login')
            }
          })
      } else {
        this.isLoading = true
        const payload = {
          ProductId: this.product.id,
          amount: this.amount
        }
        this.$store.dispatch('addToCart', payload)
          .then(({ data }) => {
            this.$store.dispatch('fetchCarts')
            this.isLoading = false
            this.$vToastify.success({
              title: 'Success',
              body: 'item successfully added to the cart',
              canTimeout: true,
              duration: 2000,
              theme: 'light'
            })
          })
          .catch(err => {
            this.isLoading = false
            console.log(err)
          })
      }
    }
  },
  created () {
    this.fetchProduct()
    this.fetchProducts()
  }
}
</script>

<style>
.size {
  margin-top: 16px;
}
.product-detail-title {
  font-size: 3rem;
}

.quantity {
  margin-top: 16px;
}

.quantity-count {
  margin-top: 8px;
}

.add-to-cart-btn {
  margin-top: 28px;
}
</style>
