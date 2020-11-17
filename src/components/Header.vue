<template>
    <div class="container col-12">
     <div class="row">
       <div class="col-4 col-sm-12 col-md-4">
          <div class="btn-group">
            <button class="btn border dropdown-toggle my-md-4 my-2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >USD</button>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">
                EUR - EURO
              </a>
            </div>
          </div>
       </div>
       <div class="col-md-4 col-12 text-center my-2">
          <h2 class="my-md-3 site-title text-center">E-Commerce Customer</h2>
       </div>
       <div class="col-md-4 col-12 my-2">
         <p class="my-md-4 header-links">
          <a href="#" class="px-2">Sign In</a>
          <a href="#" class="px-1">Create An Account</a>
         </p>
       </div>
     </div>
     <div class="container-fluid p-0">
       <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" style="font-size: 1em; font-weight: bold">
            <li class="nav-item">
              <a class="nav-link" href="#">HOME<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CATEGORY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">PRODUCTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT ME</a>
            </li>
          </ul>
        </div>
        <div class="navbar-nav">
          <li class="nav-item border rounded-circle mx-2 p-1 basket-icon">
            <a href="#"><i class="fas fa-shopping-basket fa-lg"></i></a>
          </li>
        </div>
      </nav>
     </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Gugi&family=Lato&family=Roboto&display=swap');
  :root{
    --primary-color: #45ccb8;
    --light-gray: #2b3032a1;
    --border: #2b303218;
    --text-color: #ff686b;
    --roboto: "Roboto", sans-serif;
    --gugi: "Gugi", cursive;
    --sofia: "Sofia", cursive;
  }
  .row {
    background-color: #FFB001;
  }
  .site-title {
    font-family: "Gugi", cursive;
    color: white;
  }
  .container .dropdown-toggle,
  .container .dropdown-item {
    font-family: "Roboto", cursive;
    font-size: 1em;
    color: white;
  }
  .header-links a {
    font-family: "Roboto", cursive;
    font-size: 1em;
    text-decoration: none;
    color: white;
  }
  .navbar-nav {
    padding: 0.8em 0em;
  }
  .navbar-nav .nav-link {
    font-size: 1em;
    color: #2b3032a1 !important;
  }
  .nav-link:hover {
    color: black !important;
  }
  .navbar-nav .nav-item .nav-link {
    padding: 0 1.3em;
  }
  .navbar-nav .basket-icon {
    margin-right: 6.5rem !important;
  }
</style>
