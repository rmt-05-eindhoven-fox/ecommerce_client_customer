<template>
  <div>
    <b-list-group-item><a href="" @click.prevent="filterbyCategory">{{ category.name }}</a></b-list-group-item>
  </div>
</template>

<script>
export default {
  name: 'EachCategory',
  props: ['category'],
  methods: {
    filterbyCategory () {
      this.$store.dispatch('filterbyCategory', this.category.id)
    }
  }
}
</script>

<style>

</style>
