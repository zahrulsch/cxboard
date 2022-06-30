<script lang="ts" setup>
import broken from '../../assets/broken-link.png'
import { NImage } from 'naive-ui'
</script>

<template>
  <div class="broken-link">
    <n-image 
      :src="broken"
      width="45"
    />
    <span class="size-5 color-primary-5">Team invalid! coba cek ulang URL anda</span>
  </div>
</template>

<style lang="scss">
.broken-link {
  display: flex;
  flex-direction: column;
  row-gap: .75rem;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
</style>