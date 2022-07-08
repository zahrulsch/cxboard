<script lang="ts" setup>
import { NInput, NDatePicker, NButton } from 'naive-ui'
import { ref } from 'vue';

const daterange = ref<[number, number]>([Date.now(), Date.now()])
</script>

<template>
  <div class="activities-filter size-3 font-secondary">
    <n-input 
      class="bg-panel-primary size-3"
      placeholder="Temukan aktivitas"
    />
    <n-date-picker 
      type="daterange"
      class="size-3 daterange"
      v-model:value="daterange"
    />
    <n-button
      secondary
      size="medium"
    >
      <span class="size-3 font-secondary">Temukan</span>
    </n-button>
  </div>
</template>

<style lang="scss">
.activities-filter {
  display: flex;
  align-items: stretch;
  row-gap: var(--space-3);
  column-gap: var(--space-3);
  & .daterange {
    display: none;

    > div {
      --n-color: var(--bg-primary) !important;
    }

    @include res('small') {
      display: inherit;
    }
  }
}
</style>