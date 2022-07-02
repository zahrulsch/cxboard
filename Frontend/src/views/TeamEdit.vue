<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useCQuery } from '../apis/customQuery';
import { NInput, NFormItem, NDivider, NButton, NIcon, useMessage } from 'naive-ui'
import { useEditTeamPayload } from '../stores/editTeamPayload';
import { onUnmounted } from 'vue';
import { Save16Regular } from '@vicons/fluent'
import { useCMutation } from '../apis/customMutation';
import Layout from '../components/layout/Layout.vue';
import CommonLoader from '../components/common/CommonLoader.vue';
import CommonFetchingError from '../components/common/CommonFetchingError.vue';
import TeamFindNull from '../components/team/TeamFindNull.vue'
import SectionPanel from '../components/layout/SectionPanel.vue';
import TeamPictureEdit from '../components/team/TeamPictureEdit.vue';
import TeamMemberEdit from '../components/team/TeamMemberEdit.vue';

const message = useMessage()
const pteam = useEditTeamPayload()
const { id } = useRoute().params
const { data: team, isLoading: loadTeam, isError: loadTeamError } = useCQuery('getTeam', '/teams', 'get', +id, null, {
  onSuccess: ({ data }) => {
    if (data.employees) {
      pteam.$patch( { address: data.address, code: data.code, image: data.image || '', name: data.name } )
      pteam.$patch({
        employees: data.employees.map(e => ({
          code: e.employeeCode,
          employeeId: e.employee.id,
          id: e.id,
          roleId: e.role.id,
          name: e.employee.name,
          teamId: +id
        }))
      })
    }
    else pteam.$patch( { address: data.address, code: data.code, image: data.image || '', name: data.name } )
  },
  refetchOnWindowFocus: false,
})

const { mutateAsync: editRequest, isLoading: loadEdit } = useCMutation('editTeam', '/teams', 'PUT', +id)

const update = () => {
  editRequest(pteam.$state, {
    onSuccess: res => {
      message.success(res.data, { closable: true, duration: 2750 })
    }
  })
}

onUnmounted(() => {
  pteam.$reset()
})
</script>

<template>
  <layout>
    <common-loader v-if="loadTeam"/>
    <common-fetching-error v-if="!loadTeam && loadTeamError" />
    <!-- if team is not falsy -->
    <template v-if="team">
      <!-- if team data is null -->
      <team-find-null v-if="team.data === null" />
      <!-- if team data is not null -->

      <div class="mt-3" v-else>
        <h4 class="size-3 has-text-weight-medium color-primary-7 font-secondary">Ubah Data Team {{team.data.name}}</h4>
        <div class="edit-panel gap-x-3 gap-y-3">
          <div class="edit-panel-left">
            <section-panel class="mt-2 font-secondary px-1">
              <div class="list gap-y-4">
                <n-form-item :show-feedback="false" label="Nama team">
                  <n-input 
                    class="bg-panel-primary"
                    placeholder="Team Advertiser"
                    v-model:value="pteam.name"
                  />
                </n-form-item>
                <n-form-item :show-feedback="false" label="Kode team">
                  <n-input 
                    class="bg-panel-primary"
                    placeholder="G"
                    v-model:value="pteam.code"
                  />
                </n-form-item>
                <n-form-item :show-feedback="false" label="Alamat">
                  <n-input 
                    type="textarea"
                    rows="5"
                    class="bg-panel-primary"
                    placeholder="Jl. Ki Ageng Coleksono No.16 Dandong, Srengat, Blitar"
                    v-model:value="pteam.address"
                  />
                </n-form-item>
              </div>
            </section-panel>
            <n-divider class="px-3 my-3"/>
            <team-member-edit />
          </div>
          <div class="edit-panel-right gap-y-3">
            <n-divider class="px-1 my-1 dvd"/>
            <team-picture-edit :image="pteam.image" @update:image="v => pteam.image = v" />
            <n-button
              block
              type="primary"
              size="small"
              @click="update"
              :loading="loadEdit"
            >
              <template #icon>
                <n-icon>
                  <save16-regular class="size-2" />
                </n-icon>
              </template>
              <span class="font-secondary size-4">Simpan</span>
            </n-button>
          </div>
        </div>
      </div>

    </template>
  </layout>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
}
.edit-panel {
  display: flex;
  flex-direction: column;
  @include res('small') {
    flex-direction: row;
  }
  & &-left {
    @include res('small') {
      width: 60%;
    }
    @include res('medium') {
      width: 68%;
    }
    @include res('large') {
      width: 72%;
    }
    @include res('xlarge') {
      width: 75%;
    }
    @include res('xxlarge') {
      width: 76%;
    }
  }
  & &-right {
    display: flex;
    flex-direction: column;
    @include res('small') {
      flex: 1;
      .dvd {
        display: none;
      }
    }
  }
}
</style>