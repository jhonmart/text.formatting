import Vue from "vue";
import App from "./App.vue";

import "@mdi/font/css/materialdesignicons.css";

import { SnackToast } from "@/utils/snackToast";

import Buefy from "buefy";

Vue.prototype.snackToast = SnackToast;

Vue.use(Buefy);

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount("#app");
