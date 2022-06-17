<script lang="ts">
import { defineComponent } from 'vue';
import { NInput, NFormItem, NSelect, NDatePicker, NButton, NIcon } from 'naive-ui'
import { Delete16Regular, Add16Filled } from '@vicons/fluent'

export default defineComponent({
  name: 'EmployeeEducationEdit',
  components: {
    NInput,
    NFormItem,
    NSelect,
    NDatePicker,
    NButton,
    NIcon,
    Delete16Regular,
    Add16Filled
  },
  data: () => ({
    educations: [
      {
        level: 'sma',
        name: 'SMA Negeri 1 Ponorogo',
        id: 1
      }
    ]
  })
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4 px-2">
    <h4 class="pl-1 size-3">Riwayat Pendidikan</h4>
    <n-form-item v-for="(edu) in educations" :key="edu.id" :show-label="false" label="Riwayat Pendidikan" :show-feedback="false" :label-props="{class: 'size-3'}">
      <div class="is-flex gap-x-3 gap-y-3 ed-row">
        <n-input size="medium" class="ed-row-name bg-panel-primary radius-4" placeholder="SMA Negeri 1 Xxxxx" :bordered="!1"/>
        <n-select size="medium" class="ed-row-level" placeholder="Level"/>
        <n-date-picker size="medium" class="ed-row-date bg-panel-primary radius-4" placeholder="Tahun Lulus" :bordered="!1"/>
        <n-button
          type="warning"
          :bordered="false"
          @click="educations = educations.filter(e => e.id !== edu.id)"
        >
          <template #icon>
            <n-icon>
              <Delete16Regular />
            </n-icon>
          </template>
        </n-button>
      </div>
    </n-form-item>
    <n-button
      :bordered="!1"
      secondary
      type="info"
      size="small"
      class="mt-1"
      @click="educations.push({ level: 'pts', name: '', id: Number(new Date()) })"
    >
      <template #icon>
        <n-icon>
          <Add16Filled class="size-4" />
        </n-icon>
      </template>
      <span class="font-secondary size-4">Tambah</span>
    </n-button>
  </div>
</template>

<style lang="scss" scoped>
.ed-row {
  flex-wrap: wrap;
  &-name {
    width: 100%;
  }
  &-level {
    flex: 1;
  }
  &-date {
    width: 60%
  }
}
</style>