<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-dark">
  <span class="navbar-brand text-warning">POG GAMING</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="" @click.prevent="toHome">Home</a>
      </li>
    </ul>
   <ul class="nav navbar-nav navbar-right">
      <li><button @click="toCart" class="btn btn-dark mr-3"><span class="fas fa-shopping-cart"><span class='badge badge-warning' id='lblCartCount'>{{numberOfItems}} </span> </span></button></li>
      <li><button class="btn btn-dark mr-3"><span class="fas fa-history"></span></button></li>
      <li><button @click="logout" class="btn btn-dark"><span class="fas fa-sign-out-alt"></span>Logout</button></li>
    </ul>
  </div>
</nav>
  
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toHome() {
      this.$router.push({ name: 'Home' })
    },
    toCart() {
      this.$router.push({ name: 'Cart' })
    },
    logout() {
      Swal.fire({
          title: "Are you sure?",
          text: "POG still have some offers for you",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Idc, log me out!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.clear();
            this.$router.push({
              name: 'Login'
            })
            Swal.fire("Logged out!", "See you later", "success");
          } else {
            this.$router.push({
              name: 'Home'
            })
          }
        });
    }
  },
  computed: {
    numberOfItems() {
      return this.$store.getters.numberOfItems
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#lblCartCount {
    font-size: 10px;
    background: #ff0000;
    color: #fff;
    padding: 0 3px;
    vertical-align: top;
    margin-left: -5px; 
}
</style>
