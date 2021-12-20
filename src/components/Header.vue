<template>
  <div
    class="d-flex justify-content-between py-3 bg-danger align-content-center"
  >
    <div class="img mx-5">
      <router-link to="/" class="text-decoration-none text-white">
        <img src="/img/book.png" width="50" alt="Book" />
      </router-link>
      <h3 class="d-inline ml-8 text-white mx-2">Books Shop</h3>
    </div>
    <div class="list mx-5 d-flex align-self-center">
      <Search />
    </div>
    <div>
      <ul class="list-inline nav navbar navbar-left d-flex d-inline-flex">
        <router-link to="/" class="text-decoration-none text-white">
          <li class="mx-2"><i class="fas fa-home"></i> Home</li></router-link
        >
        <router-link to="/cart" class="text-decoration-none text-white">
          <li class="mx-2">
            <i class="fas fa-shopping-cart"></i> Cart
          </li></router-link
        >
        <router-link to="/signin" class="text-decoration-none text-white"
          ><li class="mx-2">
            <i class="fas fa-sign-in-alt"></i> Sign In
          </li></router-link
        >
        <router-link to="/signup" class="text-decoration-none text-white"
          ><li class="mx-2">
            <i class="fas fa-user-plus"></i> Sign Up
          </li></router-link
        >
      </ul>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  components: {
    Search,
  },
};
</script>

<style>
</style>