<template>
  <div class="features-boxed mt">
    <div class="container">
      <div v-if="!loading" class="row justify-content-center features">
        <div>
          <h1 v-if="products[0].length === 0" class="mt-5">Oops... item is empty</h1>
        </div>
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
  data () {
    return {
      loading: true
    }
  },
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
      setTimeout(() => {
        this.loading = false
      }, 500)
      this.$store.dispatch('fetchCategories')
    }
  },
  created () {
    this.$loading(true)
    setTimeout(() => {
      this.fetchCategories()
      this.$loading(false)
    }, 500)
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
