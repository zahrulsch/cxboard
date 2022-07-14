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
import CommonHeader from '../components/common/CommonHeader.vue';

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
    EmployeeOfficeDataEdit,
    CommonHeader
  }
})
</script>

<template>
  <layout>
    <SectionPanel class="mt-3">
      <common-header fontWeight="semibold">Tambahkan Pegawai</common-header>
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
            v-model:startWork="addPayload.startWork"
            v-model:endWork="addPayload.endWork"
            v-model:status="addPayload.status"
            v-model:officeEmail="addPayload.officeEmail"
            v-model:officeEmailPassword="addPayload.officeEmailPassword"
          />
          <n-divider style="margin: 0;"/>
          <employee-education-edit 
            v-model:schools="addPayload.schools"
          />
          <n-divider style="margin: 0;"/>
          <employee-marriage-edit 
            v-model:marriage="addPayload.marriageStatus"
          />
        </div>
        <n-divider vertical class="mx-0 v-dvd"/>
        <div class="eadd-right">
          <n-divider class="dvd" style="margin: 0;"/>
          <employee-photo-edit />
          <employee-actions class="mt-2" />
        </div>
      </div>
    </SectionPanel>
  </layout>
</template>

<style lang="scss" scoped>
.v-dvd {
  height: auto;
  display: none;
  @include res('small') {
    display: inherit;
  }
}
.eadd {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  width: 100%;

  @include res('small') {
    flex-direction: row;
    column-gap: 1em;
  }

  &-left {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    @include res('small') {
      width: 60%;
    }
    @include res('medium') {
      width: 62%;
    }
    @include res('large') {
      width: 65%;
    }
    @include res('xlarge') {
      width: 70%;
    }
    @include res('xxlarge') {
      width: 72%;
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