import { createStore } from 'vuex';

export default createStore({
  state: {
    top: 50,
    left: 50,
    height: 163,
    width: 108,
  },
  mutations: {
    setTopCoord(state, newTopCoord) {
      state.top = newTopCoord;
    },
    setLeftCoord(state, newLeftCoord) {
      state.left = newLeftCoord;
    },
    setHeight(state, newHeight) {
      state.height = newHeight;
    },
    setWidth(state, newWidth) {
      state.width = newWidth;
    },
  },
  actions: {
  },
  modules: {
  },
});
