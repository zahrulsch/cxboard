<script setup lang="ts">
import { NButton, useMessage } from 'naive-ui'
import { onUnmounted } from 'vue';
import { useCMutation } from '../../apis/customMutation';
import { useAddActivityPayload } from '../../stores/addActivityPayload'
import { capitalized } from '../../helpers/capitalized'

const act = useAddActivityPayload()
const message = useMessage()
const { mutateAsync, isLoading } = useCMutation('addactivity', '/activities/create', 'POST')

const onsave = () => {
  mutateAsync(act.$state, {
    onSuccess: ({ data }) => {
      message.success(data, { duration: 2750, closable: true })
    },
    onError: e => {
      message.error(`${capitalized(e.status)} - ${e.message}`, { duration: 2750, closable: true })
    }
  })
}

onUnmounted(() => act.$reset())
</script>

<template>
  <n-button
    size="small"
    type="primary"
    @click="onsave"
    :loading="isLoading"
    block
  >
    <span class="size-4 has-text-weight-medium font-secondary">Buat Aktivitas</span>
  </n-button>
</template>