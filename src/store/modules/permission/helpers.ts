import type { RouteType, RoutesType } from '~/types/router'
import Layout from '@/layout/index.vue'
import ErrorPage from '@/views/error-page/404.vue'
// function hasPermission(route: RouteType, role: string[]) {
//   // * 不需要权限直接返回true
//   if (!route.meta?.requireAuth) return true;

//   const routeRole = route.meta?.role ? route.meta.role : [];

//   // * 登录用户没有角色或者路由没有设置角色判定为没有权限
//   if (!role.length || !routeRole.length) return false;

//   // * 路由指定的角色包含任一登录用户角色则判定有权限
//   return role.some((item) => routeRole.includes(item));
// }

export function filterAsyncRoutes(routes: RoutesType = []): RoutesType {
  const routeAllPathToCompMap = import.meta.glob(`../../../views/**/*.vue`)

  const ret: RoutesType = []
  routes.forEach((route) => {
    const curRoute: RouteType = {
      ...route,
      children: [],
      redirect: route?.children?.[0]?.path ? `${route.path}/${route?.children?.[0]?.path}` : null,
      // redirect: route.children && route.children.length > 0 && route.children[0] && (route.children[0].path.startsWith('/') ? `${route.children[0].path}` : `/${route.children[0].path}`),
      meta: {
        title: route.title,
        keepAlive: !route.noCache,
        affix: Boolean(route.affix),
        icon: route.icon,
      },
    }
    if (route.component) {
      if (route.component !== 'Layout') {
        curRoute.component = routeAllPathToCompMap[`../../../views${route.component}`] // 导入组件
      } else {
        curRoute.component = Layout
      }
    }
    if (!curRoute.component) {
      curRoute.component = ErrorPage
    }
    if (route.children && route.children.length) curRoute.children = filterAsyncRoutes(route.children) || []
    else Reflect.deleteProperty(curRoute, 'children')
    ret.push(curRoute)
  })
  return ret
}
