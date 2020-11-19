<template>
   <div class="carousel-inner">
         <div class="carousel-item active" data-interval="10000">
              	<div class="carousel-caption text-center">
                  <a href="shop.html" class="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>
                </div>
              <img src="../assets/banner1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-interval="2000">
              	<div class="carousel-caption text-center">
                  <a href="shop.html" class="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>
                </div>
              <img src="../assets/banner2.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              	<div class="carousel-caption text-center">
                  <a href="shop.html" class="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>
                </div>
              <img src="../assets/banner3.png" class="d-block w-100" alt="...">
            </div>
        </div>
</template>

<script>
export default {
    name: "Banner",
    props: ['banner'],
}
</script>

<style>

</style>