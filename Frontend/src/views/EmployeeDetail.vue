<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCQuery } from '../apis/customQuery'
import { NDivider, NIcon, NButton } from 'naive-ui'
import { QuestionCircle20Regular, Circle16Filled } from '@vicons/fluent'
import { kebab } from 'case';
import { requester } from '../apis/generalRequester';
import Layout from '../components/layout/Layout.vue';
import SectionPanel from '../components/layout/SectionPanel.vue';
import EmployeeSchoolLevel from '../components/employee/EmployeeSchoolLevel.vue';
import CommonLoader from '../components/common/CommonLoader.vue';
import SuggestEmployee from '../components/suggest/SuggestEmployee.vue';
import CommonHeader from '../components/common/CommonHeader.vue';
import ActivitySingleCard from '../components/activity/ActivitySingleCard.vue';
import noimage from '../assets/noimage.png'

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
    CommonLoader,
    Circle16Filled,
    SuggestEmployee,
    CommonHeader,
    ActivitySingleCard
  },
  setup: function() {
    const route = useRoute()
    const loadingSuggests = ref(false)
    const suggests = ref<{ name: string; id: number; type: string; photo: string | null; }[]>([])
    const { data, isLoading, isFetching, refetch } = useCQuery('getEmployee', '/employees', 'get', computed(() => +route.params.id), null, { enabled: false,  })

    return {
      employee: data,
      isLoading,
      kebab,
      refetch,
      suggests,
      loadingSuggests,
      requester,
      isFetching,
      noimage
    }
  },
  watch: {
    '$route.params.id': {
      handler: function(n) {
        if (n) {
          this.refetch()
          this.requester<{ data: { name: string; id: number; type: string; photo: string | null; }[] }>('/suggests/employee/' + n, 'get', null, null, {
            onSuccess: ({ data }) => {
              this.suggests = data
            },
            onLoading: v => this.loadingSuggests = v
          })
        }
      },
      immediate: true
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
    },
    handphone: function() {
      if (this.employee?.data?.handphone) {
        return '+62' + String(this.employee.data.handphone)
      }
      return '-'
    },
    startDate: function() {
      if (this.employee?.data?.startWork) {
        return new Date(this.employee.data.startWork).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
      }
      return '-'
    },
    endDate: function() {
      if (this.employee?.data?.endWork) {
        return new Date(this.employee.data.endWork).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
      }
      return '-'
    }
  }
})
</script>

<template>
  <layout>
    <div class="is-flex is-flex-direction-column py-2 gap-y-3">
      <common-loader style="min-height: 700px;" v-if="isLoading || isFetching"/>
      <template v-if="employee && !isLoading && !isFetching">
        <common-header :font-weight="'semibold'">Data Pegawai - {{ employee?.data?.name }}</common-header>
        <div class="dpanel mt-1">
          <div class="left">
            <div class="bg-panel-primary is-flex is-align-items-center is-justify-content-center" v-if="employee.data">
              <img v-if="!employee.data.photo" :src="noimage"/>
              <img v-else :src="employee.data.photo"/>
            </div>
            <div class="left-secondary gap-y-4">
              <n-divider class="my-1"/>
              <common-header font-weight="semibold" type="light" >Posisi</common-header>
              <div v-if="employee.data?.teams.length" v-for="(t, i) in employee.data?.teams" class="bg-panel-primary p-2 drow" :key="i">
                <div class="is-flex is-align-items-start gap-x-7">
                  <n-icon
                    :class="kebab('c ' + t.role)"
                  ><circle16-filled class="size-7" /></n-icon>
                  <span class="size-5 has-text-weight-medium font-secondary">{{" " + t.role}} di {{ t.team }}</span>
                </div>
              </div>
              <div class="px-2 py-1 bg-panel-primary" v-else>
                <span class="size-4 color-primary-5 has-text-weight-light"> Belum ada peran di team manapun</span>
              </div>
            </div>
            <n-divider class="my-2" style="margin: 0;"/>
            <section-panel>
              <common-header font-weight="semibold" type="light" >Riwayat Pendidikan</common-header>
              <div v-if="employee?.data" class="is-flex is-flex-direction-column gap-y-3">
                <EmployeeSchoolLevel v-if="employee.data.schools.length" class="bg-panel-primary" v-for="sc in emps" :key="sc.id" :name="sc.name" :graduate-year="sc.graduateYear" :level="sc.level"/>
                <div class="no-edu gap-y-4" v-else>
                  <n-icon class="color-primary-6" size="25">
                    <QuestionCircle20Regular />
                  </n-icon>
                  <span class="font-secondary size-5 color-primary-5">Belum ada data pendidikan</span>
                </div>
              </div>
            </section-panel>
          </div>
          <n-divider class="vdivider" vertical/>
          <div class="right gap-y-4">
            <section-panel accesskey="d">
              <div class="is-flex is-align-items-end is-justify-content-space-between">
                <common-header font-weight="semibold" type="light" >Data Personal</common-header>
                <n-button
                  @click="$router.push(`/employees/edit/${employee?.data?.id}`)"
                  class="edit-nonmobile"
                  type="primary"
                  size="tiny"
                  
                >
                  <span class="font-secondary has-text-weight-semibold size-5">Ubah Data</span>
                </n-button>
              </div>
              <div v-if="employee?.data" class="is-flex is-flex-direction-column gap-y-3">
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Nama lengkap</span>
                  <span class="data-value size-3">{{employee.data.name}}</span>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Tempat, tanggal lahir</span>
                  <span class="data-value size-3 is-capitalized">{{ employee.data.placeOfBirth }}, {{dateBirth}}</span>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Status pernikahan</span>
                  <span class="data-value size-3 is-capitalized">{{ marriageStatus }}</span>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Gender</span>
                  <span class="data-value size-3">{{ gender }}</span>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Email</span>
                  <span class="data-value size-3">{{ employee.data.email }}</span>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">No. Handphone</span>
                  <span class="data-value size-3">{{ handphone }}</span>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Alamat</span>
                  <span class="data-value size-3">{{ employee.data.address||'-' }}</span>
                </div>
              </div>
            </section-panel>
            <n-divider class="my-2" style="margin: 0;"/>
            <section-panel v-if="employee.data">
              <common-header font-weight="semibold" type="light" >Data Kantor</common-header>
              <div class="is-flex is-flex-direction-column gap-y-3">
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Status Kerja</span>
                  <div class="is-flex is-align-items-center gap-x-7">
                    <n-icon>
                      <circle16-filled :class="[`status-${employee.data.status}`, 'size-7']"/>
                    </n-icon>
                    <span class="data-value size-3 is-capitalized">{{ employee.data.status }}</span>
                  </div>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Email Kantor</span>
                  <span class="data-value size-3">{{ employee.data.officeEmail || '-' }}</span>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Password Email</span>
                  <span class="data-value size-3">{{ employee.data.officeEmailPassword || '-' }}</span>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Mulai Berkerja</span>
                  <span class="data-value size-3">{{ startDate }}</span>
                </div>
                <div class="data gap-y-6">
                  <span class="data-label font-secondary size-6 color-primary-5 has-text-weight-medium">Berhenti Kerja</span>
                  <span class="data-value size-3">{{ endDate }}</span>
                </div>
              </div>
            </section-panel>
            <n-divider class="my-2" style="margin: 0;"/>
            <section-panel class="mb-2">
              <common-header font-weight="semibold" type="light" >Pernah Mengikuti Kegiatan</common-header>
              <div v-if="employee?.data" class="is-flex is-flex-direction-column gap-y-3">
                <div class="list-of-activities" v-if="employee.data.activities.length">
                  <activity-single-card 
                    v-for="a in employee.data.activities"
                    :id="a.id"
                    :name="a.name"
                    :pic="a.photo"
                    :date="a.startDate"
                    :status="a.status"
                    :place="a.venue"
                  />
                </div>
                <div v-else class="no-edu gap-y-4">
                  <n-icon class="color-primary-7" size="25">
                    <QuestionCircle20Regular />
                  </n-icon>
                  <span class="font-secondary size-4 color-primary-7">Belum ada aktivitas pada pegawai ini</span>
                </div>
              </div>
            </section-panel>
            <!-- <n-divider class="my-2" style="margin: 0;"/> -->
            <!-- <section-panel>
              <template #title>Pernah Mengkuti Kegiatan</template>
              <div v-if="employee?.data" class="is-flex is-flex-direction-column gap-y-3">
                <EmployeeSchoolLevel v-if="employee.data.schools.length" class="bg-panel-primary" v-for="sc in emps" :key="sc.id" :name="sc.name" :graduate-year="sc.graduateYear" :level="sc.level"/>
                <div class="no-edu gap-y-4" v-else>
                  <n-icon class="color-primary-6" size="25">
                    <QuestionCircle20Regular />
                  </n-icon>
                  <span class="font-secondary size-4 color-primary-5">Belum ada data pendidikan</span>
                </div>
              </div>
            </section-panel> -->
            <n-button
              @click="$router.push(`/employees/edit/${employee?.data?.id}`)"
              class="edit-mobile"
              type="info"
              size="small"
              secondary
            >
              <template #icon>
                <n-icon>
                  <edit16-regular class="size-3" />
                </n-icon>
              </template>
              <span class="font-secondary size-4">Ubah Data</span>
            </n-button>
            <template v-if="suggests.length">
              <n-divider class="my-2" style="margin: 0;"/>
              <section-panel>
                <common-header font-weight="semibold" type="light" >Pegawai Terkait</common-header>
                <div class="suggestion-list">
                  <suggest-employee 
                    v-for="e in suggests"
                    :key="e.id"
                    :id="e.id"
                    :name="e.name"
                    :type="e.type"
                    :photo="e.photo"
                  />
                </div>
              </section-panel>
            </template>
          </div>
        </div>
      </template>
    </div>
  </layout>
</template>

<style lang="scss" scoped>
.list-of-activities {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  @include res('small') {
    grid-template-columns: repeat(3, 1fr);
  }
  @include res('large') {
    grid-template-columns: repeat(4, 1fr);
  }
  @include res('xlarge') {
    grid-template-columns: repeat(5, 1fr);
  }
  @include res('xxlarge') {
    grid-template-columns: repeat(6, 1fr);
  }
}
.status {
  &-active {
    color: rgb(40, 228, 40);
  }
  &-nonactive {
    color: rgb(102, 102, 102);
  }
}
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
  min-height: 200px;
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
    column-gap: 1rem;
  }
  & .left {
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    width: 100%;

    &-secondary {
      display: flex;
      flex-direction: column;

      & .drow {
        display: flex;
        align-items: center;
      }
    }

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
    position: relative;
    & .edit-mobile {
      display: inherit;
      @include res('small') {
        display: none;
      }
    }
    & .edit-nonmobile {
      display: none;
      @include res('small') {
        display: inherit;
      }
    }
  }
}
.suggestion-list {
  display: grid;
  gap: var(--space-3);
  grid-auto-rows: minmax(20px, 1fr);
  grid-template-columns: repeat(1, 1fr);
  
  @include res('medium') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include res('xlarge') {
    grid-template-columns: repeat(3, 1fr);
  }
  
}
</style>