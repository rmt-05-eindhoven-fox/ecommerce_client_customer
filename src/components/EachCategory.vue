<template>
  <div>
    <b-list-group-item><a href="">{{ category.name }}</a></b-list-group-item>
  </div>
</template>

<script>
export default {
  name: 'EachCategory',
  props: ['category'],
  methods: {
    // filterbyCategory () {
    //   const filteredProduct = this.$store.state.products.map(el => {
    //     if (el.CategoryId === this.category.id) {
    //       return el
    //     }
    //   })
    //   console.log(filteredProduct)
    //   this.$store.state.products = filteredProduct
    // }
  }
}
</script>

<style>

</style>
