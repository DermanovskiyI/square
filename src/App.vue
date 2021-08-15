<template>
<div class="wrapper">
  <section class="hero">

    <square></square>
    <coords></coords>
  </section>
</div>
</template>

<script>
import Square from './components/Square.vue';
import Coords from './components/Coords.vue';

export default {
  components: {
    Square,
    Coords,
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
}
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
#app {
  height: 100%;
}
.wrapper {
  height: 100%;
  border: 2px solid black;
}
.hero {
  height: 100%;
  padding: 30px;
  display: flex;
}
</style>
