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
    path: '/employees/edit/:id',
    component: () => import('./views/EmployeeEdit.vue'),
    meta: { pageTitle: 'Ubah Data Pegawai' },
    beforeEnter: [ titleChanger, isTokenExist ],
  },
  {
    path: '/employees/:id',
    component: () => import('./views/EmployeeDetail.vue'),
    meta: { pageTitle: 'Detail Pegawai' },
    beforeEnter: [ titleChanger, isTokenExist ],
  },
  {
    path: '/employees/',
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
    path: '/teams',
    meta: { pageTitle: 'Teams' },
    component: () => import('./views/Team.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/teams/create',
    meta: { pageTitle: 'Tambah Team' },
    component: () => import('./views/TeamCreate.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/teams/edit/:id',
    meta: { pageTitle: 'Team Edit' },
    component: () => import('./views/TeamEdit.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/teams/:id',
    meta: { pageTitle: 'Detail Team' },
    component: () => import('./views/TeamDetail.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/activities/create',
    meta: { pageTitle: 'Tambahkan Aktivitas' },
    component: () => import('./views/AddActivity.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/activities/:id',
    meta: { pageTitle: 'Detail Aktivitas' },
    component: () => import('./views/ActivityDetail.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/activities',
    meta: { pageTitle: 'Semua Aktivitas' },
    component: () => import('./views/Activity.vue'),
    beforeEnter: [ titleChanger, isTokenExist ]
  },
  {
    path: '/user_setting',
    meta: { pageTitle: 'Pengaturan Pengguna' },
    component: () => import('./views/UserEdit.vue'),
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