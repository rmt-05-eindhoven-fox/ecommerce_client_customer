<template>
  <div class="container">
    <div class="row content">
      <div class="col-md-6 mb-3">
        <img src="../assets/landing.svg" alt="loginimg" class="img-fluid">
      </div>
      <div class="col-md-6">
        <h3 class="signin-text mb-3">Sign In</h3>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    document.body.className = '#00ac96'
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
</style>
