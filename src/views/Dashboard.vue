<template>
 <div>
    <Navbar/>
    <!-- <Product/> -->

    <!-- <Laptop/> -->
   <router-view>
    </router-view>
 </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
// import Product from '../components/Product.vue'
// import Laptop from '../components/Laptop.vue'
export default {
  components: { Navbar },
  name: 'Dashboard'
}
</script>
