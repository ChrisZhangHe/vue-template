import Vue from "vue";
import { apiLogin } from "@api/login";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

Vue.config.productionTip = false;

console.log(apiLogin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
