<template>
  <b-card-group deck>
    <b-card header="Products">
      <div class="d-flex flex-row flex-wrap">
        <EachProduct v-for="product in products" :key="product.id" :product="product"
        @changePage="changePage"/>
      </div>
    </b-card>
  </b-card-group>
</template>

<script>
import EachProduct from '../components/Product.vue'
export default {
  name: 'Products',
  methods: {
    changePage (string) {
      this.$emit('changePage', string)
    }
  },
  components: {
    EachProduct
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
