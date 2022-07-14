<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmployeeLevelTag',
  props: {
    level: String
  },
  computed: {
    clr: function() {
      switch (this.level?.toLocaleLowerCase()) {
        case 'customer service':
          return 'rgb(0, 128, 128)'
        case 'leader':
        case 'tim leader':
          return 'rgb(255, 217, 0)'
        case 'admin':
          return 'rgb(255, 69, 0)'
        case 'uploader':
          return 'rgb(255, 55, 188)'
        case 'keuangan':
          return 'rgb(79, 238, 30)'
        default:
          return 'gray'
      }
    }
  }
})
</script>

<template>
  <p class="font-secondary gap-x-7 level-tag-color">
    <span class="size-5 has-text-weight-medium is-capitalized tags-color">{{ level }}</span>
  </p>
</template>

<style lang="scss">
.level-tag-color {
  background-color: v-bind(clr);
  display: flex ;
  padding: .1rem .3rem;
  width: max-content;
}
.tags-color {
  color: black;
  white-space: nowrap;
}
</style>