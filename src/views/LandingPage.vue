<template>
  <router-view />
</template>

<script>
export default {
  name: 'Login',
  beforeCreate () {
    this.$store.dispatch('changeBgColor', '#FFBE21')
  },
  computed: {
    bgColor () {
      return this.$store.state.bgColor
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Gugi&family=Lato&family=Poppins&family=Roboto&display=swap');
  * {
    font-family: 'Poppins', sans-serif;
  }
  .content {
    margin: 8%;
    background-color: #fff;
    padding: 4rem 1rem 4rem 1rem;
    box-shadow: 0 0 5px 5px rgba(0,0,0, .05);
  }
  .signin-text {
    font-style: normal;
    font-weight: 600 !important;
  }
  .form-control {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-style: solid !important;
    border: 0;
    border-bottom: #FFBE21;
    padding: 0px !important;
    color: #495057;
    height: auto;
    border-radius: 0;
    background-color: #fff;
    background-clip: padding-box;
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #495057;
    outline: 0;
    box-shadow: none;
  }
  form button {
    border: 0;
  }
</style>
