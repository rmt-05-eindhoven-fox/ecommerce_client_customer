<template>
  <div class="col-sm-6 col-md-5 col-lg-4 item">
    <div class="box" @click.prevent="changePage()">
      <img v-if="categories.name === 'Shoes'" src="../assets/shoes.png" alt="" srcset="">
      <img v-else-if="categories.name === 'Jackets'" src="../assets/jacket.png" alt="" srcset="">
      <img v-else-if="categories.name === 'Gadgets'" src="../assets/gadget.png" alt="" srcset="">
      <img v-else-if="categories.name === 'Electronics'" src="../assets/electronic.png" alt="" srcset="">
      <img v-else-if="categories.name === 'T-shirt'" src="../assets/tshirt.png" alt="" srcset="">
      <h3 class="name mt-2">{{categories.name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: ['categories'],
  methods: {
    changePage () {
      this.$router.push({ name: 'content', params: { category: this.categories.name } })
    }
  }
}
</script>
<style scoped>
.box {
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
}
img {
  width: 100px;
  height: 100px;
}

.box:hover{
  transform: scale(1.05);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
}
</style>
