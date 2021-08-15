<template>
<div class="square">
  <div class="square__pic" :style="{
      top: top + 'px',
      left: left + 'px',
      height: height + 'px',
      width: width + 'px'
    }">
    <div class="square__controll square__controll--top"></div>
    <div class="square__controll square__controll--right"></div>
    <div class="square__controll square__controll--bottom"></div>
    <div class="square__controll square__controll--left"></div>
    <div class="square__controll square__controll--mid"></div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      top: (state) => state.top,
      left: (state) => state.left,
      height: (state) => state.height,
      width: (state) => state.width,
    }),
  },
};
</script>

<style lang="scss" scoped>
.square {
  border: 1px solid black;
  flex: 1;
  margin-right: 20px;
  &__pic {
    background: lightcoral;
    position: relative;
  }
  &__controll {
    width: 6px;
    height: 12px;
    background: crimson;
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, -50%);
    &--top {
      top: 0;
      left: 50%;
      width: 12px;
      height: 6px;
    }
    &--right {
      top: 50%;
      right: -5px;
    }
    &--bottom {
      bottom: -5px;
      left: 50%;
      width: 12px;
      height: 6px;
    }
    &--left {
      left: 0;
      top: 50%;
    }
    &--mid {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 6px;
    }
  }
}
</style>
