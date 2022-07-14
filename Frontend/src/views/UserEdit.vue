<script lang="ts" setup>
import Layout from '../components/layout/Layout.vue';
import CommonHeader from '../components/common/CommonHeader.vue';
import CommonGoogleButtonSign from '../components/common/CommonGoogleButtonSign.vue';
import UserPasswordDialog from '../components/user/UserPasswordDialog.vue';
import { NFormItem, NInput, NDivider, NIcon, NImage, NButton, useMessage } from 'naive-ui';
import { Image16Filled, Delete16Filled } from '@vicons/fluent'
import { useUserData } from '../stores/userDataStore';
import { ref } from 'vue';
import { tFileReader, tFileReaderDrop } from '../helpers/fileReader';
import { useCMutation } from '../apis/customMutation';
import { capitalized } from '../helpers/capitalized';
import { useQueryClient } from 'vue-query';

const queryClient = useQueryClient()
const userData = useUserData()
const message = useMessage()
const droptext = ref('Drop foto disini / Klik untuk memilih file')
const showDialog = ref(false)
const { mutateAsync, isLoading: editing } = useCMutation('editUser', '/users/update', 'PUT')

const ondrop = (e: DragEvent) => {
  droptext.value = 'Drop foto disini / Klik untuk memilih file'
  tFileReaderDrop(e, {
    onError: (e) => message.error(e, { closable: true, duration: 2750 }),
    onSuccess: ({ base64Text }) => {
      userData.picture = String(base64Text)
    }
  })
}

const onchange = (e: Event) => {
  droptext.value = 'Drop foto disini / Klik untuk memilih file'
  tFileReader(e, {
    allow: ['image/jpeg', 'image/png'],
    onError: (e) => message.error(e, { closable: true, duration: 2750 }),
    onSuccess: ({ base64Text }) => {
      userData.picture = String(base64Text)
    }
  })
}

const deletePicture = () => {
  userData.picture = ""
}

const editUser = () => {
  mutateAsync(userData.$state, {
    onSuccess: response => {
      queryClient.invalidateQueries('getUserInfo')
      message.success(`${capitalized(response.data)}`, { duration: 2750 }) 
    },
    onError: e => {
      message.warning(`${capitalized(e.status)} - ${e.message}`, { duration: 2750 })
    }
  })
}
</script>

<template>
  <layout>
    <div class="is-flex is-flex-direction-column gap-y-3 mt-3">
      <common-header :font-weight="'semibold'">Pengaturan Pengguna</common-header>
      <user-password-dialog v-model:show="showDialog" v-model:value="userData.oldPassword" @positive-click="editUser"/>
      <div class="edit-hero">
        <span class="font-secondary size-4">Kelola profil anda untuk mengontrol, menghubungkan dan mengamankan akun anda</span>
      </div>
      <n-divider class="my-0 mt-2" />
      <div class="user-setting">
        <div class="right">
          <n-form-item label="Foto Profil" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
            <div class="profile-picture">
              <div v-if="!userData.picture" class="profile-picture-input">
                <input 
                  @dragover="droptext = 'Lepaskan file'" 
                  @dragleave="droptext = 'Drop foto disini / Klik untuk memilih file'" 
                  @drop="ondrop"
                  @change="onchange"
                  type="file" 
                  accept=".jpeg,.png,.jpg" 
                />
                <n-icon size="20">
                  <image16-filled class="color-secondary-2" />
                </n-icon>
                <label class="font-secondary size-5 color-primary-7 has-text-weight-medium">Drop foto disini / Klik untuk memilih file</label>
              </div>
              <div v-else class="profile-picture-preview">
                <n-image 
                  :src="userData.picture"
                />
                <n-button 
                  class="delete-btn"
                  size="small"
                  type="error"
                  @click="deletePicture"
                >
                  <n-icon>
                    <delete16-filled />
                  </n-icon>
                </n-button>
              </div>
            </div>
          </n-form-item>
          <n-button
            size="small"
            type="primary"
            @click="showDialog = !showDialog"
            :loading="editing"
          >
            <span class="font-secondary size-4 has-text-weight-semibold">Simpan perubahan</span>
          </n-button>
        </div>
        <n-divider class="my-0 mt-2 h-divider" />
        <n-divider style="height: auto;" vertical class="mx-1 mt-2 v-divider" />
        <div class="left">
          <n-form-item label="Username" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
            <n-input 
              class="bg-panel-primary font-secondary size-3"
              placeholder="roronoa_zoro"
              v-model:value="userData.username"
            />
          </n-form-item>
          <n-form-item label="Email" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
            <n-input 
              class="bg-panel-primary font-secondary size-3"
              placeholder="monkey_d_luffy@yahoo.com"
              v-model:value="userData.email"
            />
          </n-form-item>
          <n-form-item label="Password" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
            <n-input 
              class="bg-panel-primary font-secondary size-3"
              placeholder="••••••••"
              type="password"
              show-password-on="click"
              v-model:value="userData.password"
            />
          </n-form-item>
          <n-form-item label="Center sheet ID" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
            <div style="width: 100%;" class="is-flex is-flex-direction-column gap-y-4">
              <n-input 
                class="bg-panel-primary font-secondary size-3"
                placeholder="1KIZrxpIs3F2T_Xpj3cklnZ7eJwqQVQtTjYJIWnlMWGIs"
                v-model:value="userData.centerSheetId"
              />
              <span class="font-secondary has-text-weight-semibold size-5 color-primary-7"><span class="font-secondary has-text-weight-bold size-5 color-primary-5">Catatan :</span> Gunakan ID Google Sheet yang mencangkup data Penjualan ALL Team</span>
            </div>
          </n-form-item>
          <n-form-item label="Hubungkan ke Google" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
            <common-google-button-sign class="google-btn" text="Hubungkan akun Google" />
          </n-form-item>
        </div>
      </div>
    </div>
  </layout>
</template>

<style lang="scss">
.google-btn {
  width: 100%;
  @include res('small') {
    width: 100%;
  }
  @include res('medium') {
    width: max-content;
  }
}
.profile-picture {
  width: 100%;
  padding-top: 100%;
  background-color: var(--bg-primary);
  overflow: hidden;
  position: relative;
  & &-input, & &-preview {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: var(--space-3);
    & > .delete-btn {
      position: absolute;
      top: 5px;
      left: 5px;
    }
    & > input {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      cursor: pointer;
    }
  }
}
.user-setting {
  display: flex;
  flex-direction: column;
  row-gap: var(--space-3);
  & > .v-divider {
    display: none;
  }
  @include res('small') {
    flex-direction: row-reverse;
    column-gap: var(--space-3);
    & .h-divider {
      display: none;
    }
    & .v-divider {
      display: inherit;
    }
  }
  & .left {
    display: flex;
    flex-direction: column;
    row-gap: var(--space-3);
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
      width: 29%;
    }
    @include res('large') {
      width: 25%;
    }
    @include res('xlarge') {
      width: 23%;
    }
    @include res('xxlarge') {
      width: 25%;
    }
  }
}
.edit {
  &-hero {
    line-height: 1rem;
    font-weight: 500;
    padding-inline: var(--space-2);
    padding-block: var(--space-3);
    background-color: rgb(223, 202, 16);
    color: #0b0f0c;
    @include res('small') {
      width: max-content;
    }
  }
}
</style>