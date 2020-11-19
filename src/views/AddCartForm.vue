<template>
  <div class="card bg-success">
    <h3 class="m-3">Add Cart Form</h3>
    <div class="container m-5">
      <div class="d-flex justify-content-center align-items-center row">
        <div class="col-4">
          <img :src="productData.image_url" :alt="productData.name" width="210" height="250" class="card">
        </div>
        <div class="col-4 bg-warning card">
          <!-- <div v-if="errorMessage.length > 0">
            <h5 class="card">Customer is {{ errorMessage }}</h5>
          </div> -->
          <p>Price: {{ productData.price }}</p>
          <p>Stock: {{ productData.stock }}</p>
          <div>
            <span><button @click="decrement" class="btn btn-light btn-sm font-weight-bold">-</button></span>
            <span><input v-model="qty" type="number" min="0" :max="productData.stock"></span>
            <span><button @click="increment" class="btn btn-light btn-sm font-weight-bold">+</button></span>
          </div>
          <div class="mt-4">
            <span>
              <button class="btn btn-primary mr-4 col-3" @click="addCart">Add</button>
              <button class="m-1 btn btn-secondary col-3" @click="backToProducts">Cancel</button>
            </span>
          </div>
        </div>
        <!-- <div class="col-12 mt-5">
          <button class="m-1 btn btn-secondary col-3" @click="backToProducts">Back</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCartForm',
  data () {
    return {
      qty: 0
    }
  },
  methods: {
    increment () {
      if (this.qty < this.productData.stock) {
        this.qty += 1
      }
    },
    decrement () {
      if (this.qty > 0) {
        this.qty -= 1
      }
    },
    backToProducts () {
      this.$router.push('/products')
    },
    addCart () {
      const payload = {
        qty: this.qty,
        ProductId: this.productData.id
      }
      this.$store.dispatch('addCart', payload)
        .then(({ data }) => {
          // state.productData = data
          console.log(data)
          this.$router.push('/carts')
        })
        .catch(({ response }) => {
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.data)
          console.log(response.data.msg)
        })
    }
    // changeChild (path) {
    //   const id = this.$route.params.id
    //   this.$router.push(`/detail/${id}/${path}`)
    // }
  },
  computed: {
    productData () {
      return this.$store.state.productStore.productData
    }
  }
  // created () {
  //   this.fetchOneProduct()
  // }
}
</script>

<style scoped>
  input {
    width: 40px;
    text-align: center;
  }
  span {
    margin: 3px;
  }
</style>
