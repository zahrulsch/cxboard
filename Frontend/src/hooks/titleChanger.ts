import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export function titleChanger(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  document.title = to.meta.pageTitle + ' - CXBoard'
  next()
}