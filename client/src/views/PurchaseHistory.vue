<template>
  <div class="history">
    <h1 class="history-page-title">Your Purchase History</h1>
    <div class="history-list">
      <HistoryItem
        v-for="history in histories"
        :key="history.id"
        :history="history"
      />
    </div>
  </div>
</template>

<script>
import HistoryItem from '@/components/HistoryItem.vue'
export default {
  name: 'PurchaseHistory',
  components: {
    HistoryItem
  },
  computed: {
    histories () {
      return this.$store.state.histories
    }
  },
  methods: {
    showHistory () {
      this.$store.dispatch('showHistory')
    }
  },
  created () {
    this.showHistory()
  }
}
</script>
