<script setup lang="ts">
import { NPopover, NImage } from 'naive-ui'
import { computed } from 'vue';
import nophotos from '../../assets/nophotos.png'

const props = defineProps<{
  name?: string
  image?: string | null
  checked?: boolean
}>()

const emits = defineEmits<{
  ( e: 'update:checked', value: boolean ): void
}>()

const onclick = () => {
  emits('update:checked', !props.checked)
}

const imageurl = computed(() => {
  if (props.image) return props.image
  return nophotos
})
</script>

<template>
  <div class="selection-wrapper">
    <n-popover placement="top-start">
      <template #trigger>
        <div @click="onclick" :class="[props.checked && 'checked', 'px-3 py-1 radius-5 is-clickable selection']">
          <span class="font-secondary size-4 has-text-weight-medium color-primary-2">{{name}}</span>
        </div>
      </template>
      <div class="is-flex">
        <n-image 
          width="125"
          class="radius-5"
          preview-disabled
          :src="imageurl"
        />
      </div>
    </n-popover>
  </div>
</template>

<style lang="scss">
.n-popover {
  --n-color: #02100c !important;
  padding: 5px !important;
  border-radius: var(--space-5) !important;
}
.checked {
  box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.5);
  background: rgba(30, 218, 224, 0.349) !important;
}
.selection {
  transition: 250ms ease;
  background: rgba(10, 167, 172, 0.05);
  &:hover {
    background: rgba(10, 167, 172, 0.0875);
  }
  &-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }
}
</style>