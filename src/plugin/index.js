/* eslint-disable no-param-reassign */
import moment from "moment";
import NProgress from "./NProgress";
import directives from "./directives";
import filters from "./filters";
import mixin from "./mixin";

const initPlugin = {
  install(Vue) {
    // 时间控件
    Vue.prototype.$moment = moment;
    // 加载进度条
    Vue.prototype.$NProgress = NProgress;

    Vue.use(directives);
    Vue.use(filters);
    Vue.use(mixin);
  }
};

export default initPlugin;
