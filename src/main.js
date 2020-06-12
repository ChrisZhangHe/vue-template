import Vue from "vue";
import "@css/index.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import initPlugin from "./plugin/index";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

Vue.config.productionTip = true;

Vue.use(ElementUI);
Vue.use(initPlugin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
