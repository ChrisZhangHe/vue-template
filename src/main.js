import Vue from "vue";
import initPlugin from "./plugin/index";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "@css/index.scss";

Vue.config.productionTip = true;

Vue.use(initPlugin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
