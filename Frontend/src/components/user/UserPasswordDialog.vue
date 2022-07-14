<script setup lang="ts">
import { NModal, NInput, NButton, NIcon, useMessage } from 'naive-ui'
import { QuestionCircle16Filled } from '@vicons/fluent'
import { onMounted, watch } from 'vue';

const message = useMessage()

const props = defineProps<{
  show?: boolean
  value?: string
}>()

const emits = defineEmits<{
  ( e: 'update:show', value: boolean ): void
  ( e: 'update:value', value: string ): void
  ( e: 'positiveClick', value: boolean): void
  ( e: 'negativeClick', value: boolean): void
}>()

const onback = () => {
  emits('update:show', false)
  emits('update:value', '')
}

const onconfirm = () => {
  if (props.value) {
    emits('update:show', false)
    emits('positiveClick', true)
  }
  else message.warning('Konfimasi password anda kosong!')
}

onMounted(() => {
  emits('update:value', '')
})

watch(() => props.show, (v) => {
  if (v) emits('update:value', '')
}, { immediate: true })

</script>

<template>
  <n-modal
    :show="props.show"
    :auto-focus="false"
    transform-origin="center"
    @update:show="v => emits('update:show', v)"
  >
    <div class="user-pwd-dialog">
      <div class="dialog-header">
        <n-icon size="25">
          <QuestionCircle16Filled class="has-text-warning" />
        </n-icon>
        <h4 class="font-secondary size-3 is-capitalized">Konfirmasi password</h4>
      </div>
      <n-input 
        placeholder="••••••••"
        type="password"
        show-password-on="click"
        size="small"
        :value="props.value"
        @input="v => emits('update:value', v)"
        @keypress.enter="onconfirm"
      />
      <div class="dialog-actions">
        <n-button
          size="tiny"
          type="success"
          @click="onconfirm"
        >
          <span class="font-secondary size-4 has-text-weight-medium">Konfimasi</span>
        </n-button>
        <n-button
          size="tiny"
          secondary
          @click="onback"
        >
          <span class="font-secondary size-4 px-1 has-text-weight-medium">Batal</span>
        </n-button>
      </div>
    </div>
  </n-modal>
</template>

<style lang="scss" scoped>
.user-pwd-dialog {
  background-color: var(--bg-primary-solid);
  padding: var(--space-2);
  display: flex;
  flex-direction: column;
  row-gap: var(--space-2);
  min-width: 290px;
  .dialog-header {
    display: flex;
    align-items: center;
    column-gap: var(--space-5);
  }
  .dialog-actions {
    display: flex;
    align-items: center;
    column-gap: var(--space-5);
    justify-content: flex-end;
  }
}
</style>