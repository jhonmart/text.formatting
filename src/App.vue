<template>
  <section>
    <Homepage />
  </section>
</template>

<script>
import Homepage from "@/components/Homepage.vue";

export default {
  name: "App",
  components: {
    Homepage
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
