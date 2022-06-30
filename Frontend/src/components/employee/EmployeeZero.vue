<script lang="ts" setup>
import nocrowd from '../../assets/no-crowd.png'
import { NButton, NImage, NIcon } from 'naive-ui'
import { Add16Filled } from '@vicons/fluent'
</script>

<template>
  <div class="no-emp-detected gap-y-7">
    <n-image 
      :src="nocrowd"
      width="75"
      class="no-emp-detected-image"
    />
    <span class="size-4 mt-2 color-primary-4">Belum ada karyawan yang terdaftar</span>
    <router-link to="/add_employee">
      <n-button
        size="small"
        type="success"
        text
      >
        <n-icon>
          <add16-filled class="size-5" />
        </n-icon>
        <span class="font-secondary size-5 ml-1">Tambah karyawan</span>
      </n-button>
    </router-link>
  </div>
</template>

<style lang="scss">
.no-emp-detected {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  &-image {
    filter: saturate(.85);
  }
  > span {
    font-weight: 300;
  }
}
</style>