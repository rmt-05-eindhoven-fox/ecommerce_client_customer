<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <span class="navbar-brand">Ecommerce-hacktiv</span>
    </div>
    <div id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-dark">
            <i class="fas fa-shopping-cart"> Cart</i>
          </button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            bintang.wib@mail.com
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar {
  height: 60px;
}
</style>
