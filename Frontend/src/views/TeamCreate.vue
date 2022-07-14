<script setup lang="ts">
import Layout from "../components/layout/Layout.vue";
import SectionPanel from "../components/layout/SectionPanel.vue";
import TeamPictureAdd from "../components/team/TeamPictureAdd.vue";
import TeamMemberAdd from "../components/team/TeamMemberAdd.vue";
import CommonHeader from "../components/common/CommonHeader.vue";
import { NInput, NFormItem, NDivider, NButton, NIcon, useMessage } from "naive-ui";
import { Save16Filled } from '@vicons/fluent'
import { useAddTeamPayload } from "../stores/addTeamPayload";
import { useCMutation } from "../apis/customMutation";

const team = useAddTeamPayload()
const message= useMessage()
const { mutateAsync, isLoading } = useCMutation('addTeam', '/teams/create', 'POST')

const onAddTeam = () => {
  mutateAsync(team, {
    onError: e => {
      if (typeof e === 'string') {
        message.error(e)
      }
      else message.error('unpredictable error occurred!')
    },
    onSuccess: ({ data }) => {
      message.success(data, { duration: 2750, closable: true })
    }
  })
}
</script>

<template>
  <layout>
    <section-panel class="mt-3">
      <common-header font-weight="semibold">Tambahkan Team</common-header>
      <div class="font-secondary team-inputs gap-y-3 gap-x-3">
        <div class="left gap-y-3">
          <n-form-item :show-feedback="false" :label-props="{ class: 'mb-1 font-primary size-5' }" label="Nama team">
            <n-input 
              placeholder="Team 7 - Srengat"
              class="bg-panel-primary"
              v-model:value="team.name"
            />
          </n-form-item>
          <n-form-item :show-feedback="false" :label-props="{ class: 'mb-1 font-primary size-5' }" label="Kode team">
            <n-input 
              placeholder="GA"
              class="bg-panel-primary"
              v-model:value="team.code"
            />
          </n-form-item>
          <n-form-item :show-feedback="false" :label-props="{ class: 'mb-1 font-primary size-5' }" label="Alamat lengkap team">
            <n-input 
              placeholder="Jl. Ki Ageng Coleksono No.16 Dandong, Srengat, Blitar"
              type="textarea"
              class="bg-panel-primary"
              :rows="3"
              v-model:value="team.address"
            />
          </n-form-item>
          <n-divider class="my-1"/>
          <team-member-add/>
        </div>
        <n-divider vertical class="mx-1 vertical-divider"/>
        <div class="right gap-y-3">
          <n-divider class="my-1 dvd"/>
          <team-picture-add />
          <n-button
            block
            type="primary"
            @click="onAddTeam"
            :loading="isLoading"
          >
            <template #icon>
              <n-icon>
                <save16-filled class="size-3"/>
              </n-icon>
            </template> 
            <span class="font-secondary has-text-weight-medium size-4">Simpan</span>
          </n-button>
        </div>
      </div>
    </section-panel>
  </layout>
</template>

<style lang="scss">
.vertical-divider {
  display: none !important;
  @include res("small") {
    display: inherit !important;
    height: auto !important;
  }
}
.team-inputs {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @include res('small') {
    flex-direction: row;
  }
  & .left {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  & .right {
    width: 100%;
    display: flex;
    flex-direction: column;
    @include res('small') {
      & .dvd {
        display: none;
      }
      width: 30%;
    }
    @include res('medium') {
      width: 28%;
    }
    @include res('large') {
      width: 25%;
    }
    @include res('xlarge') {
      width: 23%;
    }
  }
}
</style>