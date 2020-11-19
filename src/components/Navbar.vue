<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-white">
    <h5 role="button" class="nav-link text-dark">
      <h3>Date With Celebs...</h3>
    </h5>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <div>
            <button id="borderFade" class="btn btn-light mx-2">
              <b @click.prevent="login">Sign In</b>
            </button>
            <button id="borderFade" class="btn btn-light mx-2">
              <b @click.prevent="register">Register</b>
            </button>
          </div>
        </li>
      </ul>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    register () {
      this.$router.push('/register')
    },
    login () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#borderFade {
    padding-bottom: 1px;
    color: hsl(222, 25%, 14%);
    position: relative;
}

#borderFade::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transform: translateY(3px);
    background: hsl(243, 80%, 62%);
    transition: opacity 0.2s ease, transform 0.2s ease;
}

#borderFade:hover::after {
    opacity: 1;
    transform: translateY(0);
}

</style>
