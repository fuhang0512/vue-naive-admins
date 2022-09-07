import type { RouteModule, RouteType, RoutesType } from "~/types/router";
const Layout = () => import("@/layout/index.vue");

export const basicRoutes: RoutesType = [
  {
    name: "Dashboard",
    path: "/",
    component: Layout,
    redirect: "/workbench",
    meta: {
      order: 0,
    },
    children: [
      {
        name: "Workbench",
        path: "workbench",
        component: () => import("@/views/workbench/index.vue"),
        meta: {
          title: "工作台",
          icon: "mdi:home",
        },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: "ErrorPage",
    path: "/error-page",
    component: Layout,
    redirect: "/error-page/404",
    isHidden: true,
    meta: {
      title: "ErrorPage",
      order: 99,
      icon: "mdi:alert-circle-outline",
    },
    children: [
      {
        name: "ERROR-403",
        path: "403",
        component: () => import("@/views/error-page/403.vue"),
        meta: {
          title: "403",
          icon: "tabler:error-404",
        },
      },
      {
        name: "ERROR-404",
        path: "404",
        component: () => import("@/views/error-page/404.vue"),
        meta: {
          title: "404",
          icon: "tabler:error-404",
        },
      },
      {
        name: "ERROR-500",
        path: "500",
        component: () => import("@/views/error-page/500.vue"),
        meta: {
          title: "500",
          icon: "tabler:error-404",
        },
      },
    ],
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    isHidden: true,
    meta: {
      title: "登录页",
    },
  },
];

export const NOT_FOUND_ROUTE: RouteType = {
  name: "NotFound",
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  isHidden: true,
};

const modules = import.meta.glob("@/views/**/route.ts", {
  eager: true,
}) as RouteModule;
const asyncRoutes: RoutesType = [];
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(modules[key].default);
});

export { asyncRoutes };
