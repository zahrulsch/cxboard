<script lang="ts" setup>
import { NModal, NInput, NFormItem, NButton, NDivider, useMessage } from 'naive-ui'
import { useCMutation } from '../../apis/customMutation'
import { reactive, watch } from 'vue';
import { useQueryClient } from 'vue-query';
import CommonHeader from '../common/CommonHeader.vue';

const queryClient = useQueryClient()

const props = defineProps<{
  show?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:show', args: boolean): void
}>()

const message = useMessage()
const dataMutation: { name: string; detail?: string, vname?: 'success' | 'error' } = reactive({ name: '', detail: '', vname: 'success' })

const { mutateAsync, isLoading } = useCMutation('addRole', '/roles/create', 'POST')

const createRole = () => {
  mutateAsync({
    name: dataMutation.name.trim(),
    detail: dataMutation.detail?.trim()
  }, {
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries('getRoles')
      message.success(data, { closable: true, duration: 2500 })
      dataMutation.name = ''
      dataMutation.detail = ''
    },
    onError: e => {
      if (typeof e.message === 'string') message.error(e.message, { closable: true, duration: 2750 })
      else {
        if (e.message.target && Array.isArray(e.message.target)) {
          message.error('Error: error costraint field "' + e.message.target[0] + '"')
        }
        else message.error('Error: ' + e.status)
      }
    }
  })
}

const onValidate = () => {
  if (!dataMutation.name.trim()) {
    dataMutation.vname = 'error'
  }
  else dataMutation.vname = 'success'
}

watch(() => props.show, () => {
  if (!props.show) {
    dataMutation.name = ''
    dataMutation.detail = ''
    dataMutation.vname = 'success'
  }
}, { immediate: true })

</script>

<template>
  <n-modal
    :show="props.show"
    @update:show="v => emit('update:show', v)"
    :auto-focus="false"
    class="cs-modal"
    :transform-origin="'center'"
  >
    <div class="bg-panel-primary-solid is-flex is-flex-direction-column gap-y-3 p-3 size-3">
      <common-header font-weight="semibold">Tambahkan Role Team</common-header>
      <n-divider class="my-0"/>
      <div class="is-flex is-flex-direction-column gap-y-3">
        <n-form-item label="Nama role" :show-feedback="false" :label-props="{class: 'size-5 font-primary mb-1'}">
          <n-input 
            @focus="onValidate"
            @blur="onValidate"
            :status="dataMutation.vname"
            placeholder="Programmer"
            v-model:value="dataMutation.name"
          />
        </n-form-item>
        <n-form-item label="Detail role (optional)" :show-feedback="false" :label-props="{class: 'size-5 font-primary mb-1'}">
          <n-input 
            placeholder="Programmer bertugas menerima dan mengimplementasikan setiap ide bisnis ke dalam program komputer"
            type="textarea"
            rows="5"
            v-model:value="dataMutation.detail"
          />
        </n-form-item>
      </div>
      <n-divider class="my-1"/>
      <div class="is-flex gap-x-4">
        <n-button
          size="small"
          :loading="isLoading"
          type="success"
          @click="createRole"
        >
          <span class="font-secondary has-text-weight-semibold size-4">Simpan</span>
        </n-button>
        <n-button
          size="small"
          secondary
          @click="emit('update:show', false)"
        >
          <span class="font-secondary has-text-weight-semibold size-4">Kembali</span>
        </n-button>
      </div>
    </div>
  </n-modal>
</template>

<style lang="scss">
.cs-modal {
  width: 95%;
  @include res('small') {
    width: 70%;
  }
  @include res('medium') {
    width: 50%;
  }
  @include res('large') {
    width: 40%;
  }
  @include res('xlarge') {
    width: 30%;
  }
  @include res('xxlarge') {
    width: 20%;
  }
}
</style>