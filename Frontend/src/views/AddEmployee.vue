<script lang="ts">
import { defineComponent } from 'vue';
import { NInput, NFormItem, NDivider } from 'naive-ui';
import Layout from '../components/layout/Layout.vue';
import SectionPanel from '../components/layout/SectionPanel.vue';
import EmployeeGeneralEdit from '../components/employee/EmployeeGeneralEdit.vue';
import EmployeeEducationEdit from '../components/employee/EmployeeEducationEdit.vue';
import EmployeeMarriageEdit from '../components/employee/EmployeeMarriageEdit.vue';
import EmployeePhotoEdit from '../components/employee/EmployeePhotoEdit.vue';
import EmployeeActions from '../components/employee/EmployeeActions.vue';

export default defineComponent({
  name: 'AddEmployee',
  components: {
    Layout,
    SectionPanel,
    NInput,
    NFormItem,
    EmployeeGeneralEdit,
    EmployeeEducationEdit,
    NDivider,
    EmployeeMarriageEdit,
    EmployeePhotoEdit,
    EmployeeActions
  }
})
</script>

<template>
  <layout>
    <SectionPanel class="mt-3">
      <template #title>Tambahkan Pegawai</template>
      <employee-general-edit />
      <NDivider class="px-2" style="margin: 0;"/>
      <employee-education-edit />
      <NDivider class="px-2" style="margin: 0;"/>
      <employee-marriage-edit />
      <NDivider class="px-2" style="margin: 0;"/>
      <employee-photo-edit />
      <!-- <NDivider class="px-2" style="margin: 0;"/> -->
      <employee-actions class="mt-2" />
    </SectionPanel>
  </layout>
</template>