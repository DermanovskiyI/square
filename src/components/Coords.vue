<template>
<ul class="coords">
    <li class="coords__item"> top
        <input type="text" :placeholder="top" @keyup="handleTopCoords" v-model="newTopCoords">
    </li>
    <li class="coords__item"> left
        <input type="text" :placeholder="left" @keyup="handleLeftCoords" v-model="newLeftCoords">
    </li>
    <li class="coords__item"> height
        <input type="text" :placeholder="height" @keyup="handleHeight" v-model="newHeight">
    </li>
    <li class="coords__item"> width
        <input type="text" :placeholder="width" @keyup="handleWidth" v-model="newWidth">
    </li>
</ul>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      top: (state) => state.top,
      left: (state) => state.left,
      height: (state) => state.height,
      width: (state) => state.width,
    }),
  },
  data() {
    return {
      newTopCoords: this.top,
      newLeftCoords: this.left,
      newHeight: this.height,
      newWidth: this.width,
    };
  },
  methods: {
    ...mapMutations(['setTopCoord', 'setLeftCoord', 'setHeight', 'setWidth']),
    handleTopCoords() {
      this.setTopCoord(this.newTopCoords);
    },
    handleLeftCoords() {
      this.setLeftCoord(this.newLeftCoords);
    },
    handleHeight() {
      this.setHeight(this.newHeight);
    },
    handleWidth() {
      this.setWidth(this.newWidth);
    },
  },
};
</script>
<style lang="scss" scoped>
.coords {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
