<script lang="ts">
import { defineComponent } from 'vue';
import { NDrawer, NDrawerContent, NCheckboxGroup, NCheckbox, NDivider, NButton, NIcon } from 'naive-ui';
import { ArrowSortDownLines16Regular, ArrowCircleRight16Regular, FilterDismiss16Regular } from '@vicons/fluent'
import SectionPanel from '../layout/SectionPanel.vue';

export default defineComponent({
  name: 'EmployeeFilterDrawer',
  components: {
    NDrawer,
    NDrawerContent,
    SectionPanel, 
    NCheckboxGroup,
    NCheckbox,
    NDivider,
    NButton,
    NIcon,
    ArrowSortDownLines16Regular,
    ArrowCircleRight16Regular,
    FilterDismiss16Regular
  },
  props: {
    show: Boolean
  },
  emits: ['update:show']
})
</script>

<template>
  <n-drawer :trap-focus="false" style="background-color: var(--bg-primary); min-height: 60vh;" placement="bottom" :show="show" @update-show="v => $emit('update:show', v)">
    <n-drawer-content>
      <section-panel>
        <template #title>
          <n-icon>
            <ArrowSortDownLines16Regular />
          </n-icon>
          <span>Filter</span>
        </template>
        <NDivider style="margin: 0;"/>
        <div class="is-flex is-flex-direction-column gap-y-2">
          <div class="is-flex is-flex-direction-column gap-y-2">
            <h4 class="color-primary-2 size-3">Level Jabatan</h4>
            <n-checkbox-group>
              <div class="is-flex is-flex-direction-column gap-y-2 color-primary-3">
                <n-checkbox>Leader</n-checkbox>
                <n-checkbox>Customer Service</n-checkbox>
                <n-checkbox>Uploader</n-checkbox>
                <n-checkbox>Admin</n-checkbox>
                <n-checkbox>Keuangan</n-checkbox>
              </div>
            </n-checkbox-group>
          </div>
          <div class="is-flex is-flex-direction-column gap-y-2">
            <h4 class="color-primary-2 size-3">Team</h4>
            <n-checkbox-group>
              <div class="is-flex is-flex-direction-column gap-y-2 color-primary-3">
                <n-checkbox>Tim 1 - Ponggok</n-checkbox>
                <n-checkbox>Tim 2 - Srengat</n-checkbox>
                <n-checkbox>Tim 3 - Sidorejo</n-checkbox>
              </div>
            </n-checkbox-group>
          </div>
          <NDivider style="margin: 0;"/>
          <div class="is-flex gap-x-4">
            <N-button
              size="small"
              type="success"
            >
              <template #icon>
                <n-icon>
                  <ArrowCircleRight16Regular />
                </n-icon>
              </template>
              <span class="font-secondary has-text-weight-normal size-4">Terapkan</span>
            </N-button>
            <N-button
              size="small"
              secondary
            >
              <template #icon>
                <n-icon>
                  <FilterDismiss16Regular />
                </n-icon>
              </template>
              <span class="font-secondary has-text-weight-normal size-4">Reset</span>
            </N-button>
          </div>
        </div>
      </section-panel>
    </n-drawer-content>
  </n-drawer>
</template>