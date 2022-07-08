<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import { CalendarLtr16Filled, Location16Filled } from '@vicons/fluent'

const props = defineProps<{
  name?: string | null
  date?: number | string | null
  place?: string | null
  pic?: string | null
}>()
</script>

<template>
  <div class="activity-item radius-5">
    <div class="activity-item-info p-2">
      <p class="size-4 has-text-weight-medium">Liburan All Team Bali 2021</p>
      <p class="is-flex gap-x-6 is-align-items-center color-primary-1">
        <n-icon class="size-3">
          <calendar-ltr16-filled />
        </n-icon>
        <span class="size-5 font-secondary has-text-weight-medium">1 January 2021</span>
      </p>
      <p class="is-flex gap-x-6 is-align-items-center color-primary-1">
        <n-icon class="size-3">
          <location16-filled />
        </n-icon>
        <span class="size-5 font-secondary has-text-weight-medium">Bali, Indonesia</span>
      </p>
    </div>
    <div class="activity-item-info-layer p-2">
      <p class="size-4 has-text-weight-medium text-center">Liburan All Team Bali 2021</p>
      <p class="is-flex gap-x-6 is-align-items-center color-primary-0">
        <n-icon class="size-3">
          <calendar-ltr16-filled />
        </n-icon>
        <span class="size-5 font-secondary">1 January 2021</span>
      </p>
      <p class="is-flex gap-x-6 is-align-items-center color-primary-0">
        <n-icon class="size-3">
          <location16-filled />
        </n-icon>
        <span class="size-5 font-secondary">Bali, Indonesia</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.activity-item {
  width: 100%;
  position: relative;
  padding-top: 100%;
  background-image: url('https://media.tuicontent.nl/4BC/4BC47914AE2F964019312CA71A171621.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;

  &:hover &-info {
    opacity: 0;
    transition: 250ms;
  }

  &:hover &-info-layer {
    transform: translateY(0%);
  }

  & &-info-layer {
    transition: transform 200ms ease;
    transform: translateY(100%);
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%; 
    height: 100%;   
    top: 0;
    left: 0;
    column-gap: var(--space-6);
    row-gap: var(--space-6);
    background: rgba(54, 54, 54, 0.2);
    align-items: center;
    justify-content: center;
    @include ua('backdrop-filter', 'blur(2.5px)');
  }

  & &-info {
    transition: 250ms ease;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;    
    bottom: 0;
    left: 0;
    column-gap: var(--space-6);
    row-gap: var(--space-6);
    background: rgba(95, 95, 95, 0.15);
    @include ua('backdrop-filter', 'blur(1.5px)');
  }
}
</style>