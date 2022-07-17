<script lang="ts" setup>
import { NIcon, NButton, NDivider } from 'naive-ui'
import { PeopleTeam16Filled, Open16Regular, Edit16Filled } from '@vicons/fluent'

interface TeamCardProp {
  name?: string
  employeeCount?: number | null
  image?: string | null
  code?: string
  teamId: number
}

const props = defineProps<TeamCardProp>()
</script>

<template>
  <div class="tim-card gap-x-2 p-2 bg-panel-primary">
    <div :style="{ backgroundImage: `url('${props.image || 'https://ik.imagekit.io/pv5j1g25r/download-icon-group_people_team_users_icon-1320196240876938595_512_xbk2gytLr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656044876345'}')` }" class="tim-card-image">
    </div>
    <div class="tim-card-detail gap-y-5">
      <p class="size-3 has-text-weight-medium font-secondary">{{props.name || '-' }}</p>
      <div class="is-flex is-align-items-center gap-x-6 font-secondary">
        <n-icon>
          <PeopleTeam16Filled class="color-primary-7 size-4" />
        </n-icon>
        <span class="size-5 has-text-weight-normal color-primary-4">{{props.employeeCount || 0}} anggota</span>
      </div>
      <div class="is-flex gap-x-5 is-align-items-center">
        <router-link class="is-inline-flex" :to="`/teams/${props.teamId}`">
          <n-button
            size="tiny"
            :bordered="false"
            type="primary"
            tertiary
          >
            <template #icon>
              <n-icon>
                <Open16Regular />
              </n-icon>
            </template>
            <span class="font-secondary size-5 pr-1">Detail</span>
          </n-button>
        </router-link>
        <router-link class="is-inline-flex" :to="`/teams/edit/${props.teamId}`">
          <n-button
            size="tiny"
            :bordered="false"
            type="warning"
            tertiary
          >
            <template #icon>
              <n-icon>
                <Edit16Filled class="size-4" />
              </n-icon>
            </template>
            <span class="font-secondary size-5 pr-1">Edit</span>
          </n-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tim-card {
  display: flex;
  align-items: center;
  transition: .25s ease;
  &:hover {
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.075);
  }
  &-image {
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    background-color: rgba(39, 39, 39, 0.397);
    background-position: center;
    background-size: cover;
    padding: .5rem;
  }
  &-detail {
    display: flex;
    flex-direction: column;
  }
}
</style>