<template>
  <Filters />
  <Carousel />
  <Conteudo />
</template>

<script>
import Carousel from "./Carousel.vue";
import Filters from "./Filters.vue";
import Conteudo from "./Conteudo.vue";

export default {
  components: {
    Carousel,
    Filters,
    Conteudo,
  },
};
</script>
