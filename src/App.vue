<template>
  <div id="app">
    <h1>Hello</h1>
    <sui-button>TEST</sui-button>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    
  },
  mounted() {
    console.log("MOUNTED!");
    this.$store.commit("test");
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
