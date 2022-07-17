<script lang="ts" setup>
import { NButton, NPagination, NIcon } from 'naive-ui'
import { ChevronRight16Filled, ChevronLeft16Filled, ArrowStepInLeft16Filled, ArrowStepInRight16Filled } from '@vicons/fluent'
import type { PaginationInfo, PaginationRenderLabel } from 'naive-ui'

const props = defineProps<{
  page?: number
  pageCount?: number | any
}>()

const emits = defineEmits<{
  ( e: 'update-page', v?: number ): void
}>()

</script>

<template>
  <n-pagination
    :page-count="props.pageCount"
    :page="props.page"
    :show-quick-jumper="false"
    @update:page="v => emits('update-page', v)"
  >
    <template #next="{ page, pageCount }: PaginationInfo">
      <n-button
        class="m-btn"
        size="small"
        secondary
        :disabled="page === pageCount"
        :bordered="false"
      >
        <n-icon>
          <ChevronRight16Filled />
        </n-icon>
      </n-button>
    </template>
    <template #label="{ type, active, node }: Parameters<PaginationRenderLabel>['0']">
      <n-button
        class="m-btn"
        size="small" 
        v-if="type === 'page'"
        :type="active ? 'primary' : 'default'"
        :secondary="!active"
        :bordered="false"
      >
        <span class="font-secondary size-4 has-text-weight-medium">{{ node }}</span>
      </n-button>
      <n-icon v-if="type === 'fast-backward'">
        <ArrowStepInLeft16Filled />
      </n-icon>
      <n-icon v-if="type === 'fast-forward'">
        <ArrowStepInRight16Filled />
      </n-icon>
    </template>
    <template #prev="{ page }: PaginationInfo">
      <n-button
        class="m-btn"
        size="small"
        :disabled=" page === 1"
        secondary
        :bordered="false"
      >
        <n-icon>
          <ChevronLeft16Filled />
        </n-icon>
      </n-button>
    </template>
  </n-pagination>
</template>

<style>
.n-pagination .n-pagination-item:not(.n-pagination-item--disabled).n-pagination-item--active {
  border: 1px solid transparent !important;
}
.n-pagination .n-pagination-item {
  padding: 0;
}
.n-pagination > *:not(:first-child) {
  margin-left: 2.75px;
}
.m-btn {
  border-radius: 2px;
}
</style>