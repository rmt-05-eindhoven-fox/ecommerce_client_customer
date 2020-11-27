<template>
  <div class="home mt" >
    <Caraousel/>
    <Category/>
  </div>
</template>

<script>
import Caraousel from '@/components/Caraousel.vue'
import Category from '@/components/Category.vue'

export default {
  name: 'Home',
  components: {
    Caraousel,
    Category
  }
}
</script>

<style scoped>
.mt {
  padding-top: 6em;
}
</style>
