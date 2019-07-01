import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    test: "hello",
    types: [],
    currentType: ""
  },
  mutations: {
    test(state) {
      console.log(state.test);
    },
    setTypes(state, types) {
      state.types = types;
    },
    changeType(state, newType) {
      state.currentType = newType;
    }
  },
  getters: {
    types: state => state.types
  }
});
