<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmployeeLevelCard',
  props: {
    level: String,
    count: [Number, String]
  },
  computed: {
    bg: function(): string {
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
    },
    color: function() {
      switch (this.level?.toLocaleLowerCase()) {
        case 'customer service':
          return 'white'
        case 'leader':
        case 'tim leader':
          return 'black'
        default:
          return 'white'
      }
    }
  }
})
</script>

<template>
  <div class="p-3 radius-5 level-card">
    <h4 class="font-secondary has-text-weight-normal size-4 is-capitalized">{{ level }}</h4>
    <p class="is-size-4 has-text-weight-bold">{{ count }}</p>
  </div>
</template>

<style lang="scss" scoped>
.level-card {
  color: v-bind(bg);
  background-color: var(--bg-primary);
}
</style>