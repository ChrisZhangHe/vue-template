import Vue from "vue";
import { apiLogin } from "@api/login";
import moment from "moment";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "@css/index.scss";

NProgress.configure({
  showSpinner: false
});

Vue.config.productionTip = true;
Vue.prototype.$moment = moment;
// 加载进度条
Vue.prototype.$NProgress = NProgress;

// 接口条用测试
NProgress.start();
apiLogin().then((res, down) => {
  console.log(res, down);
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
