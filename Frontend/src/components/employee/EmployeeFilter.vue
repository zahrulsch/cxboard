<script lang="ts">
import { defineComponent } from 'vue';
import { NInput, NIcon, NButton } from 'naive-ui';
import { Search16Regular, Filter28Filled } from '@vicons/fluent';
import EmployeeFilterDrawer from './EmployeeFilterDrawer.vue';

export default defineComponent({
  'name': 'EmployeeFilter',
  components: {
    NIcon,
    NInput,
    Search16Regular,
    NButton,
    Filter28Filled,
    EmployeeFilterDrawer
  },
  data: () => ({
    showDrawer: false
  })
})
</script>

<template>
  <div class="font-secondary is-flex gap-x-4 is-align-items-stretch">
    <EmployeeFilterDrawer v-model:show="showDrawer" />
    <n-input 
      size="medium"
      placeholder="Temukan sesuatu..."
      class="bg-panel-primary size-6 has-text-weight-light"
      :bordered="!1"
    >
      <template #prefix>
        <n-icon >
          <Search16Regular class="color-secondary-3" />
        </n-icon>
      </template>
    </n-input>
    <button @click="showDrawer = !showDrawer" class="bg-panel-primary filter-button">
      <n-icon>
        <Filter28Filled class="size-2"/>
      </n-icon>
    </button>
    <n-button
      size="medium"
      class="size-4"
      :bordered="!1"
      type="primary"
      secondary
    >
      <span class="size-5">Cari</span>
    </n-button>
  </div>
</template>

<style lang="scss" scoped>
.filter-button {
  width: min-content;
  border: none;
  padding-inline: .65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-0);
  cursor: pointer;
  background-color: var(--bg-primary);

  &:active {
    background-color: var(--bg-secondary);
  }

  @include res('small') {
    display: none !important;
  }
}
</style>