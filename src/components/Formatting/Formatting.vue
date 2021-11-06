<template>
  <main>
    <section
      v-html="ioHTML"
      title="HTML View"
      @dblclick="changeState"
      @focusout="updateHTML"
      :contenteditable="HTMLEditable"
    />
    <textarea
      cols="30"
      rows="10"
      v-model="formattedTextInput"
      placeholder="Backend Input Code"
    ></textarea>
    <textarea
      cols="30"
      rows="10"
      v-model="ioHTML"
      placeholder="HTML Input/Output Code"
    ></textarea>
    <textarea
      cols="30"
      rows="10"
      @click="copyData"
      :value="formattedTextOutput"
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
