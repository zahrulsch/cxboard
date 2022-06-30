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

export default defineComponent({
  name: 'EmployeeEdit',
  components: {
    Layout,
    SectionPanel,
    EmployeeGeneralEdit,
    EmployeeEducationEdit,
    NDivider,
    EmployeePhotoReplace,
    EmployeePutAction
  },
  setup: function() {
    const edit = useEditEmployeePayload()
    const { id } = useRoute().params
    const { data } = useCQuery('getEmployee', '/employees', 'get', +id, null, {
      onSuccess: ({ data }) => {
        edit.$patch({
          name: data?.name,
          email: data?.email,
          gender: data?.gender,
          placeOfBirth: data?.placeOfBirth,
          address: data?.address,
          dateOfBirth: new Date(data?.dateOfBirth || 0).getTime(),
          schools: data?.schools,
          photo: data?.photo
        })
      }
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
          />
          <n-divider class="my-1 px-3" />
          <EmployeeEducationEdit 
            v-model:schools="edit.schools"
          />
        </div>
        <div class="edit-panel-right">
          <n-divider class="my-1 px-3 res-divider" />
          <employee-photo-replace />
          <employee-put-action />
        </div>
      </div>
    </section-panel>
  </layout>
</template>

<style lang="scss" scoped>
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
  }
}
.res-divider {
  display: inherit;
  @include res('small') {
    display: none;
  }
}
</style>