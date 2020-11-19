<template>
  <div>
      <NavbarHome/>
      <Loading v-if="$store.state.loadingStatus"/>
       <div class="d-flex mx-auto animated slideInDown" style="min-height: 100%">
    <img src="../assets/ddf7620b1a1af96d24f1413bb336f096.gif"  alt="login-page" style="margin-left:600px; width:400px;height:400px;">
       </div>
          <div class="container animated slideInDown" v-if=" activity == 'showBanner'" >
        <table class="table table-hover" style="font-size: 1.2em">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Id Banner</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          <BannerCard v-for="(banner,index) in data" :key="index"
          :itemData="banner" :number="index"  @removeData="removeItem"></BannerCard>
          </tbody>
        </table>
        </div>
          <div v-else-if="activity=='createBanner'">
            <CreateBannerForm> </CreateBannerForm>
          </div>

    </div>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue'
import BannerCard from '../components/BannerCard.vue'
import CreateBannerForm from '../components/CreateBannerForm.vue'
import Loading from '../components/Loading.vue'
export default {
  name: 'Banners',
  components: {
    NavbarHome,
    BannerCard,
    CreateBannerForm,
    Loading
  },
  data () {
    return {
      activity: ''
    }
  },
  computed: {
    data () {
      return this.$store.state.banners
    }
  },
  methods: {
    fetchBanners () {
      this.activity = 'showBanner'
      this.$store.dispatch('fetchBanners')
    },
    removeItem (id) {
      this.$store.state.banners = this.$store.state.banners.filter(banner => banner.id !== id)
    },
    goToCreateBanner () {
      this.activity = 'createBanner'
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>
</style>