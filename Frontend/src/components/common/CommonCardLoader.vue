<script lang="ts" setup>
import { computed } from 'vue'

interface LoaderProp {
  width?: string | number
  height?: string | number
  speed?: 'fast' | 'slow' | 'medium'
}

const props = defineProps<LoaderProp>()

const cwidth = computed(() => {
  let w = '100%'
  if (props.width) {
    if (typeof props.width === 'number') {
      w = props.width + 'px'
    }
    if (typeof props.width === 'string') {
      w = props.width
    }
  }
  return w
})

const cheight = computed(() => {
  let h = '20px'
  if (props.height) {
    if (typeof props.height === 'number') {
      h = props.height + 'px'
    }
    if (typeof props.height === 'string') {
      h = props.height
    }
  }
  return h
})

const cspeed = computed(() => {
  let s = '750ms'
  if (props.speed) {
    switch(props.speed) {
      case 'fast':
        s = '500ms'
        break
      case 'slow':
        s = '1500ms'
        break
    }
  }
  return s
})
</script>

<template>
  <div
    :style="{
      width: cwidth,
      height: cheight,
      animationDuration: cspeed
    }"
    class="mloader radius-7"
  >
  </div>
</template>

<style lang="scss">
.mloader {
  background-color: rgba(79, 79, 79, 0.3);
  animation: blink 1s linear infinite;
}
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .87;
  }
}
</style>