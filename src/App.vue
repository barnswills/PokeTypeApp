<template>
  <div id="app">
    <h1>Hello</h1>
    <sui-button>TEST</sui-button>
    <Interface></Interface>
  </div>
</template>

<script>
import Interface from "./components/Interface";
import { getTypes } from "./rest/contactPokeApi";

export default {
  name: "App",
  components: {
    Interface
  },
  // mounted() {
  //   console.log("MOUNTED!");
  // },
  mounted() {
    console.log("NOT CREATED");

    this.getTypesFromApi();
  },
  methods: {
    getTypesFromApi: async function() {
      const apiTypes = await getTypes();
      console.log(apiTypes);
      this.$store.commit("setTypes", apiTypes);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
