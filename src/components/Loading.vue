<template>
  <div v-if="loading" class="page-loader-wrapper" style="display: block; opacity: 0.8;">
    <div class="d-flex justify-content-center">
      <lottie-player class="loading" src="https://assets7.lottiefiles.com/datafiles/nT4vnUFY9yay7QI/data.json" mode="bounce" background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  computed: {
    loading () {
      return this.$store.state.loading || false
    }
  }
}
</script>

<style scoped>

  .page-loader-wrapper {
    z-index: 99999999;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #eee;
    overflow: hidden;
    text-align: center;
  }
  .page-loader-wrapper p {
    font-size: 13px;
    font-weight: 700;
    color: #777;
    margin-top: 10px;
  }
  .page-loader-wrapper .loader {
    position: relative;
    top: calc(40% - 30px);
  }
  .loading {
    vertical-align: middle;
    width: 100%;
    display: inline-block;
    height: 50%;
    position: absolute;
    top: 0;
    bottom: 0%;
    margin: auto;
  }
</style>
