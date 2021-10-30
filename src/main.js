import Vue from "vue";
import App from "./App.vue";
import { SnackToast } from "@/utils/snackToast";

Vue.prototype.snackToast = SnackToast;

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount("#app");
