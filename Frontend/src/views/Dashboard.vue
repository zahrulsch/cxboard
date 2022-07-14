<script lang="ts">
import { defineComponent } from 'vue';
import { NDivider, NButton, NIcon } from 'naive-ui';
import { ArrowCircleRight20Regular } from '@vicons/fluent'
import { useCQuery } from '../apis/customQuery';
import EmployeeCard from '../components/employee/EmployeeCard.vue';
import Layout from '../components/layout/Layout.vue'
import CommonFetchingError from '../components/common/CommonFetchingError.vue';
import EmployeeZero from '../components/employee/EmployeeZero.vue';
import CommonCardLoader from '../components/common/CommonCardLoader.vue';
import ActivityZero from '../components/activity/ActivityZero.vue';
import CommonHeader from '../components/common/CommonHeader.vue';
import ActivitySingleCard from '../components/activity/ActivitySingleCard.vue';

export default defineComponent({
  name: 'Dashboard',
  setup: function() {
    const { data: employees, isLoading, isError } = useCQuery('getEmployees', '/employees/list/', 'get')
    const { data: activities, isLoading: loadActivities } = useCQuery('getActivities', '/activities/list', 'get')
    return {
      employees,
      isLoading, 
      isError,
      activities,
      loadActivities
    }
  },
  components: {
    EmployeeCard,
    NDivider,
    NButton,
    ArrowCircleRight20Regular,
    NIcon,
    CommonFetchingError,
    EmployeeZero,
    Layout,
    CommonCardLoader,
    ActivityZero,
    CommonHeader,
    ActivitySingleCard
  }
})
</script>

<template>
  <layout>
    <div class=" py-2 px-1 is-flex is-flex-direction-column">
      <common-header class="mb-3" font-weight="semibold">Daftar Pegawai</common-header>
      <common-fetching-error v-if="!isLoading && isError" />
      <div class="employee-list mb-4" v-if="isLoading">
        <CommonCardLoader  v-for="i in 5" :key="i" :height="100"/>
      </div>
      <div class="employee-list mb-4" v-if="employees">
        <employee-zero class="zero" v-if="!employees.data.length" />
        <employee-card v-for="employee in employees.data" :key="employee.id" class="is-clickable" @click="$router.push(`/employees/${employee.id}`)" :level="employee.teams.map(t => ({name: t.role}))" :teamcount="employee.teams.map(e => e.name).filter((e, i, s) => s.indexOf(e) === i).length" :image="employee.photo || ''" :name="employee.name"/>
      </div>
      <router-link to="/employees" class="is-inline-flex">
        <n-button
          v-if="employees?.data.length"
          type="primary"
          size="small"
          class="radius-5 action-button"
          icon-placement="right"
          secondary
        >
          <template #icon>
            <n-icon>
              <ArrowCircleRight20Regular />
            </n-icon>
          </template>
          <span class="font-secondary size-5">Selengkapnya</span>
        </n-button>
      </router-link>
      <n-divider />
      <common-header class="mb-3" font-weight="semibold">Aktivitas Terakhir</common-header>
      <div class="activity-list mb-4">
        <template v-if="activities?.data.length">
          <activity-single-card 
            v-for="k in activities.data"
            :id="k.id"
            :name="k.name"
            :place="k.venue"
            :pic="k.photo"
            :date="k.startDate"
            :status="k.status"
          />
        </template>
        <template v-else>
          <ActivityZero class='zero'/>
        </template>
      </div>
      <router-link to="/activities">
        <n-button
          v-if="activities?.data.length"
          icon-placement="right"
          type="primary"
          size="small"
          class="radius-5 action-button"
          secondary
        >
          <template #icon>
            <n-icon>
              <ArrowCircleRight20Regular />
            </n-icon>
          </template>
          <span class="font-secondary size-5">Selengkapnya</span>
        </n-button>
      </router-link>
    </div>
  </layout>
</template>

<style lang="scss" scoped>
.employee-list {
  .zero {
    grid-column: 1 / span 4;
    min-height: 400px;
  }
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
  .zero {
    grid-column: 1 / span 8;
    min-height: 400px;
  }
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
    grid-template-columns: repeat(8, 1fr);
  }
}

.action-button {
  align-self: center;
  @include res('medium') {
    align-self: start;
  }
}
</style>