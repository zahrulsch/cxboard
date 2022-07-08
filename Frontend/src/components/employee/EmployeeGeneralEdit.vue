<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NInput, NFormItem, NSelect, NDatePicker, NInputNumber } from 'naive-ui';
import validate from 'validator/es/lib/isEmail'

type Validation = 'error' | 'warning' | 'success'

export default defineComponent({
  name: 'EmployeeGeneralEdit',
  components: { NInput, NFormItem, NSelect, NDatePicker, NInputNumber },
  data: () => ({
    vname: 'success' as Validation,
    vemail: 'success' as Validation,
    vplace: 'success' as Validation,
    vdate: 'success' as Validation,
  }),
  computed: {
    genders: function() {
      return [
        {
          value: 'MALE',
          label: 'Pria'
        },
        {
          value: 'FEMALE',
          label: 'Wanita'
        }
      ]
    }
  },
  props: {
    name: String,
    email: String,
    gender: String as PropType<'MALE'|'FEMALE'>,
    placeBirth: String,
    dateBirth: Number,
    address: String,
    handphone: String
  },
  emits: ['update:name', 'update:email', 'update:gender', 'update:placeBirth', 'update:dateBirth', 'update:address', 'update:handphone'],
  methods: {
    validateName: function() {
      if (this.name) {
        if (!this.name.trim()) this.vname = 'error'
        else this.vname = 'success'
      } else {
        this.vname = 'error'
      }
    },
    validateEmail: function() {
      if (this.email) {
        if (!validate(this.email.trim())) this.vemail = 'error'
        else this.vemail = 'success'
      } else {
        this.vemail = 'error'
      }
    },
    validatePlace: function() {
      if (this.placeBirth) {
        if (!this.placeBirth.trim()) this.vplace = 'error'
        else this.vplace = 'success'
      } else {
        this.vplace = 'error'
      }
    },
    validateDate: function() {
      if (this.dateBirth) {
        if (!this.dateBirth) this.vdate = 'error'
        else this.vdate = 'success'
      } else {
        this.vdate = 'error'
      }
    }
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-2 px-2">
    <n-form-item label="Nama" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
      <n-input :status="vname" @focus="validateName" @blur="validateName" :value="name" @update:value="v => $emit('update:name', v)" class="bg-panel-primary" placeholder="Michelle xx"/>
    </n-form-item>
    <n-form-item label="Email" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
      <n-input :status="vemail" @focus="validateEmail" @blur="validateEmail" :value="email" @update:value="v => $emit('update:email', v)" type="text" class="bg-panel-primary" placeholder="michellin@yahoo.com"/>
    </n-form-item>
    <n-form-item label="No Handphone" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
      <n-input :show-button="false" style="width: 100%;" :value="handphone" @update:value="v => $emit('update:handphone', v)" type="text" class="bg-panel-primary" placeholder="82237320907">
        <template #prefix>+62</template>
      </n-input>
    </n-form-item>
    <n-form-item style="width: 100%;" label="Jenis Kelamin" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
      <n-select :value="gender" @update:value="v => $emit('update:gender', v)" :options="genders" placeholder="Pilih Jenis Kelamin"/>
    </n-form-item>
    <div class="is-flex gap-x-4">
      <n-form-item label="Tempat Lahir" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
        <n-input :status="vplace" @focus="validatePlace" @blur="validatePlace" :value="placeBirth" @update:value="v => $emit('update:placeBirth', v)" class="bg-panel-primary" placeholder="California"/>
      </n-form-item>
      <n-form-item style="flex: 1;" label="Tanggal Lahir" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
        <n-date-picker :status="vdate" @focus="validateDate" @blur="validateDate" format="dd/MM/yyyy" :value="dateBirth" @update:value="v => $emit('update:dateBirth', v)" class="bg-panel-primary" placeholder="Pilih Tanggal Lahir" type="date" clearable/>
      </n-form-item>
    </div>
    <n-form-item style="flex: 1;" label="Alamat" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
      <n-input
        :value="address"
        @update:value="v => $emit('update:address', v)"
        rows="6"
        class="bg-panel-primary"
        placeholder="Jl. Mangga No.12 RT2 RW 1 ..." 
        type="textarea" 
        clearable 
       />
    </n-form-item>
  </div>
</template>

<style lang="scss">
.n-date-picker {
  & > * {
    --n-color: var(--bg-primary) !important;
  }
}
</style>