<template>
<div>
  <!-- <Navbar /> -->
  <div id="app">
      <router-view/>
   </div>
</div>
</template>

<script>
// import router from './router'

export default {
  name: 'App',
  components: {
  },
  created () {
    // if (!localStorage.access_token) {
    //   router.push({ path: '/' })
    // } else {
    //   this.$store.commit('SUCCESS_LOGIN')
    // }
  }

}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }
</style>
