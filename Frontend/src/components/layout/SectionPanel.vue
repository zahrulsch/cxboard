<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionPanel'
})
</script>

<template>
  <div class="is-flex is-flex-direction-column gap-y-2">
    <h4 class="color-primary-0 size-2 is-flex is-align-items-center gap-x-6 px-1 has-text-weight-semibold font-secondary">
      <slot name="title"></slot>
    </h4>
    <slot name="default"></slot>
  </div>
</template>