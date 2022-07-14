<script lang="ts" setup>
import Layout from '../components/layout/Layout.vue'
import CommonHeader from '../components/common/CommonHeader.vue'
import CommonCardLoader from '../components/common/CommonCardLoader.vue'
import CommonLoader from '../components/common/CommonLoader.vue'
import noactivity from '../assets/map.png'
import { useCQuery } from '../apis/customQuery'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NImage, NDivider } from 'naive-ui'

const route = useRoute()
const { data, isLoading } = useCQuery('getActivity', '/activities', 'get', computed(() => +route.params.id))
const { data: listOfParticipant, isLoading: loadParticipants } = useCQuery('getParticipants', '/participants/activities', 'get', computed(() => +route.params.id))

const activity = computed(() => {
  if (data.value?.data) {
    return data.value.data
  }
  return null
})

const participants = computed(() => {
  if (listOfParticipant.value?.data) {
    return listOfParticipant.value.data
  }
  return []
})

const startDate = computed(() => {
  if (data.value?.data) {
    const date = data.value.data.startDate
    if (date) {
      return new Date(date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
    }
    return 'Tidak diketahui'
  }
  return 'Tidak diketahui'
})

const endDate = computed(() => {
  if (data.value?.data) {
    const date = data.value.data.endDate
    if (date) {
      return new Date(date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
    }
    return 'Tidak diketahui'
  }
  return 'Tidak diketahui'
})
</script>

<template>
  <layout>
    <common-loader style="min-height: 700px;" v-if="isLoading" />
    <div v-if="activity && !isLoading" class="single-activity gap-y-3">
      <common-header font-weight="semibold" class="mt-2">Detail Aktivitas</common-header>
      <div class="single-activity-wrapper gap-y-3 gap-x-3">

        <div class="left gap-y-3">
          <div class="is-flex is-flex-direction-column gap-y-3">
            <div class="data gap-y-6">
              <span class="data-label font-secondary size-5 color-primary-5 has-text-weight-medium">Nama Aktivitas</span>
              <span class="data-value size-3 is-capitalized">{{activity.name}}</span>
            </div>
            <div class="data gap-y-6">
              <span class="data-label font-secondary size-5 color-primary-5 has-text-weight-medium">Status</span>
              <span class="data-value size-3 is-capitalized">{{activity.status}}</span>
            </div>
            <div class="data gap-y-6">
              <span class="data-label font-secondary size-5 color-primary-5 has-text-weight-medium">Tempat</span>
              <span class="data-value size-3 is-capitalized">{{activity.venue}}</span>
            </div>
            <div class="data gap-y-6">
              <span class="data-label font-secondary size-5 color-primary-5 has-text-weight-medium">Jumlah Peserta</span>
              <span class="data-value size-3 is-capitalized">{{activity.employees.length}} orang</span>
            </div>
            <div class="data gap-y-6">
              <span class="data-label font-secondary size-5 color-primary-5 has-text-weight-medium">Diselenggarakan Pada</span>
              <span class="data-value size-3 is-capitalized">{{startDate}} - {{endDate}}</span>
            </div>
            <div class="data gap-y-6">
              <span class="data-label font-secondary size-5 color-primary-5 has-text-weight-medium">Detail</span>
              <span class="data-value size-3 is-capitalized">{{activity.detail || '-'}}</span>
            </div>
          </div>
          <n-divider class="my-1" />
          <div class="is-flex is-flex-direction-column gap-y-3">
            <common-header font-weight="semibold">Peserta</common-header>
            <div class="list-of-participant">
              <template v-if="loadParticipants">
                <common-card-loader v-for="i in 2" :key="i" :height="25" />
              </template>
              <template v-else>
                <router-link class="is-flex" v-for="s in participants" :key="s.id" :to="`/employees/${s.id}`">
                  <div class="link-employee px-3 py-2">
                    <span class="font-secondary has-text-weight-medium size-3">{{s.name}}</span>
                  </div>
                </router-link>
              </template>
            </div>
          </div>
        </div>

        <n-divider vertical class="mx-1 v-dvd" style="height: auto;" />

        <div class="right">
          <span class="data-label font-secondary size-5 has-text-weight-medium color-primary-4">Gambar Utama</span>
          <div class="activity-image">
            <n-image 
              :src="activity.photo || noactivity"
            />
          </div>
        </div>

      </div>
    </div>
  </layout>
</template>

<style lang="scss">
.link-employee {
  color: #c4c4c4;
  transition: 150ms ease;
  outline: 1px solid rgba(46, 46, 46, 0);
  background-color: rgb(0, 64, 107);
  display: flex;
  width: 100%;
  &:hover {
    background-color: rgb(2, 76, 126);
    color: #dbdbdb;
    outline: 1px solid rgb(134, 134, 134);
  }
}
.list-of-participant {
  display: grid;
  gap: var(--space-3);
  @include res('small') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include res('large') {
    grid-template-columns: repeat(3, 1fr);
  }
  @include res('xxlarge') {
    grid-template-columns: repeat(4, 1fr);
  }
}
.single-activity {
  display: flex;
  flex-direction: column;
  &-wrapper {
    display: flex;
    flex-direction: column-reverse;
    @include res('small') {
      flex-direction: row;
      width: 100%;
    }
    & .v-dvd {
      display: none;
      @include res('small') {
        display: inherit;
      }
    }
    & .left {
      display: flex;
      flex-direction: column;
      @include res('small') {
        flex: 1;
      }
    }
    & .right {
      display: flex;
      flex-direction: column;
      row-gap: var(--space-3);
      @include res('small') {
        width: 30%;
      }
      @include res('medium') {
        width: 30%;
      }
      @include res('large') {
        width: 25%;
      }
      @include res('xlarge') {
        width: 23%;
      }
      @include res('xxlarge') {
        width: 20%;
      }
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