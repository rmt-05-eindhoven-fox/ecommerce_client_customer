<template>
  <div class="container">
    <NavbarHome/>
      <div class="row">
           <div class="col-6 animated slideInDown" style="min-height: 100%">
    <img src="../assets/undraw_add_to_cart_vkjp.svg"  alt="login-page" style="margin-right:600px; width:400px;height:400px;">
       </div>
          <div class="col-6 animated slideInDown">
          <form @submit.prevent ="createProduct">
              <div class="form-group row">
                <label for="inputProductName" class="col-sm-2 col-form-label">Product Name</label>
                <div class="col-sm-10">
                  <input type="text" placeholder="Enter Your Product Name" v-model="name" class="form-control" id="inputProductName">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputImageUrl" class="col-sm-2 col-form-label">Image</label>
                <div class="col-sm-10">
                  <input type="text" v-model="image_url" placeholder="Enter the URL for your product image" class="form-control" id="inputImageUrl">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputCategory" class="col-sm-2 col-form-label">Category</label>
                 <div class="col-sm-10">
                  <select id="inputCategory" class="form-control" v-model="category" style="width:100px;">
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
                <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                  <input type="number" placeholder="Enter the price" v-model="price" class="form-control" id="inputPrice" style="width:150px;">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputStock" class="col-sm-2 col-form-label">Stock</label>
                <div class="col-sm-10">
                  <input type="number" placeholder="Enter the stock" v-model="stock" class="form-control" id="inputStock" style="width:100px;">
                </div>
              </div>
              <button type="submit" class="btn btn-secondary mt-3" style="width: 200px"><i class="fas fa-save"></i> Save New Product</button>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue'
export default {
  name: 'CreateProductForm',
  components: {
    NavbarHome
  },
  data () {
    return {
      name: '',
      category: '',
      image_url: '',
      stock: '',
      price: ''
    }
  },
  methods: {
    createProduct () {
      const payload = {
        name: this.name,
        category: this.category,
        image_url: this.image_url,
        stock: this.stock,
        price: this.price
      }
      this.$store.dispatch('createProduct', payload)
    }
  }
}
</script>

<style>
</style>
