<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NButton, NIcon } from 'naive-ui'
import { Add16Filled } from '@vicons/fluent'
import { Mutation } from '../../apis/customMutation';
import EmployeeEducationField from './EmployeeEducationField.vue';

export default defineComponent({
  name: 'EmployeeEducationEdit',
  components: {
    NButton,
    NIcon,
    Add16Filled,
    EmployeeEducationField
  },
  props: {
    schools: {
      type: Array as PropType<NonNullable<Mutation['addEmployee']['data']['schools']>>
    }
  },
  emits: ['update:schools'],
  methods: {
    onAddField: function() {
      if (this.schools) {
        const schools = [...this.schools]
        schools.push({graduateYear: 2020, id: 0, level: 'sma', name: '', schoolId: 0})
        this.$emit('update:schools', schools)
      } else {
        const schools = []
        schools.push({graduateYear: 2020, id: 0, level: 'sma', name: '', schoolId: 0})
        this.$emit('update:schools', schools)
      }
    }
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4">
    <h4 class="size-5 font-primary">Riwayat Pendidikan</h4>
    <EmployeeEducationField 
      v-for="(f, index) in schools"
      :key="index"
      :index="index"
      :schools="schools"
      @update:schools="v => $emit('update:schools', v)"
    />
    <n-button
      :bordered="!1"
      secondary
      type="info"
      class="mt-1"
      @click="onAddField"
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