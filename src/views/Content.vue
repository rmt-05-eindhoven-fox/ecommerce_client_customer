<template>
  <div class="features-boxed mt">
    <div class="container">
      <div class="row justify-content-center features">
        <h1 v-if="products[0].length === 0" class="mt-5">Oops... item is empty</h1>
        <ContentProduct
          v-for="product in products[0]"
          :key="product.id"
          :products="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContentProduct from '@/components/ContentProduct.vue'
export default {
  name: 'Content',
  components: {
    ContentProduct
  },
  computed: {
    products () {
      const data = this.$store.state.categories
      const params = this.$route.params.category
      const resFetch = data.filter(category => category.name === params)
      const result = []
      resFetch.forEach(el => {
        result.push(el.Products)
      })
      return result
    }
  },
  methods: {
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style scoped>
.mt {
  padding-top: 5em;
}
.features-boxed {
  height: 100vh;
}
</style>
