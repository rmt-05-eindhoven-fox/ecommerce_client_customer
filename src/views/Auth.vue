<template>
  <!-- ========================= SECTION CONTENT ========================= -->
  <section class="section-conten padding-y" style="min-height: 84vh">
    <!-- ============================ COMPONENT LOGIN   ================================= -->
    <div class="card mx-auto" style="max-width: 380px; margin-top: 100px">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Auth',
  data () {
    return {}
  }
}
</script>

<style>
</style>
