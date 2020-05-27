import Vue from "vue";
import Router from "vue-router";
import routes from "./config";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  // 判断当前用户登录信息是否有效
  const isLogined = true;
  // 不需要登录权限
  if (to.meta.isRequireLogin === false) {
    next();
  } // 需要登录权限且已登录成功
  else if (isLogined) {
    next();
  } else {
    // 需要登录权限，未登录成功，需要重新登录
    next({
      path: "/login"
    });
  }
});
export default router;
