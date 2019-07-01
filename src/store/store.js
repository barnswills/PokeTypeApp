import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    test: "test"
  },
  mutations: {
    test() {
      console.log(this.test);
    }
  }
});
