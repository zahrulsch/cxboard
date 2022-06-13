import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { titleChanger } from './hooks/titleChanger'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    meta: { pageTitle: 'Halaman Masuk' },
    component: () => import('./views/Login.vue'),
    beforeEnter: [ titleChanger ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router