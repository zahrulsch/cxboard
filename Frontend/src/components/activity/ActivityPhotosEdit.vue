<script lang="ts" setup>
import { ref } from 'vue';
import { NFormItem, NIcon } from 'naive-ui'
import { Image16Filled } from '@vicons/fluent'

const droptext = ref('Drop gambar disini / Klik untuk memilih file')
</script>

<template>
  <n-form-item label="Foto" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
    <div class="activity-photos-input radius-5">
      <div>
        <input type="file" accept=".jpeg,.jpg,.png" />
        <n-icon size="25">
          <image16-filled class="color-secondary-3"/>
        </n-icon>
        <label class="text-center size-5 color-secondary-2 font-secondary px-4">{{droptext}}</label>
      </div>
    </div>
  </n-form-item>
</template>

<style lang="scss">
.activity-photos-input {
  position: relative;
  width:100%;
  padding-top: 100%;
  background-color: var(--bg-primary);
  align-self: flex-start;

  & > div {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: var(--space-5);

    & > input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
}
</style>