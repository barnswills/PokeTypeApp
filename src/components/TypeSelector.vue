<template>
  <div>
    <sui-dropdown placeholder="Type..." fluid selection 
    :options="this.$store.getters.types" v-model="current"></sui-dropdown>
  </div>
</template>

<script>
import { getPokemonOfType } from "../rest/contactPokeApi";

export default {
  name: "TypeSelector",

  data() {
    return {
      current: null,
      options: [],
      pokemon: []
    };
  },
  methods: {
    getOptions: function() {
      console.log(this.$store.getters.types);
      return this.$store.getters.types;
    },
    invokeChange: function() {
      console.log("value changed");
    }
  },

  watch: {
    current: function(val) {

      const vInt = val - 1;

      const types = this.$store.getters.types;
      const value = types[vInt]["text"];

      console.log(value);

      this.$store.commit("changeType", value);

      // get pokemon of this type
      const pokemonOfType = getPokemonOfType(value);

      // commit all pokemon to
      this.$store.commit("setSelectedPokemon", pokemonOfType);
    }
  }
};
</script>

<style></style>