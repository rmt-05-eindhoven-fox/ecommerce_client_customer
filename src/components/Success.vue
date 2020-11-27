<template>
  <div>
    <b-modal
    :hide-footer="true"
    :hide-header="true"
    v-model="success"
    @change="close"
    >
      <div v-for="(succ, i) in successMessage" :key="i" class="text-success font-weight-bolder text-sm-center border mb-1 rounded border-success pb-1">{{ succ }}</div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    close () {
      this.$store.commit('CLOSE_SUCCESS')
    }
  },
  computed: mapState(['success', 'successMessage'])
}
</script>

<style>

</style>
