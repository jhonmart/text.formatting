<template>
  <main>
    <section v-html="outputValue" title="HTML View" />
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
export default {
  name: "Homepage",
  data() {
    return {
      CHAR_FOR_LINE: 119,
      outputValue: "",
      inputValue: ""
    };
  },
  watch: {
    inputValue: {
      handler(value) {
        if (value && / {2,}/.test(value))
          this.inputValue = value.replace(/ {2,}/g, "");

        this.outputValue = this.decoderText(value);
      }
    },
    outputValue: {
      handler(value) {
        if (value && /(> <)|( {1,}>)|(" )|( ")/.test(value))
          this.outputValue = value
            .replace(/(> <)/g, "><")
            .replace(/( {1,}>)/g, ">")
            .replace(/(" )|( ")/g, '"');
      }
    }
  },
  computed: {
    stringFormat() {
      return this.encoderText(this.outputValue);
    }
  },
  methods: {
    decoderText(text) {
      const clearText = text.replace(/'\n'/g, "");
      return clearText.slice(1, clearText.length - 1);
    },
    encoderText(htmlText) {
      const arrayOut = [];

      htmlText
        .replace(/(> <)/g, "><")
        .replace(/( {1,}>)/g, ">")
        .replace(/(" )|( ")/g, '"')
        .split(/(.{119})/)
        .map(block => block.length && arrayOut.push(`'${block}'`));

      return arrayOut.join("\n");
    },
    copyData() {
      this.stringFormat
        ? navigator.clipboard
            .writeText(this.stringFormat)
            .then(() => this.snackToast.open("Texto copiado!"))
        : this.snackToast.open({
            message: "Nada para copiar!",
            type: "is-danger"
          });
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

#input {
  grid-row: 1;
  grid-column: 2;
}

#output {
  grid-row: 1;
  grid-column: 1;
}

#inputData {
  grid-row: 2;
  grid-column: 1;
}

#outputData {
  grid-row: 2;
  grid-column: 2;
}
</style>
