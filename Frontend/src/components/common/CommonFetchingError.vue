<script lang="ts" setup>
import error from '../../assets/error.png'
import { NImage } from 'naive-ui'
</script>

<template>
  <div class="fetch-error gap-y-2 p-4">
    <n-image 
      :src="error"
      width="75"
    />
    <span class="size-4 px-6 has-text-weight-light color-primary-6">
      Oops!!! proses pengambilan data mengalami kendala teknis silahkan coba lagi / refresh halaman
    </span>
  </div>
</template>

<style lang="scss">
.fetch-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    text-align: center;
  }
}
</style>