<script lang="ts">
import { defineComponent } from 'vue';
import { NImage, NIcon } from 'naive-ui';
import { CheckmarkStarburst16Filled } from '@vicons/fluent'

export default defineComponent({
  name: 'ActivityCardGeneral',
  components: {
    NImage,
    NIcon,
    CheckmarkStarburst16Filled
  }
})
</script>

<template>
  <div class="bg-panel-primary act is-flex is-flex-direction-column gap-y-6 radius-3 p-2">
    <p class="size-4 radius-5 act-badge font-secondary">
      <n-icon>
        <CheckmarkStarburst16Filled />
      </n-icon>
      <span class="ml-1 has-text-weight-medium">Sukses</span>
    </p>
    <n-image
      class="radius-4"
      src="https://ik.imagekit.io/q8c93uv11zf/Liburan_Korea_Selatan_2022-Tue_Feb_01_2022_02_40_14_GMT_0700__Indochina_Time_-korea_selatan--pdc-images_l7MTgtWGQ?ik-sdk-version=javascript-1.4.3&updatedAt=1643725116606"
    />
    <h4 class="size-3 color-primary-1">Liburan Musim 2022 Destinasi Korea Selatan</h4>
    <span class="font-secondary size-5 has-text-weight-light color-secondary-1">1 Januari 2022</span>
  </div>
</template>

<style lang="scss" scoped>
.act {
  position: relative;
  &-badge {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: .65rem;
    margin-top: .65rem;
    padding-inline: .5rem;
    background-color: white;
    color: rgb(114, 114, 114);
    &> i {
      color: #14CF36;
    }
  }
}
</style>