<script lang="ts">
import { defineComponent } from 'vue';
import { NRadio, NRadioGroup, NFormItem } from 'naive-ui'

export default defineComponent({
  name: 'EmployeeMarriageEdit',
  components: { 
    NRadio, 
    NRadioGroup, 
    NFormItem 
  },
  props: {
    marriage: Boolean
  },
  emits: ['update:marriage']
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4 px-2">
    <n-form-item size="small" label="Status Pernikahan" :show-feedback="false" :label-props="{class: 'size-3'}">
      <n-radio-group :value="marriage ? 'yes': 'no'" @update:value="v => v === 'yes' ? $emit('update:marriage', true) : $emit('update:marriage', false)" class="is-flex is-flex-direction-column gap-y-6" value="" name="m-status">
        <n-radio size="small" value="yes">
          <span class="color-primary-3 size-3">Sudah Menikah</span>
        </n-radio>
        <n-radio size="small" value="no">
          <span class="color-primary-3 size-3">Belum Menikah</span>
        </n-radio>
      </n-radio-group>
    </n-form-item>
  </div>
</template>