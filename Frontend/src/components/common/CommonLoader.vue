<script lang="ts" setup>
import datatransfer from '../../assets/transfer-data.png'
import { NImage } from 'naive-ui'
</script>

<template>
  <div class="__loader is-flex gap-y-3 is-flex-direction-column is-align-items-center is-justify-content-center">
    <n-image 
      :src="datatransfer"
      class="img-loader"
      width="25"
    />
    <p class="text-loader size-5 color-secondary-0">Sedang mendapatkan data</p>
  </div>
</template>

<style lang="scss">
.__loader {
  min-height: 75vh;
}

.img-loader {
  animation: blinkLoad 1.5s linear infinite;
  filter: saturate(1.5);
}

.text-loader {
  animation: blinkText 1s linear infinite;
}

@keyframes blinkText {
  from, to {
    opacity: 0.75;
  }
  50% {
    opacity: 1;
  }
}

@keyframes blinkLoad {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>