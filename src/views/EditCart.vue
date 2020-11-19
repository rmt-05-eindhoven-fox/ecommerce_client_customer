<template>
  <div class="container">
      <div class="d-flex justify-content-center">
          <form @submit.prevent="submitEdit">
                    <h1>Edit Quantity</h1> <br>
              <input type="number" v-model="selectedData.quantity"> <br><br>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EditPage',
  computed: {
    selectedData: {
      get () {
        return this.$store.state.selectedData
      }
    }
  },
  methods: {
    submitEdit () {
      this.$store.dispatch('editData', this.selectedData)
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('fetchData', id)
  }
}
</script>

<style>

</style>
