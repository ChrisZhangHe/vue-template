const StaticRoutes = [
  {
    path: "/",
    name: "home",
    component: () => import("@views/Home")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@views/404"),
    meta: {
      isRequireLogin: false
    }
  },
  {
    path: "*",
    redirect: "/404"
  }
];
const dynamicRoutes = [];
export default [...StaticRoutes, ...dynamicRoutes];
