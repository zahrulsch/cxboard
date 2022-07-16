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
import CommonHeader from '../components/common/CommonHeader.vue';

const { data: teams, isLoading, isError } = useCQuery('getTeams', '/teams/list', 'get')
</script>

<template>
  <layout>
    <common-fetching-error style="min-height: 75vh;" v-if="isError" />
    <template v-if="teams">
      <section-panel class="mt-3 teams">
        <common-header font-weight="semibold">Daftar Team</common-header>
        <router-link class="add-button" to="/teams/create">
          <n-button 
            size="small"
            :bordered="false"
            type="primary"
          >
            <span class="has-text-weight-semibold font-secondary size-4">Tambah Tim</span>
          </n-button>
        </router-link>
        <template v-if="teams.data.length && !isLoading">
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
        </template>
        <template v-if="isLoading">
          <div class="teams-list px-1">
            <common-card-loader
              v-for="k in 2" 
              :key="k"
            />
          </div>
        </template>
        <template v-if="!teams.data.length && !isLoading">
          <no-team style="min-height: 700px;"/>
        </template>
      </section-panel>
    </template>
  </layout>
</template>

<style lang="scss" scoped>
.teams {
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