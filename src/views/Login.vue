<template>
  <section id="login-page" class="container">
    <div class="row d-flex align-items-center">
      <div class="col-8">
        <!-- <p>Ini tulisan</p> -->
        <img src="../assets/login.svg" alt="login">
      </div>
      <div class="col-4" id="login-form">
        <div class="card shadow">
          <div class="card-body">
            <h3>Log in</h3>
            <br>
            <form class="text-left">
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <hr>
            <p>Don't have an account? <a href="">Register</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
body {
  background-color: rgba(223, 219, 219, 0.616);
}

#login-page {
  height: 100vh;
}

img {
  height: 400px;
}

</style>
