<script lang="ts">
import { defineComponent } from 'vue';
import { NDivider, NButton, NIcon } from 'naive-ui';
import { Add16Regular } from '@vicons/fluent';
import EmployeeFilter from '../components/employee/EmployeeFilter.vue';
import Layout from '../components/layout/Layout.vue';
import SectionPanel from '../components/layout/SectionPanel.vue';
import EmployeeCard from '../components/employee/EmployeeCard.vue';
import EmployeeLevelCard from '../components/employee/EmployeeLevelCard.vue';

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
    NIcon
  },
  data: () => ({
    emps: [
      {
        name: 'tim leader',
        count: 12
      },
      {
        name: 'Customer Service',
        count: 80
      },
      {
        name: 'uploader',
        count: 6
      },
      {
        name: 'admin',
        count: 7
      },
      {
        name: 'keuangan',
        count: 9
      },
    ],
    emps_data: [
      {
        name: 'tim leader',
        count: 12,
        nm: 'Muhammad Zahrul Wathoni'
      },
      {
        name: 'Customer Service',
        count: 80,
        nm: 'Indra Kurniawan'
      },
      {
        name: 'uploader',
        count: 6,
        nm: 'Bima Septian'
      },
      {
        name: 'admin',
        count: 7,
        nm: 'Heri Santoso'
      },
      {
        name: 'keuangan',
        count: 9,
        nm: 'Imdad Mustari'
      },
    ]
  })
})
</script>

<template>
  <layout>
    <section-panel class="mt-4">
      <template #title>Level Jabatan</template>
      <div class="level-list">
        <EmployeeLevelCard v-for="i in emps" :key="i.name" :level="i.name" :count="i.count" />
      </div>
    </section-panel>
    <NDivider />
    <section-panel class="mt-4 is-relative">
      <template #title>Daftar Karyawan</template>
      <n-button
        class="radius-3 add-employee"
        size="small"
        type="info"
        @click="$router.push('/add_employee')"
        quaternary
      >
        <template #icon>
          <n-icon>
            <Add16Regular class="size-3" />
          </n-icon>
        </template>
        <span class="font-secondary size-5 has-text-weight-medium">Tambah Karyawan</span>
      </n-button>
      <div class="is-flex mt-2 is-flex-direction-column gap-y-2">
        <employee-filter />
        <EmployeeCard v-for="i in emps_data" :key="i.count" :name="i.nm" :level="i.name" />
      </div>
    </section-panel>
  </layout>
</template>

<style lang="scss" scoped>
.add-employee {
  position: absolute;
  right: 0;
}
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
</style>