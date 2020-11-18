<template>
  <!-- Default form register -->
  <form class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Sign up</p>

    <div class="form-row mb-2">
      <div class="col">
        <!-- First name -->
        <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
      </div>
      <div class="col">
        <!-- Last name -->
        <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
      </div>
    </div>

    <!-- E-mail -->
    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">

    <!-- Password -->
    <input type="password" id="defaultRegisterFormPassword" class="form-control mb-0" placeholder="Password"
      aria-describedby="defaultRegisterFormPasswordHelpBlock">
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-3 text-left">
      At least 8 characters
    </small>

    <!-- Sign up button -->
    <button class="btn btn-info my-4 btn-block" type="submit">REGISTER</button>
    <!-- Newsletter -->
    <!-- Register -->
    <p>Already have membership?
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </p>

    <hr>
    <!-- Terms of service -->
    <p>By clicking
      <em>Sign up</em> you agree to our
      <a href="" target="_blank">terms of service</a>
    </p>
  </form>
  <!-- Default form register -->
</template>

<script>
export default {

}
</script>

<style>

</style>
