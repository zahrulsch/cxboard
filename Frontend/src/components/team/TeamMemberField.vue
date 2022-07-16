<script lang="ts" setup>
import { NInput, NSelect, NInputGroup, NInputGroupLabel, NButton, NIcon, NAutoComplete, AutoCompleteOption } from 'naive-ui'
import { Delete16Filled } from '@vicons/fluent'
import { requester } from '../../apis/generalRequester';
import { Query } from '../../apis/customQuery';
import { computed, reactive, ref } from 'vue';
import { useAddTeamPayload } from '../../stores/addTeamPayload';
import { useCQuery } from '../../apis/customQuery';
import { emit } from 'process';
import { useEditTeamPayload } from '../../stores/editTeamPayload';

const { isLoading, data: roles } = useCQuery('getRoles', '/roles/list', 'get') 

// start props
const props = defineProps<{
  index: number
  employees?: {
    employeeId: number
    role: string
    roleId: number
    employeeCode: string
    name?: string
  }[]
  code?: string
}>()
// end props

// start emits
const emits = defineEmits<{
  (e: 'update:employees', args: any): void
}>()
// end emits

// start state
const team = useAddTeamPayload()
const employeeOptions: AutoCompleteOption[] = reactive([])
const loadingSuggest = ref(false)
// end state

// start method
const employeeListRequester = (name?: string) => {
  employeeOptions.length = 0
  requester<{ data: Query['getEmployees']['response'] }>('/employees/list', 'get', null, { name }, {
    onSuccess: res => {
      res.data.employees.forEach(e => employeeOptions.push({ label: e.name, value: String(e.id) }))
    },
    onLoading: v => loadingSuggest.value = v
  })
}

const withDebounced = () => {
  let timer: string | number | NodeJS.Timeout | undefined
  return (name?: string) => {
    clearTimeout(timer)
    timer = setTimeout(() => employeeListRequester(name), 200)
  }
}

const request = withDebounced()

const onUpdateName = (q: string) => {
  request(q)
  if (props.employees) {
    const rep = [...props.employees]
    rep[props.index].name = q

    if (employeeOptions.filter(o => o.label === q).length) {
      const value = employeeOptions.filter(o => o.label === q)[0].value
      if (value) rep[props.index].employeeId = +value;
    }

    emits('update:employees', rep)
  }
}

const onDeleteRow = () => {
  if (team.employees) {
    team.employees = team.employees.filter((_, i) => i !== props.index)
  }
}

const onSelectChange = (v: any) => {
  const value = +v
  if (props.employees) {
    const rep = [...props.employees]
    rep[props.index].roleId = value
    if (roleOptions.value.filter(o => o.value === v).length) {
      rep[props.index].role = roleOptions.value.filter(o => o.value === v)[0].label
    }
    emits('update:employees', rep)
  }
}

const onCodeChange = (code: any) => {
  if (props.employees) {
    const rep = [...props.employees]
    rep[props.index].employeeCode = code
    emits('update:employees', rep)
  }
}
// end method

const roleOptions = computed<{
    value: string;
    label: string;
    disabled?: boolean;
}[]>(() => {
  let options = [{value: '0', label: 'Pilih role', disabled: true}]
  if(roles.value && roles.value.data) {
    roles.value.data.forEach(r => options.push({ label: r.name, value: String(r.id), disabled: false }))
  }
  return options
})

</script>

<template>
  <div class="font-secondary add-member-row gap-x-4 gap-y-4">
    <n-auto-complete 
      placeholder="Nama pegawai"
      class="name autocomplete"
      :options="employeeOptions"
      :value="employees?.[index].name"
      @update:value="onUpdateName"
      :loading="loadingSuggest"
    />
    <n-select
      placeholder="Role"
      :options="roleOptions"
      class="roles"
      :loading="isLoading"
      :value="String(employees?.[index].roleId)"
      @update:value="onSelectChange"
    />
    <n-input-group class="code">
      <n-input-group-label class="bg-panel-secondary">{{code || team.code || '-'}}</n-input-group-label>
      <n-input 
        class="bg-panel-primary"
        placeholder="1"
        :value="employees?.[index].employeeCode"
        @update:value="onCodeChange"
      />
    </n-input-group>
    <n-button
      type="warning"
      :bordered="!1"
      @click="onDeleteRow"
    >
      <n-icon>
        <Delete16Filled class="size-0" />
      </n-icon>
    </n-button>
  </div>
</template>

<style lang="scss">
.add-member-row {
  display: flex;
  flex-wrap: wrap;
  & .autocomplete > div {
    --n-color: var(--bg-primary) !important;
  }
  & .name {
    width: 100%;
  }
  & .roles {
    width: 45%;
  }
  & .code {
    flex: 1;
  }
}
</style>