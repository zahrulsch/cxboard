<script lang="ts" setup>
import { NInput, NFormItem, NDatePicker, NSelect } from 'naive-ui'

const props = defineProps<{
  name?: string
  venue?: string
  status?: string
  startDate?: number | null
  endDate?: number | null
  detail?: string
}>()

const emits = defineEmits<{
  ( e: 'update:name', value: string ): void
  ( e: 'update:venue', value: string ): void
  ( e: 'update:status', value: string ): void
  ( e: 'update:startDate', value: number ): void
  ( e: 'update:endDate', value: number ): void
  ( e: 'update:detail', value: string ): void
}>()

const statusoptions = [
  {
    value: 'planned',
    label: 'Direncanakan'
  },
  {
    value: 'ongoing',
    label: 'Sedang Berjalan'
  },
  {
    value: 'finish',
    label: 'Selesai'
  }
]
</script>

<template>
  <div class="activity-edit size-4">
    <n-form-item label="Nama Aktivitas" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
      <n-input 
        class="bg-panel-primary font-secondary size-3"
        placeholder="Liburan musim dingin"
        :value="name"
        @update:value="v => emits('update:name', v)"
      />
    </n-form-item>
    <n-form-item label="Tempat Pelaksanaan" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
      <n-input 
        class="bg-panel-primary font-secondary size-3"
        placeholder="New Delhi"
        :value="venue"
        @update:value="v => emits('update:venue', v)"
      />
    </n-form-item>
    <div class="rows">
      <n-form-item label="Status" class="status" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
        <n-select 
          :options="statusoptions"
          placeholder="Pilih status"
          class="font-secondary size-3"
          :value="status"
          @update:value="v => emits('update:status', v)"
        />
      </n-form-item>
      <n-form-item class="start" label="Tanggal Mulai" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
        <n-date-picker
          class="font-secondary size-3"
          placeholder="Pilih Tanggal"
          format="dd MMMM yyyy"
          style="width: 100%;"
          :value="startDate"
          @update:value="v => emits('update:startDate', v)"
        />
      </n-form-item>
      <n-form-item class="end" label="Tanggal Akhir" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
        <n-date-picker
          class="font-secondary size-3"
          placeholder="Pilih Tanggal"
          format="dd MMMM yyyy"
          style="width: 100%;"
          :value="endDate"
          @update:value="v => emits('update:endDate', v)"
        />
      </n-form-item>
    </div>
    <n-form-item label="Detail Aktivitas" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
      <n-input
        style="width: 100%;" 
        class="bg-panel-primary font-secondary size-3"
        placeholder="Masukan Deskripsi (opsional)"
        type="textarea"
        :rows="6"
        :value="detail"
        @update:value="v => emits('update:detail', v)"
      />
    </n-form-item>
  </div>
</template>

<style lang="scss">
.activity-edit {
  display: flex;
  flex-direction: column;
  row-gap: var(--space-3);
  & .rows {
    display: flex;
    width: 100%;
    column-gap: var(--space-3);
    row-gap: var(--space-3);
    flex-wrap: wrap;
    & > .status {
      width: 40%;
    }
    & > .start, & > .end {
      flex: 1;
    }
  }
}
.n-date-picker {
  > div {
    --n-color: var(--bg-primary) !important;
  }
}
</style>