<script lang="ts" setup>
import noact from '../../assets/target.png'
import { NImage, NIcon, NButton } from 'naive-ui'
import { Add16Filled } from '@vicons/fluent'
</script>

<template>
  <div class="noact gap-y-4">
    <n-image 
      class="noact-image"
      :src="noact"
      width="75"
      preview-disabled
    />
    <span class="size-5 color-primary-5 has-text-weight-medium">Belum ada aktivitas apapun</span>
    <router-link to="/activities/create">
      <n-button
        text
        type="success"
      >
        <n-icon>
          <add16-filled class="size-4"/>
        </n-icon>
        <span class="font-secondary has-text-weight-medium size-5 pl-1">Tambah aktivitas</span>
      </n-button>
    </router-link>
  </div>
</template>

<style lang="scss">
.noact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &-image {
    filter: saturate(.65)
  }
}
</style>