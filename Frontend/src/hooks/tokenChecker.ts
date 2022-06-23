import type { RouteLocation } from 'vue-router'
export function isTokenExist(to: RouteLocation, from: RouteLocation) {
  if (to.path !== '/login') {
    if (!localStorage.cx_token) return { path: '/login' }
    return true
  } else {
    if (localStorage.cx_token) return { path: from.path }
    return true
  }
}