<template>
  <div>
    <sui-dropdown placeholder="Type..." fluid selection :options="options" v-model="current"></sui-dropdown>
  </div>
</template>

<script>
import { getPokemonOfType } from "../rest/contactPokeApi";

export default {
  name: "TypeSelector",

  data() {
    return {
      current: null,
      options: this.getOptions(),
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
    current: function() {
      //console.log(this.current);
      //console.log(this.options[this.current - 1]);

      const value = this.options[this.current - 1]["text"];

      console.log(value);

      this.$store.commit("changeType", value);

      // get pokemon of this type
      const pokemonOfType = getPokemonOfType(value);

      // commit all pokemon to
      this.$store.commit();
    }
  }
};
</script>

<style></style>