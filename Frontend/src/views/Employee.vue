<script lang="ts">
import { computed, defineComponent } from 'vue';
import { NDivider, NButton, NIcon, NImage } from 'naive-ui';
import { Add16Regular } from '@vicons/fluent';
import { useCQuery } from '../apis/customQuery';
import { kebab } from 'case';
import EmployeeFilter from '../components/employee/EmployeeFilter.vue';
import Layout from '../components/layout/Layout.vue';
import SectionPanel from '../components/layout/SectionPanel.vue';
import EmployeeCard from '../components/employee/EmployeeCard.vue';
import EmployeeLevelCard from '../components/employee/EmployeeLevelCard.vue';
import CommonCardLoader from '../components/common/CommonCardLoader.vue';
import CommonHeader from '../components/common/CommonHeader.vue';
import CommonPagination from '../components/common/CommonPagination.vue';
import responsibility from '../assets/responsibility.png'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Employee',
  components: {
    Layout,
    SectionPanel,
    EmployeeFilter,
    EmployeeCard,
    EmployeeLevelCard,
    NDivider,
    NButton,
    Add16Regular,
    CommonCardLoader,
    NIcon,
    NImage,
    CommonHeader,
    CommonPagination
  },
  setup: function() {
    const route = useRoute()
    const { data: employees, isLoading: loadEmps } = useCQuery('getEmployees', '/employees/list', 'get', null, computed(() => ({ pageNumber: route.query.page, pageSize: route.query.pagesize })))
    const { data: roles, isLoading: loadRoles} = useCQuery('getRoles', '/roles/list', 'get')
    const totalPage = computed(() => {
      if (employees.value?.data.count) {
        return Math.ceil(employees.value.data.count/Number(route.query.pagesize))
      }
      return 0
    })
    return {
      employees,
      loadEmps,
      roles,
      loadRoles,
      kebab,
      responsibility,
      totalPage
    }
  },
  computed: {
    croles: function() {
      let r = <{name: string; count: number}[]>[]
      if (this.roles) {
        r = this.roles.data.map(r => ({count: r.employees.length, name: r.name})).sort((a, b) => a.count - b.count)
      }
      return r
    }
  },
  beforeRouteUpdate: function(to) {
    if (!to.query.page) this.$router.push({ path: '/employees', query: { ...this.$route.query, page: 1 } })
    if (!to.query.pagesize) this.$router.push({ path: '/employees', query: { ...this.$route.query, pagesize: 20 } })
  }
})
</script>

<template>
  <layout>
    <section-panel class="mt-4">
      <common-header font-weight="semibold">Level Jabatan</common-header>
      <div class="level-list" v-if="loadRoles">
        <common-card-loader v-for="i in 2" :key="i" :height="25"/>
      </div>
      <div class="level-list" v-if="croles.length && !loadRoles">
        <EmployeeLevelCard :class="`c-${kebab(i.name)}`" v-for="i in croles" :key="i.name" :level="i.name" :count="i.count"/>
      </div>
      <div class="no-roles" v-if="!croles.length && !loadRoles">
        <n-image class="no-roles-img" width="45" :src="responsibility"/>
        <span class="size-5 color-primary-6">Belum ada role jabatan</span>
      </div>
    </section-panel>
    <NDivider />
    <section-panel class="mt-4 is-relative">
      <div class="is-flex is-align-items-end is-justify-content-space-between">
        <common-header font-weight="semibold">Daftar Pegawai</common-header>
        <router-link to="/add_employee" class="is-flex ia-align-items-center">
          <n-button
            size="small"
            type="primary"
          >
            <template #icon>
              <n-icon>
                <Add16Regular class="size-4" />
              </n-icon>
            </template>
            <span class="font-secondary size-5 has-text-weight-semibold">Tambah Karyawan</span>
          </n-button>
        </router-link>
      </div>
      <div style="min-height: 500px;" class="is-flex mt-2 is-flex-direction-column gap-y-2">
        <employee-filter />
        <div class="emplist">
          <template v-if="loadEmps">
            <common-card-loader v-for="i in 3" :key="i" :height="75"/>
          </template>
          <EmployeeCard class="is-clickable" v-for="p in employees?.data.employees" :key="p.id" :image="p.photo" @click="$router.push(`/employees/${p.id}`)" :name="p.name" :level="p.teams.map(t => ({name: t.role}))" :teamcount="p.teams.map(e => e.name).filter((e, i, s) => s.indexOf(e) === i).length" />
        </div>
        <div class="mt-3 is-flex is-justify-content-center">
          <common-pagination
            :page="Number($route.query.page)" 
            :page-count="totalPage"
            @update-page="page => $router.push({ path: '/employees/', query: { ...$route.query, page: page } })"
          />
        </div>
      </div>
    </section-panel>
  </layout>
</template>

<style lang="scss" scoped>

.level-list {
  display: grid;
  gap: .5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  @include res('small') {
    grid-template-columns: repeat(3, 1fr);
  }
  @include res('medium') {
    grid-template-columns: repeat(4, 1fr);
  }
  @include res('large') {
    grid-template-columns: repeat(5, 1fr);
  }
  @include res('xlarge') {
    grid-template-columns: repeat(7, 1fr);
  }
}
.emplist {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(1fr, auto);
  align-content: start;
  gap: .6rem;

  @include res('small') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include res('medium') {
    grid-template-columns: repeat(3, 1fr);
  }
  @include res('large') {
    grid-template-columns: repeat(4, 1fr);
  }
}
.no-roles {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: .65rem;
  min-height: 200px;

  & &-img {
    filter: brightness(.85);
    -webkit-filter: brightness(.85);
    -moz-filter: brightness(.85);
    -o-filter: brightness(.85);
  }
}
</style>