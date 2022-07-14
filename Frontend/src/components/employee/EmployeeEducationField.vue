<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NFormItem, NInput, NSelect, NInputNumber, NButton, NIcon, NAutoComplete, AutoCompleteOption } from 'naive-ui';
import { Delete16Regular } from '@vicons/fluent'
import type { Query } from '../../apis/customQuery';
import type { Mutation } from '../../apis/customMutation';
import { requester, RequesterOptions } from '../../apis/generalRequester';

export default defineComponent({
  name: 'EmployeeEducationField',
  setup: function() {
    function schoolsRequester(query?: Query['getSchools']['query'], options?: RequesterOptions<{data: Query['getSchools']['response']}>) {
      requester<{data: Query['getSchools']['response']}>('/schools/list', 'get', undefined, { ...query }, {...options})
    }

    return {
      schoolsRequester: schoolsRequester,
    }
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    schools: {
      type: Array as PropType<NonNullable<Mutation['addEmployee']['data']['schools']>>,
    }
  },
  emits: ['update:schools'],
  components: {
    NFormItem,
    NInput, 
    NSelect,
    NInputNumber, 
    NButton,
    NIcon,
    Delete16Regular,
    NAutoComplete
  },
  data: () => ({
    nameOptions: [] as AutoCompleteOption[],
    debFunc: null as null | (() => void)
  }),
  computed: {
    levelOptions: function() {
      return [ { value: 'sma', label: 'SMA' }, { value: 'smp', label: 'SMP' }, { value: 'sd', label: 'SD' }, { value: 'tk', label: 'TK' }, { value: 'pts', label: 'PTS' }, { value: 'ptn', label: 'PTN' } ]
    }
  },
  watch: {
    schools : {
      handler: function() {
        this.debFunc && this.debFunc()        
      },
      deep: true,
    }
  },
  methods: {
    updateLevel: function(v: any) {
      if (this.schools) {
        const sch = [...this.schools]
        sch[this.index] = { ...sch[this.index], level: v }
        this.$emit('update:schools', sch)
      }
    },
    updateName: function(v: string) {
      if (this.schools) {
        const sch = [...this.schools]
        const selected = [...this.nameOptions.filter(name => name.label === v)]
  
        if (selected.length) sch[this.index] = { ...sch[this.index], schoolId: selected[0].value ? +selected[0].value : 0 }
          
        sch[this.index] = { ...sch[this.index], name: v }
        this.$emit('update:schools', sch)
      }
    },
    updateYear: function(v: any) {
      if (this.schools) {
        const sch = [...this.schools]
        sch[this.index] = { ...sch[this.index], graduateYear: v }
        this.$emit('update:schools', sch)
      }
    },
    debounced: function() {
      let timer: string | number | NodeJS.Timeout | undefined
      const func = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          return this.schoolsRequester({ name: this.schools?.[this.index].name }, { 
            onSuccess: data => {
              this.nameOptions = data.data.map(d => ({ label: d.name, value: String(d.id) }))
              this.nameOptions.push({ label: this.schools?.[this.index].name, value: '0' })
            }
          })
        }, 500)
      }
      return func
    }
  },
  beforeMount: function() {
    this.debFunc = this.debounced()
  }
})
</script>

<template>
  <n-form-item style="width: 100%;" :show-label="false" label="Riwayat Pendidikan" :show-feedback="false" :label-props="{class: 'size-3'}">
    <div class="is-flex gap-x-3 gap-y-3 ed-row">
      <n-auto-complete 
        :options="nameOptions"
        :input-props="{ autocomplete: 'disabled' }" 
        :value="schools?.[index].name" 
        @update:value="updateName" 
        size="medium" 
        class="ed-row-name" 
        placeholder="SMA Negeri 1 Blitar" 
        :bordered="!1"
      />
      <n-select :options="levelOptions" @update-value="updateLevel" :value="schools?.[index].level" size="medium" class="ed-row-level" placeholder="Level"/>
      <n-input-number :value="schools?.[index].graduateYear" @update:value="updateYear" size="medium" :show-button="false" class="ed-row-date" placeholder="Tahun Lulus" :bordered="!1"/>
      <n-button
        type="warning"
        :bordered="false"
      >
        <template #icon>
          <n-icon>
            <Delete16Regular />
          </n-icon>
        </template>
      </n-button>
    </div>
  </n-form-item>
</template>

<style lang="scss">
.n-auto-complete, .n-input-number {
  & > * {
    --n-color: var(--bg-primary) !important;
  }
}
.ed-row {
  flex-wrap: wrap;
  width: 100%;
  &-name {
    width: 100%;
    @include res('large') {
      width: 50%;
    }
  }
  &-level {
    flex: 1;
  }
  &-date {
    @include res('large') {
      width: auto;
    }
    width: 60%
  }
}
</style>