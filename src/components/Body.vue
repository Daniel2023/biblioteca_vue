<template>
  <Filters />
  <Carousel />
</template>

<script>
import Carousel from "./Carousel.vue";
import Filters from "./Filters.vue";

export default {
  components: {
    Carousel,
    Filters,
  },
};
</script>
