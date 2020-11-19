<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="category-card"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
      max-width="220"
      color="#FEDBD0"
      @click.native = 'changePage'
    >
      <v-img
        :src="category.cover_image_url"
        height="220px"
        width="220px"
      >
      </v-img>
      <v-card-title
      >
        {{ category.name }}
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'CategoryCard',
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
