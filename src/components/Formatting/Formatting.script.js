export const Script = {
  data() {
    return {
      CHAR_FOR_LINE: 119,
      ioHTML: "",
      formattedTextInput: "",
      HTMLEditable: false
    };
  },
  watch: {
    formattedTextInput: {
      handler(value) {
        this.ioHTML = this.normalizeHTML(value);
      }
    }
  },
  computed: {
    formattedTextOutput() {
      return this.encoderText(this.ioHTML);
    }
  },
  methods: {
    normalizeHTML(html) {
      return html
        .trim()
        .replace(/ {2,}/g, "")
        .replace(/'\n'/g, "")
        .replace(/\n/g, "")
        .replace(/'/, "")
        .replace(/'$/, "")
        .replace(/&nbsp;/g, " ")
        .replace(/> </g, "><")
        .replace(/ {1,}>/g, ">")
        .replace(/" | "/g, '"');
    },
    encoderText(HTMLText) {
      return this.normalizeHTML(HTMLText)
        .split(/(.{119})/)
        .reduce((acc, row) => (acc += row ? `'${row}'\n` : ""), "");
    },
    copyData() {
      this.formattedTextOutput
        ? navigator.clipboard
            .writeText(this.formattedTextOutput)
            .then(() => this.snackToast.open("Texto copiado!"))
        : this.snackToast.open({
            message: "Nada para copiar!",
            type: "is-danger"
          });
    },
    changeState() {
      this.HTMLEditable = !this.HTMLEditable;
      this.snackToast.open(
        this.HTMLEditable ? "HTML em modo de edição" : "HTML em modo de visão"
      );
    },
    updateHTML(ev) {
      this.ioHTML = ev.target.innerHTML;
      this.snackToast.open("HTML atualizado");
    }
  }
};
