<template>
  <div>
      <sui-dropdown
      placeholder="Gender"
      selection
      :options="options"
      v-model="current"
    ></sui-dropdown>
    </div>
</template>

<script>
export default {
  name: "TypeSelector",
  data() {
    return {
      current: null,
      options: [{
        text: 'Male',
        value: 1,
      }, {
        text: 'Female',
        value: 2,
      }],
    };
  },
  methods: {
    mounted() {
      console.log("Type slector mounted")
    }
  }
}
</script>

<style></style>