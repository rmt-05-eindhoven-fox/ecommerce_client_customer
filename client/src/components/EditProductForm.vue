<template>
  <div class="container">
    <NavbarHome/>
      <div class="row">
          <div class="animated slideInDown" style="min-height: 100%">
    <img src="../assets/undraw_order_confirmed_aaw7.svg"  alt="login-page" style="margin-left:450px; width:400px;height:400px;">
       </div>
          <div class="col-6 animated slideInDown">


            <img :src="selectedData.image_url" class="card-img-top shadow-lg" alt="Login Image"
              style="width: auto; height:50%;">
          </div>
          <div class="col-6 animated slideInDown">

           <form @submit.prevent ="editProduct">
              <div class="form-group row">
                <label for="inputProductName" class="col-sm-2 col-form-label">Product Name</label>
                <div class="col-sm-10">
                  <input type="text" v-model="selectedData.name" class="form-control" id="inputProductName">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputCategory" class="col-sm-2 col-form-label">Category</label>
                  <div class="col-sm-10">
                    <select id="inputCategory" class="form-control" v-model="selectedData.category" style="width:100px;">
                      <option selected value="Unknown">Choose...</option>
                      <option value="Game Console">Game Console</option>
                    <option value="Smartphones and Tablets">Smartphones and Tablets</option>
                    <option value="Home Electronics">Home Electronics</option>
                    <option value="Gadget Accessories">Gadget Accessories</option>
                    <option value="Wearable Devices">Wearable Devices</option>
                    </select>
                  </div>
              </div>
              <div class="form-group row">
                <label for="inputImageUrl" class="col-sm-2 col-form-label">Image</label>
                <div class="col-sm-10">
                  <input type="text" v-model="selectedData.image_url" class="form-control" id="inputImageUrl">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                  <input type="number" v-model="selectedData.price" class="form-control" id="inputPrice" style="width:150px;">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputStock" class="col-sm-2 col-form-label">Stock</label>
                <div class="col-sm-10">
                  <input type="number" v-model="selectedData.stock" class="form-control" id="inputStock" style="width:100px;">
                </div>
              </div>
              <button type="submit" class="btn btn-secondary mt-3" style="width: 200px"><i class="fas fa-edit"></i> Update</button>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue'
export default {
  name: 'EditProductForm',
  data () {
    return {
      selected: {}
    }
  },
  components: {
    NavbarHome
  },
  computed: {
    selectedData: {
      get () {
        return this.$store.state.selectedData
      },
      set (newValue) {
        console.log(newValue)
      }
    }
  },
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct', this.selectedData)
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('getProduct', id)
  }
}
</script>

<style>
</style>
