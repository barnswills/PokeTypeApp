import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    test: "hello"
  },
  mutations: {
    test(state) {
      console.log(state.test);
    }
  }
});
