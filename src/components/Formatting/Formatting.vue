<template>
  <main>
    <section
      v-html="outputValue"
      title="HTML View"
      @dblclick="changeState"
      @focusout="updateHTML"
      :contenteditable="htmlChange"
    />
    <textarea
      cols="30"
      rows="10"
      v-model="inputValue"
      placeholder="Backend Input Code"
    ></textarea>
    <textarea
      cols="30"
      rows="10"
      v-model="outputValue"
      placeholder="HTML Input/Output Code"
    ></textarea>
    <textarea
      cols="30"
      rows="10"
      @click="copyData"
      :value="stringFormat"
      placeholder="Backend Output Code"
    ></textarea>
  </main>
</template>

<script>
import { Script } from "./Formatting.script";

export default {
  name: "Formatting",
  ...Script
};
</script>

<style lang="scss" scoped>
@import "./Formatting.style.scss";
</style>
