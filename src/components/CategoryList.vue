<template>
  <v-list-item @click="changePage">
    <v-list-item-content>
      <v-list-item-title>
        {{category.name}}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'CategoryList',
  props: ['category'],
  methods: {
    fetchProducts () {
      this.$store.commit('loadingProduct', true)
      const payload = this.category.id
      this.$store.dispatch('fetchCategoryProducts', payload)
    },
    changePage () {
      this.fetchProducts()
      const payload = this.category.name
      this.$store.commit('changeCurrentCategory', payload)
      this.$router.push({ name: 'ProductCategory', params: { id: this.category.id } })
    }
  }
}
</script>

<style>

</style>
