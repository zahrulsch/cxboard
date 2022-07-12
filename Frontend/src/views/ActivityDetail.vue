<script lang="ts" setup>
import Layout from '../components/layout/Layout.vue'
import CommonHeader from '../components/common/CommonHeader.vue'
import noactivity from '../assets/map.png'
import { useCQuery } from '../apis/customQuery'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NImage, NDivider } from 'naive-ui'

const route = useRoute()
const { data, isLoading } = useCQuery('getActivity', '/activities', 'get', computed(() => +route.params.id))

const activity = computed(() => {
  if (data.value?.data) {
    return data.value.data
  }
  return null
})
</script>

<template>
  <layout>
    <div v-if="activity && !isLoading" class="single-activity gap-y-3">
      <common-header font-weight="semibold" class="mt-2 px-1">Detail Aktivitas</common-header>
      <div class="single-activity-wrapper gap-y-3 gap-x-3">

        <div class="left gap-y-3">
          <div class="is-flex is-flex-direction-column gap-y-3">
            <div class="data gap-y-6 radius-6">
              <span class="data-label font-secondary size-6 color-primary-5">Nama Aktivitas</span>
              <span class="data-value size-3 is-capitalized">{{activity.name}}</span>
            </div>
            <div class="data gap-y-6 radius-6">
              <span class="data-label font-secondary size-6 color-primary-5">Status</span>
              <span class="data-value size-3 is-capitalized">{{activity.status}}</span>
            </div>
            <div class="data gap-y-6 radius-6">
              <span class="data-label font-secondary size-6 color-primary-5">Tempat</span>
              <span class="data-value size-3 is-capitalized">{{activity.venue}}</span>
            </div>
            <div class="data gap-y-6 radius-6">
              <span class="data-label font-secondary size-6 color-primary-5">Jumlah Peserta</span>
              <span class="data-value size-3 is-capitalized">{{activity.employees.length}} orang</span>
            </div>
            <div class="data gap-y-6 radius-6">
              <span class="data-label font-secondary size-6 color-primary-5">Diselenggarakan Pada</span>
              <span class="data-value size-3 is-capitalized">{{activity.employees.length}} orang</span>
            </div>
            <div class="data gap-y-6 radius-6">
              <span class="data-label font-secondary size-6 color-primary-5">Detail</span>
              <span class="data-value size-3 is-capitalized">{{activity.detail || '-'}}</span>
            </div>
          </div>
          <n-divider class="my-1" />
          <div>
            <common-header font-weight="semibold">Peserta</common-header>
          </div>
        </div>

        <n-divider vertical class="mx-1 v-dvd" style="height: auto;" />

        <div class="right">
          <div class="activity-image radius-7">
            <n-image 
              :src="activity.photo || noactivity"
              class="radius-7"
            />
          </div>
        </div>

      </div>
    </div>
  </layout>
</template>

<style lang="scss">
.single-activity {
  display: flex;
  flex-direction: column;
  &-wrapper {
    display: flex;
    flex-direction: column-reverse;
    @include res('medium') {
      flex-direction: row;
      width: 100%;
    }
    & .v-dvd {
      display: none;
      @include res('medium') {
        display: inherit;
      }
    }
    & .left {
      display: flex;
      flex-direction: column;
    }
    & .right {
      display: flex;
      flex-direction: column;
      & .activity-image {
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: rgb(23, 23, 23);
        width: 100%;
      }
    }
  }
}
.data {
  display: flex;
  flex-direction: column;
  padding: .375rem .52rem;
  background-color: var(--bg-primary);
}
</style>