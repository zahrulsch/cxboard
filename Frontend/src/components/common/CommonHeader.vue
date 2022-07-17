<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  outerClass?: string
  addOuterClass?: string
  fontWeight?: 'bold' | 'semibold' | 'light' | 'normal' | 'medium'
  type?: 'light' | 'dark'
}>()

const cOuterClass = computed(() => {
  let cclass = 'size-5'
  if (props.outerClass) {
    if (props.addOuterClass) {
      cclass = props.outerClass + ' ' + props.addOuterClass
    } else {
      cclass = props.outerClass
    }
  } else {
    if (props.addOuterClass) cclass += ' ' + props.addOuterClass
  }

  if (props.fontWeight) cclass += ` has-text-weight-${props.fontWeight}`
  else cclass += ' has-text-weight-bold'

  if (props.type === 'dark') cclass += ' color-primary-6'
  if (props.type === 'light') cclass += ' color-primary-0'
  if (!props.type) cclass += ' color-primary-6'

  return cclass
})
</script>

<template>
  <h4 :class="cOuterClass">
    <slot name="default"></slot>
  </h4>
</template>