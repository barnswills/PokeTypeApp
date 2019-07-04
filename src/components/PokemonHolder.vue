<template>
  <sui-segments>
    <sui-segment v-for="i in this.items" v-bind:key="i">{{ i }}</sui-segment>
  </sui-segments>
</template>

<script>
export default {
  name: "PokemonHolder",

  data() {
    return { items: this.getItems(), 
    dummy: ["hello", "world", "2019"] };
  },

  methods: {
    getItems: async function() {
      this.items = await this.$store.getters.selectedPokemon;
      return await this.items;
    }
  },

  watch: {
    items: async function(val) {
      console.log("ITEMS CHANGED!");

      const v = await val;
      console.log("CHANGED TO: ", v);
    }
  }
};
</script>
