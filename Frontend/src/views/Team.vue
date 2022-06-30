<script setup lang="ts">
import { useCQuery } from '../apis/customQuery';
import { NButton, NIcon } from 'naive-ui';
import { Add16Filled } from '@vicons/fluent'
import Layout from '../components/layout/Layout.vue';
import NoTeam from '../components/team/NoTeam.vue';
import TeamCard from '../components/team/TeamCard.vue';
import CommonFetchingError from '../components/common/CommonFetchingError.vue'
import SectionPanel from '../components/layout/SectionPanel.vue';
import CommonCardLoader from '../components/common/CommonCardLoader.vue';

const { data: teams, isLoading, isError } = useCQuery('getTeams', '/teams/list', 'get')
</script>

<template>
  <layout>
    <common-fetching-error v-if="isError" />
    <div class="teams-list" v-if="isLoading">
      <common-card-loader v-for="i in 5" :key="i" :height="75" speed="medium" />
    </div>
    <template v-if="teams">
      <no-team v-if="!teams.data.length"/>
      <section-panel class="mt-3 teams" v-else>
        <template #title>Daftar Team</template>
        <router-link class="add-button" to="/teams/create">
          <n-button 
            class="pr-1"
            size="small"
            :bordered="false"
            type="info"
            text
          >
            <template #icon>
              <n-icon>
                <add16-filled class="size-4" />
              </n-icon>
            </template>
            <span class="font-secondary size-5">Tambah Tim</span>
          </n-button>
        </router-link>
        <div class="teams-list px-1">
          <team-card 
            v-for="k in teams.data" 
            :key="k.id" 
            :code="k.code" 
            :employee-count="k._count.employees"
            :image="k.image"
            :name="k.name"
            :team-id="k.id"
          />
        </div>
      </section-panel>
    </template>
  </layout>
</template>

<style lang="scss" scoped>
.teams {
  min-height: 68vh;
  position: relative;
  &-list, &-loader {
    display: grid;
    gap: .5rem;
    @include res('small') {
      grid-template-columns: repeat(2, 1fr);
    }
    @include res('medium') {
      grid-template-columns: repeat(3, 1fr);
    }
    @include res('xlarge') {
      grid-template-columns: repeat(4, 1fr);
    }
    @include res('xxlarge') {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  & .add-button {
    position: absolute;
    right: 0;
  }
}
</style>