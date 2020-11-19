<template>
  <div class="container-fluid mt-5">
    <div class="d-flex flex-wrap justify-content-center">
      <div class="mb-4"  v-for="handphone in categories('handphone')" :key="handphone.id">
        <div class="card mx-3" style="width: 18rem;">
          <div class="w-100" style="position: relative">
           <img
            class="product-img-top"
            :src="handphone.image_url"
            alt="dummy"
            style="height: 250px"
            font-scale="1"
          />
        </div>
        <div class="card-title mt-3 mb-0" style="border-bottom-width: 1px; border-bottom-style: solid;">
          <h2 class="text-center">{{handphone.name}}</h2>
        </div>
        <div class="card-body mb-0 pb-0 d-flex justify-content-lg-between">
          <div>
            <p class="text-secondary">
              <b> {{handphone.stock}} </b>
            </p>
          </div>
          <div>
            <p class="text-secondary">
              <b><strong>&euro; {{ handphone.price }}</strong> </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'handphone',
  components: {
  },

  //   methods: {
  //     fetchProduct () {
  //       this.$store.dispatch('fetchProduct')
  //     }
  //   },

  computed: {
    // Product (data) {
    //   return this.$store.getters.categories('handphone')
    // }
    ...mapGetters(['categories'])
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>
