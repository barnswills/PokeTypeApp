<template>
  <div>
    <h1>Select a Type...</h1>
    <TypeSelector/>
    <PokemonHolder/>
  </div>
</template>

<script>
import TypeSelector from "./TypeSelector";
import PokemonHolder from "./PokemonHolder";

export default {
  name: "Interface",

  components: {
    TypeSelector,
    PokemonHolder
  }
};
</script>

<style></style>