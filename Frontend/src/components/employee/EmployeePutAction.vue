<script setup lang="ts">
import { NButton, useMessage } from 'naive-ui'
import { useEditEmployeePayload } from '../../stores/editEmployeePayload';
import { useCMutation } from '../../apis/customMutation';
import { useRoute } from 'vue-router';

const message = useMessage()
const edit = useEditEmployeePayload()
const { id } = useRoute().params
const { mutateAsync, isLoading } = useCMutation('editEmployee', '/employees', 'PUT', +id)

const save = () => {
  mutateAsync(edit.$state, {
    onError: e => {
      if (typeof e.message === 'string') message.error(e.message)
      else message.error('unpredictable error')
    },
    onSuccess: ({ data }) => {
      message.success(data)
    }
  })

}

</script>

<template>
  <div class="is-flex px-2">
    <n-button
      size="small"
      type="primary"
      @click="save"
      :loading="isLoading"
      block
    >
      <span class="font-secondary has-text-weight-semibold size-4">Simpan</span>
    </n-button>
  </div>
</template>