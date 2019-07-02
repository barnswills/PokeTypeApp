import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    test: "hello",
    types: [],
    currentType: "",
    selectedPokemon: []
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
    },
    setSelectedPokemon(state, selectedPokemon) {
      state.selectedPokemon = selectedPokemon;
    }
  },
  getters: {
    types: state => state.types,
    currentType: state => state.currentType,
    selectedPokemon: state => state.selectedPokemon
  }
});
