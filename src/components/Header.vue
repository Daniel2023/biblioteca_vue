<template>
  <div
    class="d-flex justify-content-between py-3 bg-danger align-content-center"
  >
    <div class="img mx-5">
      <router-link to="/" class="text-decoration-none text-white">
        <img src="/img/book.png" width="50" alt="Book" />
      </router-link>
    </div>
    <div class="d-flex align-self-center">
      <h3 class="d-inline ml-5 text-white">Books Shop</h3>
    </div>
    <div class="list mx-5 d-flex align-self-center">
      <Search />
      <ul class="list-inline nav navbar navbar-left d-flex d-inline-flex">
        <router-link to="/" class="text-decoration-none text-white"
          ><li class="mx-2">Home</li></router-link
        >
        <router-link to="/" class="text-decoration-none text-white"
          ><li class="mx-2">Buy</li></router-link
        >
        <router-link to="/" class="text-decoration-none text-white"
          ><li class="mx-2">Cart</li></router-link
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