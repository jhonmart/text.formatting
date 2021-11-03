export const Script = {
  data() {
    return {
      CHAR_FOR_LINE: 119,
      outputValue: "",
      inputValue: "",
      htmlChange: false
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
        if (value && /(> <)|( {1,}>)|(" )|( ")|( {2,})|(\n)|&nbsp;/.test(value))
          this.outputValue = value
            .replace(/&nbsp;/g, " ")
            .replace(/ {2,}/g, "")
            .replace(/(> <)/g, "><")
            .replace(/( {1,}>)/g, ">")
            .replace(/(" )|( ")/g, '"')
            .replace(/\n/g, "");
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
    },
    changeState() {
      this.htmlChange = !this.htmlChange;
      this.htmlChange && this.snackToast.open("HTML em modo de edição");
    },
    updateHTML(ev) {
      this.outputValue = ev.target.innerHTML;
      this.snackToast.open("HTML atualizado");
    }
  }
};
