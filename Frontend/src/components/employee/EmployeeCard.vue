<script lang="ts">
import { defineComponent } from 'vue'
import { NImage, NIcon } from 'naive-ui'
import { PersonBoard24Regular, PeopleTeam20Regular } from '@vicons/fluent'
import EmployeeLevelTag from './EmployeeLevelTag.vue'

export default defineComponent({
  name: 'EmployeeCard',
  components: {
    NImage,
    NIcon,
    PersonBoard24Regular,
    PeopleTeam20Regular,
    EmployeeLevelTag
  },
  props: {
    name: String,
    level: String
  }
})
</script>

<template>
  <div class="bg-panel-primary is-flex gap-x-4 radius-4 emps p-2">
    <div class="emps-image radius-4">
    </div>
    <div class="is-flex is-flex-direction-column gap-y-7">
      <p class="has-text-weight-medium size-3">{{name}}</p>
      <EmployeeLevelTag :level="level" />
      <p class="font-secondary has-text-weight-light size-5 emps-roleteam gap-x-6">
        <span>Tim 7 - Ponorogo</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.emps {
  &-image {
    width: 65px;
    height: 65px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://ik.imagekit.io/q8c93uv11zf/employee-retention-rate_fPotu7E9w.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1655192650740')
  };
  &-roleteam {
    color: var(--color-secondary-0);
    display: flex;
    align-items: center;
    &> i {
      color: var(--color-secondary-3)
    }
  }
}
</style>