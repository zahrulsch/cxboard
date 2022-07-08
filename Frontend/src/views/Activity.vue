<script setup lang="ts">
import { NButton } from 'naive-ui'
import { useCQuery } from '../apis/customQuery';
import Layout from '../components/layout/Layout.vue'
import ActivitySingleCard from '../components/activity/ActivitySingleCard.vue'
import ActivityFilter from '../components/activity/ActivityFilter.vue';
import { computed } from 'vue';

const { data } = useCQuery('getActivities', '/activities/list', 'get')
const activities = computed(() => {
  if (data.value) {
    return data.value.data
  }
  return null
})
</script>

<template>
  <layout>
    <div class="activities mt-2">
      <div class="activities-head mt-1">
        <h4 class="size-4 has-text-weight-semibold font-secondary color-secondary-0">Semua Aktivitas</h4>
        <router-link class="is-inline-flex" to="/activities/create">
          <n-button
            size="small"
            type="primary"
          >
            <span class="font-secondary size-4 has-text-weight-medium">Tambah Aktivitas</span>
          </n-button>
        </router-link>
      </div>
      <!-- <n-divider class="my-1" /> -->
      <activity-filter />
      <div class="activity-list mt-2">
        <activity-single-card v-for="i in activities" :key="i" />
      </div>
    </div>
  </layout>
</template>

<style lang="scss">
.activities {
  display: flex;
  flex-direction: column;
  row-gap: var(--space-3);
  & &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.activity-list {
  display: grid;
  padding-inline: 5px;
  grid-auto-rows: minmax(100px, 1fr);
  gap: .6rem;
  grid-template-columns: repeat(2, 1fr);
  @include res('small') {
    padding-inline: 0px;
    grid-template-columns: repeat(3, 1fr);
  }
  @include res('large') {
    grid-template-columns: repeat(4, 1fr);
  }
  @include res('xlarge') {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>