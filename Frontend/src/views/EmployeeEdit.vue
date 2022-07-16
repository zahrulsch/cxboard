<script lang="ts">
import { defineComponent } from "vue"
import { useRoute } from "vue-router"
import { useCQuery } from "../apis/customQuery"
import { useEditEmployeePayload } from "../stores/editEmployeePayload"
import { NDivider } from 'naive-ui'
import Layout from "../components/layout/Layout.vue"
import SectionPanel from "../components/layout/SectionPanel.vue"
import EmployeeGeneralEdit from "../components/employee/EmployeeGeneralEdit.vue"
import EmployeeEducationEdit from "../components/employee/EmployeeEducationEdit.vue"
import EmployeePhotoReplace from "../components/employee/EmployeePhotoReplace.vue"
import EmployeePutAction from "../components/employee/EmployeePutAction.vue"
import EmployeeOfficeDataEdit from "../components/employee/EmployeeOfficeDataEdit.vue"
import EmployeeMarriageEdit from "../components/employee/EmployeeMarriageEdit.vue"

export default defineComponent({
  name: 'EmployeeEdit',
  components: {
    Layout,
    SectionPanel,
    EmployeeGeneralEdit,
    EmployeeEducationEdit,
    NDivider,
    EmployeePhotoReplace,
    EmployeePutAction,
    EmployeeOfficeDataEdit,
    EmployeeMarriageEdit
  },
  setup: function() {
    const edit = useEditEmployeePayload()
    const { id } = useRoute().params
    const { data } = useCQuery('getEmployee', '/employees', 'get', +id, null, {
      onSuccess: ({ data }) => {
        if (data) {
          const { startWork, endWork } = data
          edit.$patch({
            name: data.name,
            email: data.email,
            gender: data.gender,
            placeOfBirth: data.placeOfBirth,
            address: data.address,
            dateOfBirth: new Date(data.dateOfBirth || 0).getTime(),
            schools: data.schools,
            photo: data.photo,
            officeEmail: data.officeEmail,
            officeEmailPassword: data.officeEmailPassword,
            handphone: data.handphone,
            status: data.status
          })
          startWork && edit.$patch({ startWork: new Date(startWork).getTime() })
          endWork && edit.$patch({ endWork: new Date(endWork).getTime() })
        }
      },
      refetchOnWindowFocus: false
    })

    return {
      edit,
      data
    }
  },
  beforeUnmount: function() {
    this.edit.$reset()
  }
})
</script>

<template>
  <layout>
    <section-panel class="mt-3">
      <template #title>Ubah Data Pegawai</template>
      <div class="edit-panel gap-y-4">
        <div class="edit-panel-left gap-y-4">
          <EmployeeGeneralEdit 
            v-model:name="edit.name"
            v-model:email="edit.email"
            v-model:gender="edit.gender"
            v-model:place-birth="edit.placeOfBirth"
            v-model:address="edit.address"
            v-model:date-birth="edit.dateOfBirth"
            v-model:handphone="edit.handphone"
          />
          <n-divider class="my-1" />
          <employee-office-data-edit 
            v-model:officeEmail="edit.officeEmail"
            v-model:startWork="edit.startWork"
            v-model:endWork="edit.endWork"
            v-model:officeEmailPassword="edit.officeEmailPassword"
            v-model:status="edit.status"
          />
          <n-divider class="my-1" />
          <EmployeeEducationEdit 
            v-model:schools="edit.schools"
            id="edu-edit"
          />
          <n-divider class="my-1" />
          <employee-marriage-edit 
            v-model:marriage="edit.marriageStatus"
          />
        </div>
        <n-divider style="height: auto;" class="mx-3 vertical-divider" vertical/>
        <div class="edit-panel-right gap-y-3">
          <n-divider class="my-1 res-divider" />
          <employee-photo-replace />
          <employee-put-action />
        </div>
      </div>
    </section-panel>
  </layout>
</template>

<style lang="scss" scoped>
.vertical-divider {
  display: none;
  @include res('small') {
    display: inherit;
  }
}
.edit-panel {
  display: flex;
  flex-direction: column;
  @include res('small') {
    flex-direction: row;
  }
  &-left {
    display: flex;
    flex-direction: column;
    @include res('small') {
      width: 60%;
    }
    @include res('medium') {
      width: 65%;
    }
    @include res('large') {
      width: 69%;
    }
    @include res('xlarge') {
      width: 72%;
    }
    @include res('xxlarge') {
      width: 74%;
    }
  }
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
.res-divider {
  display: inherit;
  
  @include res('small') {
    display: none;
  }
}
</style>