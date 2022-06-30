<script lang="ts" setup>
import { NButton, NIcon } from 'naive-ui';
import { Add16Filled } from '@vicons/fluent'
import { useAddTeamPayload } from '../../stores/addTeamPayload';
import { ref } from 'vue';
import TeamMemberField from './TeamMemberField.vue';
import TeamRoleModal from './TeamRoleModal.vue';

const openModal = ref(false)
const team = useAddTeamPayload()
// start method
const onAddEmployeeTeam = () => {
  if (!team.employees) team.employees = []
  team.employees.push({
    employeeCode: '',
    employeeId: 0,
    role: '',
    roleId: 0,
    name: ''
  })  
}
// end method
</script>

<template>
  <div class="is-flex is-flex-direction-column gap-y-4">
    <team-role-modal v-model:show="openModal" />
    <div class="is-flex is-align-items-center is-justify-content-space-between px-1">
      <h4 class="font-secondary size-2">Anggota team</h4>
      <n-button 
        type="info"
        text
        @click="openModal = !openModal"
      >
        <template #icon>
          <n-icon><add16-filled class="size-4" /></n-icon>
        </template>
        <span class="font-secondary size-4">Tambah Role</span>
      </n-button>
    </div>
    <div class="add-emp-list gap-y-4">
      <team-member-field v-for="(emp, index) in team.employees" v-model:employees="team.employees" :index="index" :key="index" />
    </div>
    <n-button
      type="info"
      secondary
      @click="onAddEmployeeTeam"
    >
      <template #icon>
        <n-icon>
          <add16-filled class="size-4" />
        </n-icon>
      </template>
      <span class="font-secondary size-3">Tambah</span>
    </n-button>
  </div>
</template>

<style lang="scss">
.add-emp-list {
  display: flex;
  flex-direction: column;
}
</style>