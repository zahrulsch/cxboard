<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NInput, NFormItem, NSelect, NInputNumber, NButton, NIcon } from 'naive-ui'
import { Delete16Regular, Add16Filled } from '@vicons/fluent'
import { Mutation } from '../../apis/customMutation';

export default defineComponent({
  name: 'EmployeeEducationEdit',
  components: {
    NInput,
    NFormItem,
    NSelect,
    NButton,
    NIcon,
    Delete16Regular,
    Add16Filled,
    NInputNumber
  },
  props: {
    schools: Array as PropType<Mutation['addEmployee']['data']['schools']>
  },
  emits: ['update:schools'],
  methods: {
    onUpdateName: function(index: number, value: any) {
      if (this.schools) {
        const schools = [...this.schools]
        schools[index]['name'] = value
        this.$emit('update:schools', schools)
      }
    },
    onUpdateLevel: function(index: number, value: any) {
      if (this.schools) {
        const schools = [...this.schools]
        schools[index]['level'] = value
        this.$emit('update:schools', schools)
      }
    },
    onUpdateGraduateYear: function(index: number, value: any) {
      if (this.schools) {
        const schools = [...this.schools]
        schools[index]['graduateYear'] = value
        this.$emit('update:schools', schools)
      }
    },
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
    },
    onDelete: function(index: number) {
      if (this.schools) {
        const schools = [...this.schools]
        this.$emit('update:schools', schools.filter((_, i) => i !== index))
      }
    }
  },
  computed: {
    level: function() {
      return [
        {
          value: 'sma',
          label: 'SMA'
        },
        {
          value: 'smp',
          label: 'SMP'
        },
        {
          value: 'sd',
          label: 'SD'
        },
        {
          value: 'tk',
          label: 'TK'
        },
        {
          value: 'pts',
          label: 'PTS'
        },
        {
          value: 'ptn',
          label: 'PTN'
        }
      ]
    }
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4 px-2">
    <h4 class="pl-1 size-3">Riwayat Pendidikan</h4>
    <n-form-item v-for="(edu, index) in schools" :key="edu.id" :show-label="false" label="Riwayat Pendidikan" :show-feedback="false" :label-props="{class: 'size-3'}">
      <div class="is-flex gap-x-3 gap-y-3 ed-row">
        <n-input :value="edu.name" @update:value="v => onUpdateName(index, v)" size="medium" class="ed-row-name bg-panel-primary radius-4" placeholder="SMA Negeri 1 Somewhere" :bordered="!1"/>
        <n-select @update:value="v => onUpdateLevel(index, v)" :options="level" :value="edu.level" size="medium" class="ed-row-level" placeholder="Level"/>
        <n-input-number @update:value="v => onUpdateGraduateYear(index, v)" :value="edu.graduateYear" size="medium" :show-button="false" class="ed-row-date radius-4" placeholder="Tahun Lulus" :bordered="!1"/>
        <n-button
          type="warning"
          :bordered="false"
          @click="onDelete(index)"
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