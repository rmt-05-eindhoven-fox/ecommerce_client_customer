<template>
  <div id="app">
    <div id="sidenav">
      <img
        src="./assets/duck.jpg"
        alt="logo"
        style="width: 100px; margin-top: 15px"
      />
      <div class="nav-links">
        <router-link
          class="nav-icon"
          to="/"
          uk-icon="icon: home; ratio: 1.5"
          uk-tooltip="title: Home; pos: right; delay: 150"
        ></router-link>
        <router-link
          class="nav-icon"
          to="/cart"
          uk-icon="icon: cart; ratio: 1.5"
          uk-tooltip="title: Cart; pos: right; delay: 150"
        ></router-link>
        <router-link
          v-if="loginStatus"
          class="nav-icon"
          to="/purchase-history"
          uk-icon="icon: history; ratio: 1.5"
          uk-tooltip="title: Purchase History; pos: right; delay: 150"
        ></router-link>
        <router-link
          v-if="!loginStatus"
          class="nav-icon"
          to="/login"
          uk-icon="icon: sign-in; ratio: 1.5"
          uk-tooltip="title: Login; pos: right; delay: 150"
        ></router-link>
        <router-link
          v-if="loginStatus"
          class="nav-icon"
          to="/"
          uk-icon="icon: sign-out; ratio: 1.5"
          uk-tooltip="title: Logout; pos: right"
        ></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    }
  }
}
</script>
