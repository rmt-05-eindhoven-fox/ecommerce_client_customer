<template>
  <div>
    <NavbarMain />
    <div class="container">
      <div class="row">
        <!-- CARD CART -->
        <div class="col-xs-12 col-lg-8">
          <div class="card card-on-cart">
            <div class="card-body">
              <div class="row">
                <div class="col-4">
                  <img src="bg-login.jpg" alt="" class="card-img" />
                </div>
                <div class="col-8">
                  <div
                    class="card-header d-flex justify-content-between align-items-baseline p-0"
                  >
                    <h5>Product name</h5>
                    <button class="btn btn-danger">
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </div>
                  <small class="text-muted">Rp 30.000.000</small>
                  <form action="" class="mt-3">
                    <label for="qty">Quantity :</label>
                    <input
                      type="number"
                      class="form-control"
                      id="qty"
                      min="1"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarMain from '@/components/NavbarMain.vue'
export default {
  name: 'Cart',
  components: {
    NavbarMain
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top : 100px;

  .card-header{
   background-color : #FFFFFF ;
  }
}
</style>
