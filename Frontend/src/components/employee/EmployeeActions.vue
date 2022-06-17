<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NIcon } from 'naive-ui';
import { Save16Regular } from '@vicons/fluent'

export default defineComponent({
  name: 'EmployeeActions',
  components: {
    NButton,
    NIcon,
    Save16Regular
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4 px-2">
    <n-button
      :bordered="!1"
      type="primary"
      size="small"
      class="radius-4"
    >
      <template #icon>
        <n-icon>
          <Save16Regular />
        </n-icon>
      </template>
      <span class="font-secondary size-4">Simpan</span>
    </n-button>
  </div>
</template>