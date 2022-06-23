import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { titleChanger } from './hooks/titleChanger'
import { isTokenExist } from './hooks/tokenChecker'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    meta: { pageTitle: 'Halaman Masuk' },
    component: () => import('./views/Login.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/employees',
    meta: { pageTitle: 'Pegawai' },
    component: () => import('./views/Employee.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/add_employee',
    meta: { pageTitle: 'Tambahkan Pegawai' },
    component: () => import('./views/AddEmployee.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/',
    meta: { pageTitle: 'Beranda' },
    component: () => import('./views/Dashboard.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router