<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { NImage, NIcon, NEllipsis } from 'naive-ui'
import { PersonBoard24Regular, PeopleTeam20Regular, Circle16Filled } from '@vicons/fluent'
import { kebab } from 'case'
import EmployeeLevelTag from './EmployeeLevelTag.vue'
import noimage from '../../assets/noimage.png'

export default defineComponent({
  name: 'EmployeeCard',
  setup() {
    return {
      kebab,
      noimage
    }
  },
  components: {
    NImage,
    NIcon,
    PersonBoard24Regular,
    PeopleTeam20Regular,
    EmployeeLevelTag,
    NEllipsis,
    Circle16Filled
  },
  props: {
    name: String,
    level: {
      type: Array as PropType<{ name: string; }[]>
    },
    image: {
      type: Object as PropType<string | null>
    },
    teamcount: Number
  },
  computed: {
    imageUrl: function() {
      if (this.image) return `url("${this.image}")`
      return `url("${ this.noimage }")`
    }
  }
})
</script>

<template>
  <div class="bg-panel-primary is-flex gap-x-3 emps p-2">
    <div class="emps-image">
    </div>
    <div style="max-width: 70%;" class="is-flex is-flex-direction-column">
      <n-ellipsis >
        <span class="has-text-weight-medium font-secondary size-4">{{name}}</span>
      </n-ellipsis>
      <div style="overflow: hidden;" class="is-flex is-align-items-center">
        <span class="font-secondary has-text-weight-medium color-primary-5 size-5 mr-1">{{ level?.length || 0 }} Roles</span>
        <n-icon class="size-5" v-for="v in level">
          <circle16-filled :class="[ `c-${kebab(v.name)}` ,'size-5']" />
        </n-icon>
      </div>
      <p class="font-secondary size-5 color-primary-5 has-text-weight-medium gap-x-6">
        <span>Bergabung di {{teamcount||0}} team</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.emps {
  transition: .3s;
  &:hover {
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.075);
  }
  &-image {
    width: 65px;
    height: 65px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: v-bind(imageUrl);
    background-color: rgba(32, 32, 32, 0.404);
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