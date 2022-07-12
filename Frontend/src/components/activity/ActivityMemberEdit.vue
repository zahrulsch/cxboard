<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import { NInput, NDivider, NCheckbox, NImage } from 'naive-ui'
import { Query } from '../../apis/customQuery'
import { debounceThis } from '../../helpers/debounceThis'
import { requester } from '../../apis/generalRequester';
import { useCQuery } from '../../apis/customQuery'
import CommonHeader from '../common/CommonHeader.vue';
import ActivityMemberSelect from './ActivityMemberSelect.vue';
import CommonCardLoader from '../common/CommonCardLoader.vue';
import errorpng from '../../assets/error.png'

const props = defineProps<{
  employees?: number[]
}>()

const emits = defineEmits<{
  ( e: 'update:employees', value: number[] ): void
}>()

const employees = ref<Query['getEmployees']['response']>([])
const loading = ref(false)
const query = reactive({ name: '', teams: ([] as number[]), roles: ([] as number[]) })
const teamSelections = ref<Query['getTeams']['response']>([])
const roleSelections = ref<Query['getRoles']['response']>([])

const employeesRequester = (query: any) => {
  requester<{data: Query['getEmployees']['response']}>('/employees/list/', 'get', null, query, {
    onSuccess: ({ data }) => {
      employees.value = data
    },
    onLoading: s => loading.value = s
  })
}

const onChecked = (v: boolean, id: number) => {
  if (v) {
    query.teams.push(id)
  } else {
    query.teams = query.teams.filter(t => t !== id)
  }
}

const onCheckedRole = (v: boolean, id: number) => {
  if (v) {
    query.roles.push(id)
  } else {
    query.roles = query.roles.filter(r => r !== id)
  }
}

const onCheckedSelection = (v: boolean, id: number) => {
  if (v) {
    if (props.employees) {
      emits('update:employees', [id, ...props.employees])
    }
  } else {
    if (props.employees) {
      emits('update:employees', [...props.employees.filter(e => e !== id)])
    }
  }
}

const employeesRequesterWithDelay = debounceThis(employeesRequester, 500)

watch(query, (q) => {
  employeesRequesterWithDelay(q)
})

const { isLoading: loadTeams } = useCQuery('getTeams', '/teams/list', 'get', null, null, {
  onSuccess: ({ data }) => {
    teamSelections.value = data
  },
  refetchOnWindowFocus: false
})
const { isLoading: loadRoles } = useCQuery('getRoles', '/roles/list', 'get', null, null, {
  onSuccess: ({ data }) => {
    roleSelections.value = data
  },
  refetchOnWindowFocus: false
})

employeesRequester(query)
</script>

<template>
  <div class="is-flex is-flex-direction-column gap-y-3">
    <common-header class="mb-2">Pilih Peserta - {{props.employees?.length || 0}} peserta dipilih</common-header>
    <div class="search-activity-member-wrapper">
      <div class="font-secondary size-3 search-activity-member">
        <span class="size-5 has-text-weight-medium">Filter Nama</span>
        <n-input 
          class="bg-panel-primary size-4 name"
          placeholder="Jay weinberg"
          v-model:value="query.name"
          :bordered="false"
          clearable
        />
        <span class="size-5 has-text-weight-medium mt-2">Team</span>
        <div class="is-flex is-flex-direction-column gap-y-3">
          <template v-if="loadTeams">
            <common-card-loader v-for="i in 3" :key="i" :height="18"/>
          </template>
          <n-checkbox 
            v-for="s in teamSelections"
            @update:checked="v => onChecked(v, s.id)"
            :checked="query.teams.includes(s.id)"
            class="size-4 has-text-weight-light"
            size="small"
          >{{s.name}}</n-checkbox>
        </div>
        <span class="size-5 has-text-weight-medium mt-2">Role Pegawai</span>
        <div class="is-flex is-flex-direction-column gap-y-3">
          <template v-if="loadRoles">
            <common-card-loader v-for="i in 3" :key="i" :height="18"/>
          </template>
          <n-checkbox 
            v-for="s in roleSelections"
            @update:checked="v => onCheckedRole(v, s.id)"
            :checked="query.roles.includes(s.id)"
            class="size-4 has-text-weight-light"
            size="small"
          >{{s.name}}</n-checkbox>
        </div>
      </div>
      <n-divider vertical class="v-dvd mx-0" />
      <div class="activity-member-list">
        <template v-if="!loading">
          <template v-if="employees.length">
            <activity-member-select v-for="p in employees" :name="p.name" :image="p.photo" :checked="props.employees?.includes(p.id)" @update:checked="v => onCheckedSelection(v, p.id)"/>
          </template>
          <div class="no-data is-flex is-flex-direction-column gap-y-4 is-align-items-center is-justify-content-center" v-else>
            <n-image width="100" :src="errorpng" />
            <span class="size-5 font-secondary has-text-weight-light color-primary-5">Tidak ada pegawai yang memenuhi kriteria filter</span>
          </div>
        </template>
        <template v-else>
          <common-card-loader v-for="i in 2" :key="i" :height="30" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.activity-member-list {
  display: grid;
  gap: var(--space-3);
  grid-template-columns: repeat(2, 1fr);
  flex: 1;
  align-self: start;
  .no-data {
    grid-column: 1 / span 6;
  }
}
.search-activity-member {
  display: flex;
  column-gap: var(--space-3);
  row-gap: var(--space-3);
  align-self: start;
  flex-direction: column;
  &-wrapper {
    display: flex;
    column-gap: var(--space-3);
    & .v-dvd {
      height: auto;
    }
  }
  & .name {
    width: 100%;
  }
}
</style>