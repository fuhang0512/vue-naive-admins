import { defineStore } from "pinia";
import { filterAsyncRoutes } from "./helpers";
import { asyncRoutes, basicRoutes } from "@/router/routes";
import type { RoutesType } from "~/types/router";
import { getSysMenuRoutes } from "~/src/api/menu";

export const usePermissionStore = defineStore("permission", {
  state() {
    return {
      accessRoutes: <RoutesType>[],
    };
  },
  getters: {
    routes(): RoutesType {
      return basicRoutes.concat(this.accessRoutes);
    },
    menus(): RoutesType {
      return this.routes.filter((route) => route.name && !route.isHidden);
    },
  },
  actions: {
    // 获取用户菜单信息
    async getSysUserMenuRoutes() {
      const { data: res } = await getSysMenuRoutes();
      // console.log(res);
      const accessRoutes = filterAsyncRoutes(res);
      console.log(accessRoutes);

      this.accessRoutes = accessRoutes;
      return accessRoutes;
    },
    // generateRoutes(role: Array<string> = []): RoutesType {
    //   const accessRoutes = filterAsyncRoutes(asyncRoutes, role);
    //   this.accessRoutes = accessRoutes;
    //   return accessRoutes;
    // },
  },
});
