<template>
  <div>
    <Header />
  </div>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  setup() {},
};
</script>