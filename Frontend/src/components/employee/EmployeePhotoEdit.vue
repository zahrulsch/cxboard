<script lang="ts">
import { defineComponent } from 'vue';
import { NFormItem, NIcon } from 'naive-ui';
import { Image20Regular } from '@vicons/fluent'

export default defineComponent({
  name: 'EmployeePhotoEdit',
  components: {
    NFormItem,
    Image20Regular,
    NIcon
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4 px-2">
    <n-form-item label="Photo Karyawan" :show-feedback="false" :label-props="{class: 'size-3'}">
      <div class="upload">
        <label for="pic" id="label-pic" class="radius-4">
          <n-icon size="40" class="color-secondary-0">
            <Image20Regular />
          </n-icon>
          <span class="font-secondary size-5 has-text-weight-light color-secondary-0">Klik untuk upload</span>
        </label>
        <input id="pic" type="file" accept=".png,.jpeg" />
      </div>
    </n-form-item>
  </div>
</template>

<style scoped lang="scss">
#label-pic {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bg-primary);
  width: 85%;
  height: 300px;
}
.upload {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  & > input {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
  }
}
</style>