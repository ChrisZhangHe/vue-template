const StaticRoutes = [
  {
    path: "/",
    name: "home",
    component: () => import("@views/Home")
  },
  {
    path: "/avue",
    name: "avue",
    component: () => import("@views/Avue")
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
