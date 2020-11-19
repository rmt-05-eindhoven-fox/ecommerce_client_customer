<template>
  <div>
    <b-modal
    :hide-footer="true"
    :hide-header="true"
    v-model="error"
    @change="close"
    >
      <div v-for="(err, i) in errorMessage" :key="i" class="text-danger font-weight-bolder text-sm-center border mb-1 rounded border-danger pb-1">{{ err }}</div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    close () {
      this.$store.commit('CLOSE_ERROR')
    }
  },
  computed: mapState(['error', 'errorMessage'])
}
</script>

<style>

</style>
