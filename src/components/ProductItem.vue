<template>
  <div class="col-3">
    <div class="card product-item">
        <div class="product-image">
          <img :src="product.image_url">
        </div>
        <span class="badge badge-info item-category">{{ product.Category.name }}</span>
        <a @click.prevent="addWishlist(product.id)" class="badge item-wishlist" href="#">
          <i class="fas fa-star"></i>
        </a>
        <h5 class="card-title mt-2">{{ product.name }}</h5>
        <div class="d-flex flex-column px-3 mb-3">
          <i class="fas fa-tag mb-2"> {{ formatRupiah(product.price) }}</i>
          <i class="fas fa-box-open"> in stock ({{ product.stock }})</i>
        </div>
        <a @click.prevent="addCart(product.id)" href="#" class="btn btn-primary">Add to chart</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    addCart (ProductId) {
      if (this.isLoggedIn) {
        this.$store.dispatch('addCart', ProductId)
      } else {
        this.$router.push({ name: 'Login' })
      }
    },
    addWishlist (ProductId) {
      if (this.isLoggedIn) {
        this.$store.dispatch('addWishlist', ProductId)
      } else {
        this.$router.push({ name: 'Login' })
      }
    },
    formatRupiah (money) {
      return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
      ).format(money)
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn.status
    }
  }
}
</script>

<style>
.product-item {
  margin: 10px;
  height: 95%;
  box-shadow: 1px 1px 2px 1px rgb(211, 211, 211);
  padding: 0;
  text-align: center;
  position: relative;
}

.item-category {
  position: absolute;
}

.item-wishlist {
  position: absolute;
  right: 0;
}

.product-image {
  height: 80%;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>
