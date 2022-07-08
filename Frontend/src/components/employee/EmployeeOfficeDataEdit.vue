<script lang="ts" setup>
import { NInput, NFormItem, NDatePicker, NSelect } from 'naive-ui';
import { computed } from 'vue';

const props = defineProps<{
  startWork?: number
  endWork?: number | null
  status?: string
  officeEmail?: string
  officeEmailPassword?: string
}>()

const emit = defineEmits<{
  (e: 'update:startWork', data: number): void
  (e: 'update:endWork', data: number): void
  (e: 'update:status', data: string): void
  (e: 'update:officeEmail', data: string): void
  (e: 'update:officeEmailPassword', data: string): void
}>()

const cstatus = computed(() => {
  return [
    {
      value: 'active',
      label: 'Active'
    },
    {
      value: 'nonactive',
      label: 'Non Active'
    },
    {
      value: 'resign',
      label: 'Resign'
    },
    {
      value: 'retired',
      label: 'Retired'
    },
  ]
})
</script>

<template>
  <div class="font-secondary office-data">
    <div class="input-rows">
      <div class="input-rows-horizon">
        <n-form-item label="Email Kantor" :show-feedback="false" :label-props="{class: 'size-3'}">
          <n-input 
            placeholder="galang@pdcoke.com"
            class="bg-panel-primary"
            :value="props.officeEmail"
            @update:value="v => emit('update:officeEmail', v)"
          />
        </n-form-item>
        <n-form-item label="Password" :show-feedback="false" :label-props="{class: 'size-3'}">
          <n-input 
            placeholder="••••••••"
            class="bg-panel-primary"
            type="password"
            :show-password-on="'click'"
            :value="props.officeEmailPassword"
            @update:value="v => emit('update:officeEmailPassword', v)"
          />
        </n-form-item>
      </div>
      <div class="input-rows-horizon">
        <n-form-item label="Mulai Kerja" :show-feedback="false" :label-props="{class: 'size-3'}">
          <n-date-picker 
            style="width: 100%;" 
            placeholder="Pilih tanggal awal"
            format="dd MMMM yyyy"
            :value="props.startWork"
            @update:value="v => emit('update:startWork', v)"
          />
        </n-form-item>
        <n-form-item label="Berhenti Kerja" :show-feedback="false" :label-props="{class: 'size-3'}">
          <n-date-picker 
            style="width: 100%;"
            placeholder="Pilih tanggal akhir"
            format="dd-MMMM-yyyy"
            :value="props.endWork"
            @update:value="v => emit('update:endWork', v)"
            clearable
           />
        </n-form-item>
        <n-form-item label="Status" :show-feedback="false" :label-props="{class: 'size-3'}">
          <n-select 
            style="width: 100%;"
            placeholder="Pilih status"
            :options="cstatus"
            :value="props.status"
            @update:value="v => emit('update:status', v)"
            clearable
           />
        </n-form-item>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.office-data {
  & .input-rows {
    display: flex;
    flex-direction: row-reverse;
    column-gap: var(--space-2);
    row-gap: var(--space-2);
    &-horizon {
      column-gap: var(--space-2);
      row-gap: var(--space-2);
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>