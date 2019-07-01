<template>
  <div>
    <sui-dropdown placeholder="Type..." selection :options="getOptions()" v-model="current"></sui-dropdown>
  </div>
</template>

<script>
export default {
  name: "TypeSelector",
  data() {
    return {
      current: null,
      options: [
        {
          text: "Male",
          value: 1
        },
        {
          text: "Female",
          value: 2
        }
      ]
    };
  },
  methods: {
    getOptions: function() {
      console.log(this.$store.getters.types);
      return this.$store.getters.types;
    }
  }
};
</script>

<style></style>