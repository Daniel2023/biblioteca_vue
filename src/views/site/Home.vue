<template>
  <Header />
  <div>
    <Body />
  </div>
</template>

<script>
import Body from "../../components/Body.vue";
import Header from "../../components/Header.vue";

export default {
  components: {
    Body,
    Header,
  },
};
</script>
