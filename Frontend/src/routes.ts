import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { titleChanger } from './hooks/titleChanger'
import { isTokenExist } from './hooks/tokenChecker'
import EmployeeEdit from './views/EmployeeEdit.vue'
import EmployeeDetail from './views/EmployeeDetail.vue'
import Employee from './views/Employee.vue'
import AddEmployee from './views/AddEmployee.vue'
import Team from './views/Team.vue'
import TeamCreate from './views/TeamCreate.vue'
import TeamEdit from './views/TeamEdit.vue'
import TeamDetail from './views/TeamDetail.vue'
import AddActivity from './views/AddActivity.vue'
import Activity from './views/Activity.vue'
import ActivityDetail from './views/ActivityDetail.vue'
import UserEdit from './views/UserEdit.vue'
import Dashboard from './views/Dashboard.vue'

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    meta: { pageTitle: "Halaman Masuk" },
    component: () => import("./views/Login.vue"),
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/employees/edit/:id",
    component: EmployeeEdit,
    meta: { pageTitle: "Ubah Data Pegawai", group: 'karyawan' },
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/employees/:id",
    component: EmployeeDetail,
    meta: { pageTitle: "Detail Pegawai", group: 'karyawan' },
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/employees/",
    meta: { pageTitle: "Pegawai", group: 'karyawan' },
    component: Employee,
    beforeEnter: [
      titleChanger,
      isTokenExist,
      function (to) {
        const query = { ...to.query } as { [key: string]: any }
        const { page, pagesize } = to.query

        if (!page && !pagesize) {
          query.page = 1
          query.pagesize = 20
          return { path: '/employees', query }
        }

        return true

      },
    ],
  },
  {
    path: "/add_employee",
    meta: { pageTitle: "Tambahkan Pegawai", group: 'karyawan' },
    component: AddEmployee,
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/teams",
    meta: { pageTitle: "Teams", group: 'team' },
    component: Team,
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/teams/create",
    meta: { pageTitle: "Tambah Team", group: 'team' },
    component: TeamCreate,
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/teams/edit/:id",
    meta: { pageTitle: "Team Edit", group: 'team' },
    component: TeamEdit,
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/teams/:id",
    meta: { pageTitle: "Detail Team", group: 'team' },
    component: TeamDetail,
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/activities/create",
    meta: { pageTitle: "Tambahkan Aktivitas", group: 'aktivitas' },
    component: AddActivity,
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/activities/:id",
    meta: { pageTitle: "Detail Aktivitas", group: 'aktivitas' },
    component: ActivityDetail,
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/activities",
    meta: { pageTitle: "Semua Aktivitas", group: 'aktivitas' },
    component: Activity,
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/user_setting",
    meta: { pageTitle: "Pengaturan Pengguna" },
    component: UserEdit,
    beforeEnter: [titleChanger, isTokenExist],
  },
  {
    path: "/",
    meta: { pageTitle: "Beranda", group: 'beranda' },
    component: Dashboard,
    beforeEnter: [titleChanger, isTokenExist],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from) => {
    if (to.fullPath !== from.fullPath) {
      return window.scrollTo(0, 0)
    }
    return window.scrollTo(0, 0)
  },
  routes,
})

export default router