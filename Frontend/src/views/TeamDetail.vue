<script lang="ts" setup>
import Layout from '../components/layout/Layout.vue';
import CommonFetchingError from '../components/common/CommonFetchingError.vue';
import meeting from '../assets/meeting.png'
import CommonLoader from '../components/common/CommonLoader.vue';
import CommonHeader from '../components/common/CommonHeader.vue';
import { useRoute } from 'vue-router'
import { useCQuery } from '../apis/customQuery';
import { NImage, NDivider, NEllipsis } from 'naive-ui'
import { computed } from 'vue';
import { kebab } from 'case'

const { id } = useRoute().params
const { data: team, isLoading, isError } = useCQuery('getTeam', '/teams', 'get', +id)

const cbgimage = computed(() => {
  if (team.value?.data.image) {
    return `url("${team.value.data.image}")`
  }
  return 'url("/src/assets/meeting.png")'
})

</script>

<template>
  <layout>
    <common-fetching-error v-if="isError && !isLoading" class="p-6" style="min-height: 78vh; align-items: center; justify-content: center;"/>
    <common-loader style="min-height: 700px;" v-if="isLoading"/>
    <div class="teamdetail gap-y-3 mt-3" v-if="team?.data">
      <common-header font-weight="semibold">Detail Team - {{team.data.name}}</common-header>
      <div class="details gap-x-3 gap-y-3">
        <div class="details-photo">
          <div class="details-photo-layer">
            <n-image 
              :src="team.data.image || meeting"
            />
          </div>
        </div>
        <n-divider class="mx-1" style="height: auto" vertical />
        <div class="details-detail gap-y-3">
          <div class="detailrow px-2 py-1">
            <span class="font-secondary size-6 color-primary-5 has-text-weight-medium">Nama Team</span>
            <p class="size-4">{{team.data.name}}</p>
          </div>
          <div class="detailrow px-2 py-1">
            <span class="font-secondary size-6 color-primary-5 has-text-weight-medium">Kode Team</span>
            <p class="size-4">{{team.data.code}}</p>
          </div>
          <div class="detailrow px-2 py-1">
            <span class="font-secondary size-6 color-primary-5 has-text-weight-medium">Jumlah Anggota</span>
            <p class="size-4">{{team.data.employees?.length}}</p>
          </div>
          <div class="detailrow px-2 pt-1 pb-2">
            <span class="font-secondary size-6 color-primary-5 has-text-weight-medium">Alamat</span>
            <p class="size-4">{{team.data.address || "-"}}</p>
          </div>
        </div>
      </div>
      <n-divider class="dvd my-1"/>
      <div class="teammember gap-y-2">
        <common-header font-weight="semibold">Anggota Team</common-header>
        <div class="teammember-list">
          <div v-for="e in team.data.employees" :key="e.id" class="member-list p-2">
            <router-link class="link-overlay" :to="`/employees/${e.employee.id}`"></router-link>
            <div 
              class="image"
              :style="{
                backgroundImage: e.employee.photo ? `url('${e.employee.photo}')` : `url('/src/assets/nophotos.png')`
              }"
            >
            </div>
            <n-ellipsis style="max-width: 100%;" class="mt-1">
              <p class="font-secondary has-text-weight-medium size-3">{{e.employee.name}}</p>
            </n-ellipsis>
            <span :class="[kebab(e.role.name), 'role font-secondary mt-1 px-1 size-5']">{{e.role.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<style lang="scss" scoped>
.role {
  color: rgb(46, 46, 46);
  font-weight: 600;
}
.teammember {
  display: flex;
  flex-direction: column;

  & &-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(10px, 1fr));
    gap: .65rem;

    @include res('small') {
      grid-template-columns: repeat(4, minmax(10px, 1fr));
    }
    @include res('medium') {
      grid-template-columns: repeat(6, minmax(10px, 1fr));
    }
    @include res('large') {
      grid-template-columns: repeat(8, minmax(10px, 1fr));
    }
    @include res('xxlarge') {
      grid-template-columns: repeat(10, minmax(10px, 1fr));
      gap: .75rem;
    }

    & .member-list {
      &:hover {
        box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.05);
      }
      display: flex;
      flex-direction: column;
      align-items: start;
      background: var(--bg-primary);
      position: relative;
      transition: .25s ease;
      & .link-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
      }

      & .image {
        background-repeat: no-repeat;
        width: 100%;
        padding-top: 100%;
        background-position: center;
        background-size: contain;
        background-color: rgba(51, 51, 51, 0.151);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
      }
    }
  }
}
.detailrow {
  background: var(--bg-primary);
}
.teamdetail {
  display: flex;
  flex-direction: column;
  &-loading {
    display: flex;
    flex-direction: column;
  }
  .details {
    display: flex;
    flex-direction: column;
    @include res('small') {
      flex-direction: row-reverse;
    }
    &-detail {
      display: flex;
      flex-direction: column;
      @include res('small') {
        flex: 1;
      }
    }
    &-photo {
      width: 100%;
      height: 300px;
      @include res('small') {
        width: 30%;
        height: auto;
      }
      @include res('medium') {
        width: 25%;
        height: auto;
      }
      @include res('large') {
        width: 28%;
        height: auto;
      }
      @include res('xlarge') {
        width: 26%;
        height: auto;
      }
      @include res('xxlarge') {
        width: 25%;
        height: auto;
      }
      background-image: v-bind(cbgimage);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      &-layer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.801);
        backdrop-filter: blur(2px);
        -moz-backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        -o-backdrop-filter: blur(2px);
      }
    }
  }
}
</style>