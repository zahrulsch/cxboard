<script lang="ts">
import { defineComponent } from 'vue';
import { NInput, NFormItem, NSelect, NDatePicker } from 'naive-ui';

export default defineComponent({
  name: 'EmployeeGeneralEdit',
  components: { NInput, NFormItem, NSelect, NDatePicker },
  computed: {
    genders: function() {
      return [
        {
          value: 'MALE',
          label: 'Pria'
        },
        {
          value: 'FEMALE',
          label: 'Perempuan'
        }
      ]
    }
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4 px-2">
    <n-form-item label="Nama" :show-feedback="false" :label-props="{class: 'size-3'}">
      <n-input class="bg-panel-primary radius-4" placeholder="Michelle xx" :bordered="!1"/>
    </n-form-item>
    <n-form-item label="Email" :show-feedback="false" :label-props="{class: 'size-3'}">
      <n-input type="text" class="bg-panel-primary radius-4" placeholder="michellin@yahoo.co.id" :bordered="!1"/>
    </n-form-item>
    <div class="is-flex gap-x-4">
      <n-form-item label="Kode Tim" :show-feedback="false" :label-props="{class: 'size-3'}">
        <n-input class="bg-panel-primary radius-4" placeholder="GA1" :bordered="!1"/>
      </n-form-item>
      <n-form-item style="width: 100%;" label="Jenis Kelamin" :show-feedback="false" :label-props="{class: 'size-3'}">
        <n-select class="radius-4" :options="genders" placeholder="Pilih Jenis Kelamin" :bordered="!1"/>
      </n-form-item>
    </div>
    <div class="is-flex gap-x-4">
      <n-form-item label="Tempat Lahir" :show-feedback="false" :label-props="{class: 'size-3'}">
        <n-input class="bg-panel-primary radius-4" placeholder="Ponorogo" :bordered="!1"/>
      </n-form-item>
      <n-form-item style="flex: 1;" label="Tanggal Lahir" :show-feedback="false" :label-props="{class: 'size-3'}">
        <n-date-picker class="radius-4 bg-panel-primary" placeholder="Pilih Tanggal Lahir" type="date" clearable :bordered="!1"/>
      </n-form-item>
    </div>
    <n-form-item style="flex: 1;" label="Alamat" :show-feedback="false" :label-props="{class: 'size-3'}">
      <n-input
        rows="6"
        class="bg-panel-primary radius-4"
        placeholder="Jl. Mangga No.12 RT2 RW 1 ..." 
        type="textarea" 
        clearable 
        :bordered="!1"/>
    </n-form-item>
  </div>
</template>