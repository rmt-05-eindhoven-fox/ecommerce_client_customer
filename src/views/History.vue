<template>
  <div class="container">
    <Navbar />
    <div class="row mt-4">
      <div class="col"></div>
      <div class="col-8">
        <div
          v-if="this.userHistory.length > 0 && !this.loading"
        >
          <h1>Your Purchase History</h1>
          <HistoryCard
            v-for="entry in userHistory"
            :key="entry.id"
            :entry="entry"
          />
        </div>

        <div
          v-else-if="this.userHistory.length === 0"
        >
          <lottie-player
          class="mx-auto"
          src="https://assets6.lottiefiles.com/packages/lf20_ibd44T.json"
          background="transparent"  speed=".5" style="width: 200px; height: 200px;" loop autoplay></lottie-player>
          <h1 class="mt-3" style="text-align:center">You never purchased anything before</h1>
        </div>

        <div
          v-else
        >
          <BounceLoader class="mx-auto"/>
        </div>
      </div>
      <div class="col"></div>

    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import HistoryCard from '../components/HistoryCard'
import { BounceLoader } from '@saeris/vue-spinners'

export default {
  name: 'History',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    userHistory () {
      return this.$store.state.history
    }
  },
  components: {
    Navbar,
    HistoryCard,
    BounceLoader
  },
  created () {
    this.$store.dispatch('fetchUserHistory')
      .then(({ data }) => {
        this.$store.commit('setHistory', data)
        this.loading = false
      })
      .catch(err => {
        const payload = {
          title: 'ERROR',
          message: err.response.data.message
        }
        this.$store.commit('showError', payload)
      })
  }
}
</script>

<style>

</style>
