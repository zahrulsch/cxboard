<script lang="ts">
import { defineComponent } from 'vue';
import { NInput, NFormItem, NDivider } from 'naive-ui';
import { useAddEmployeePayload } from '../stores/addEmployeePayload';
import Layout from '../components/layout/Layout.vue';
import SectionPanel from '../components/layout/SectionPanel.vue';
import EmployeeGeneralEdit from '../components/employee/EmployeeGeneralEdit.vue';
import EmployeeEducationEdit from '../components/employee/EmployeeEducationEdit.vue';
import EmployeeMarriageEdit from '../components/employee/EmployeeMarriageEdit.vue';
import EmployeePhotoEdit from '../components/employee/EmployeePhotoEdit.vue';
import EmployeeActions from '../components/employee/EmployeeActions.vue';
import EmployeeOfficeDataEdit from '../components/employee/EmployeeOfficeDataEdit.vue';

export default defineComponent({
  name: 'AddEmployee',
  setup: function() {
    return {
      addPayload: useAddEmployeePayload()
    }
  },
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
    EmployeeActions,
    EmployeeOfficeDataEdit
  }
})
</script>

<template>
  <layout>
    <SectionPanel class="mt-3">
      <template #title>Tambahkan Pegawai</template>
      <div class="eadd">
        <div class="eadd-left">
          <employee-general-edit
            v-model:name="addPayload.name"
            v-model:email="addPayload.email"
            v-model:gender="addPayload.gender"
            v-model:placeBirth="addPayload.placeOfBirth"
            v-model:dateBirth="addPayload.dateOfBirth"
            v-model:address="addPayload.address"
            v-model:handphone="addPayload.handphone"
          />
          <!-- <n-divider class="px-2" style="margin: 0;"/> -->
          <employee-office-data-edit 
            class="px-2"
            v-model:startWork="addPayload.startWork"
            v-model:endWork="addPayload.endWork"
            v-model:status="addPayload.status"
            v-model:officeEmail="addPayload.officeEmail"
            v-model:officeEmailPassword="addPayload.officeEmailPassword"
          />
          <n-divider class="px-2" style="margin: 0;"/>
          <employee-education-edit 
            v-model:schools="addPayload.schools"
          />
          <n-divider class="px-2" style="margin: 0;"/>
          <employee-marriage-edit 
            v-model:marriage="addPayload.marriageStatus"
          />
        </div>
        <div class="eadd-right">
          <n-divider class="px-2 dvd" style="margin: 0;"/>
          <employee-photo-edit />
          <employee-actions class="mt-2" />
        </div>
      </div>
    </SectionPanel>
  </layout>
</template>

<style lang="scss" scoped>
.eadd {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  width: 100%;

  @include res('small') {
    flex-direction: row;
    min-height: 80vh;
    column-gap: 1em;
  }

  &-left {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    @include res('small') {
      width: 65%;
    }
  }

  &-right {
    display: flex;
    flex-direction: column;
    flex: 1;
    & .dvd {
      @include res('small') {
        display: none;
      }
    }
  }
}
</style>