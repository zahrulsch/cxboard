<script lang="ts" setup>
import Layout from '../components/layout/Layout.vue'
import ActivityGeneralEdit from '../components/activity/ActivityGeneralEdit.vue'
import ActivityPhotosEdit from '../components/activity/ActivityPhotosEdit.vue';
import SectionPanel from '../components/layout/SectionPanel.vue';
import CommonHeader from '../components/common/CommonHeader.vue';
import ActivityMemberEdit from '../components/activity/ActivityMemberEdit.vue';
import ActivityAddAction from '../components/activity/ActivityAddAction.vue';
import { NDivider } from 'naive-ui'
import { useAddActivityPayload } from '../stores/addActivityPayload';

const actStore =  useAddActivityPayload()
</script>
<template>
  <layout>
    <section-panel class="mt-3">
      <common-header add-outer-class="px-1">Tambahkan Aktivitas</common-header>
      <div class="activity-inputs px-1">
        <div class="left">
          <activity-general-edit 
            v-model:name="actStore.name"
            v-model:detail="actStore.detail"
            v-model:startDate="actStore.startDate"
            v-model:endDate="actStore.endDate"
            v-model:venue="actStore.venue"
            v-model:status="actStore.status"
          />
          <n-divider />
          <activity-member-edit
            v-model:employees="actStore.employees"
          />
        </div>
        <n-divider class="dvd-h my-2"/>
        <n-divider class="dvd-v mx-0" vertical/>
        <div class="right">
          <activity-photos-edit />
          <activity-add-action class="mt-0" />
        </div>
      </div>
    </section-panel>
  </layout>
</template>

<style lang="scss">
.activity-inputs {
  display: flex;
  flex-direction: column;
  row-gap: var(--space-3);
  & .dvd-v {
    display: none;
  }
  @include res('small') {
    flex-direction: row;
    column-gap: var(--space-2);
    & .dvd-h {
      display: none;
    }
    & .dvd-v {
      display: inherit;
      height: auto;
    }
    & .right {
      width: 40%;
      display: flex;
      flex-direction: column;
      row-gap: var(--space-3);
    }
    & .left {
      flex: 1;
    }
  }
  @include res('medium') {
    & .right {
      width: 30%;
    }
  }
  @include res('large') {
    & .right {
      width: 28%;
    }
  }
  @include res('xlarge') {
    & .right {
      width: 29%;
    }
  }
  @include res('xxlarge') {
    & .right {
      width: 25%;
    }
  }
}
</style>