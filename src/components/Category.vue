<template>
  <div>
    <b-card-group deck>
      <b-card header="Category">
        <b-list-group>
          <b-list-group-item href="" @click="fetchProducts">All</b-list-group-item>
          <EachCategory v-for="category in categories" :key="category.id" :category="category"/>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import EachCategory from './EachCategory.vue'
export default {
  name: 'Category',
  components: {
    EachCategory
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    fetchProducts () {
      this.$emit('fetchProducts')
    }
  }
}
</script>

<style>

</style>
