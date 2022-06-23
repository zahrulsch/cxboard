<script lang="ts">
import { defineComponent } from 'vue';
import { NDivider, NButton, NIcon } from 'naive-ui';
import { ArrowCircleRight20Regular } from '@vicons/fluent'
import { useCQuery } from '../apis/customQuery';
import EmployeeCard from '../components/employee/EmployeeCard.vue';
import ActivityCardGeneral from '../components/activity/ActivityCardGeneral.vue';
import Layout from '../components/layout/Layout.vue'

export default defineComponent({
  name: 'Dashboard',
  setup: function() {
    const { data: employees } = useCQuery('getEmployees', '/employees/list/', 'get', null)
    return {
      employees
    }
  },
  components: {
    EmployeeCard,
    NDivider,
    ActivityCardGeneral,
    NButton,
    ArrowCircleRight20Regular,
    NIcon,
    Layout
  }
})
</script>

<template>
  <layout>
    <div class=" py-2 px-1 is-flex is-flex-direction-column">
      <h4 class="size-4 mb-3 color-secondary-0 has-text-weight-semibold font-secondary">Daftar Pegawai</h4>
      <div class="employee-list mb-4">
        <employee-card v-for="employee in employees?.data" :key="employee.id" level="leader" :image="employee.photo || ''" :name="employee.name"/>
      </div>
      <n-button
        type="primary"
        size="small"
        class="radius-5 action-button"
        icon-placement="right"
        quaternary
        @click="$router.push('/employees')"
      >
        <template #icon>
          <n-icon>
            <ArrowCircleRight20Regular />
          </n-icon>
        </template>
        <span class="font-secondary size-5">Selengkapnya</span>
      </n-button>
      <n-divider />
      <h4 class="size-4 mb-3 color-secondary-0 has-text-weight-semibold font-secondary">Aktivitas Terakhir</h4>
      <div class="activity-list mb-4">
        <ActivityCardGeneral v-for="i in 4" :key="i" />
      </div>
      <n-button
        icon-placement="right"
        type="primary"
        size="small"
        class="radius-5 action-button"
        quaternary
      >
        <template #icon>
          <n-icon>
            <ArrowCircleRight20Regular />
          </n-icon>
        </template>
        <span class="font-secondary size-5">Selengkapnya</span>
      </n-button>
    </div>
  </layout>
</template>

<style lang="scss" scoped>
.employee-list {
  display: grid;
  width: 100%;
  gap: .65rem;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(50px, 1fr);
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
.activity-list {
  display: grid;
  width: 100%;
  gap: .65rem;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(50px, 1fr);

  @include res('small') {
    grid-template-columns: repeat(3, 1fr);
  }
  @include res('medium') {
    grid-template-columns: repeat(4, 1fr);
  }
  @include res('xlarge') {
    grid-template-columns: repeat(5, 1fr);
  }
}

.action-button {
  align-self: center;
  @include res('medium') {
    align-self: start;
  }
}
</style>