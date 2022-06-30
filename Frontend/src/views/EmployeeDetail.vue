<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useCQuery } from '../apis/customQuery'
import { NDivider, NIcon, NButton } from 'naive-ui'
import { QuestionCircle20Regular, Edit16Regular } from '@vicons/fluent'
import Layout from '../components/layout/Layout.vue';
import SectionPanel from '../components/layout/SectionPanel.vue';
import EmployeeSchoolLevel from '../components/employee/EmployeeSchoolLevel.vue';
import CommonLoader from '../components/common/CommonLoader.vue';

export default defineComponent({
  name: 'EmployeeDetail',
  components: {
    Layout,
    SectionPanel,
    EmployeeSchoolLevel,
    NDivider,
    NIcon,
    QuestionCircle20Regular,
    NButton,
    Edit16Regular,
    CommonLoader
  },
  setup: function() {
    const route = useRoute()
    const { id } = route.params
    const { data, isLoading } = useCQuery('getEmployee', '/employees', 'get', +id)

    return {
      employee: data,
      isLoading
    }
  },
  computed: {
    dateBirth: function() {
      if (this.employee?.data) {
        return new Date(this.employee.data.dateOfBirth).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
      }
      return '-'
    },
    gender: function() {
      if (this.employee?.data) {
        if (this.employee.data.gender === 'MALE') {
          return 'Pria'
        }
        return 'Wanita'
      }
      return '-'
    },
    marriageStatus: function() {
      if (this.employee?.data) {
        if (this.employee.data.marriageStatus) {
          return 'Menikah'
        }
        return 'Belum Menikah'
      }
      return '-'
    },
    emps: function() {
      if (this.employee?.data) {
        return [...this.employee.data.schools].sort((a, b) => a.graduateYear - b.graduateYear)
      }
      return []
    }
  }
})
</script>

<template>
  <layout>
    <div class="is-flex is-flex-direction-column py-2 gap-y-3">
      <common-loader v-if="isLoading"/>
      <template v-if="employee">
        <h4 class="font-secondary size-4 color-secondary-0 has-text-weight-semibold">Data Pegawai - {{ employee?.data?.name }}</h4>
        <div class="dpanel mt-1">
          <div class="left">
            <div class="bg-panel-primary radius-5 is-flex is-align-items-center is-justify-content-center" v-if="employee.data">
              <img v-if="!employee.data.photo" src="https://ik.imagekit.io/pv5j1g25r/download-icon-group_people_team_users_icon-1320196240876938595_512_xbk2gytLr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656044876345"/>
              <img v-else :src="employee.data.photo"/>
            </div>
            <n-button
              type="info"
              size="small"
              secondary
              @click="$router.push(`/employees/edit/${employee?.data?.id}`)"
            >
              <template #icon>
                <n-icon>
                  <edit16-regular class="size-3" />
                </n-icon>
              </template>
              <span class="font-secondary size-4">Edit</span>
            </n-button>
          </div>
          <n-divider class="vdivider" vertical/>
          <div class="right gap-y-4">
            <section-panel>
              <template #title>Data Personal</template>
              <div v-if="employee?.data" class="is-flex is-flex-direction-column gap-y-3">
                <div class="data gap-y-6 radius-6">
                  <span class="data-label font-secondary size-7 color-primary-5">Nama lengkap</span>
                  <span class="data-value size-3">{{employee.data.name}}</span>
                </div>
                <div class="data gap-y-6 radius-6">
                  <span class="data-label font-secondary size-7 color-primary-5">Tempat, tanggal lahir</span>
                  <span class="data-value size-3 is-capitalized">{{ employee.data.placeOfBirth }}, {{dateBirth}}</span>
                </div>
                <div class="data gap-y-6 radius-6">
                  <span class="data-label font-secondary size-7 color-primary-5">Status pernikahan</span>
                  <span class="data-value size-3 is-capitalized">{{ marriageStatus }}</span>
                </div>
                <div class="data gap-y-6 radius-6">
                  <span class="data-label font-secondary size-7 color-primary-5">Gender</span>
                  <span class="data-value size-3">{{ gender }}</span>
                </div>
                <div class="data gap-y-6 radius-6">
                  <span class="data-label font-secondary size-7 color-primary-5">Email</span>
                  <span class="data-value size-3">{{ employee.data.email }}</span>
                </div>
                <div class="data gap-y-6 radius-6">
                  <span class="data-label font-secondary size-7 color-primary-5">Alamat</span>
                  <span class="data-value size-3">{{ employee.data.address }}</span>
                </div>
              </div>
            </section-panel>
            <n-divider class="my-2" style="margin: 0;"/>
            <section-panel>
              <template #title>Data Pendidikan</template>
              <div v-if="employee?.data" class="is-flex is-flex-direction-column gap-y-3">
                <EmployeeSchoolLevel v-if="employee.data.schools.length" class="bg-panel-primary radius-6" v-for="sc in emps" :key="sc.id" :name="sc.name" :graduate-year="sc.graduateYear" :level="sc.level"/>
                <div class="no-edu gap-y-4" v-else>
                  <n-icon class="color-secondary-2" size="25">
                    <QuestionCircle20Regular />
                  </n-icon>
                  <span class="font-secondary size-4 color-primary-5">Belum ada data pendidikan</span>
                  <n-button
                    size="small"
                    type="primary"
                    quaternary
                  >
                    <template #icon>
                      <n-icon>
                        <Edit16Regular class="size-3" />
                      </n-icon>
                    </template>
                    <span class="font-secondary size-4">Edit</span>
                  </n-button>
                </div>
              </div>
            </section-panel>
          </div>
        </div>
      </template>
    </div>
  </layout>
</template>

<style lang="scss" scoped>
.vdivider {
  height: auto;
  margin: 0;
  display: none;
  
  @include res('small') {
    display: inherit;
  }
}
.data {
  display: flex;
  flex-direction: column;
  padding: .375rem .52rem;
  background-color: var(--bg-primary);
}
.no-edu {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.dpanel {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: .75rem;

  @include res('small') {
    min-height: 80vh;
    column-gap: 1rem;
  }
  & .left {
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    width: 100%;

    @include res('small') {
      width: 25%;
    }
    @include res('medium') {
      width: 29%;
    }
    @include res('large') {
      width: 22%;
    }
    @include res('xlarge') {
      width: 20%;
    }
  }
  & .right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>