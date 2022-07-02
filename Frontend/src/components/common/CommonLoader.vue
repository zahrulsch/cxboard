<script lang="ts" setup>
</script>

<template>
  <div class="__loader is-flex gap-y-3 is-flex-direction-column is-align-items-center is-justify-content-center">
    <div class="boxes">
      <span class="radius-2" v-for="i in 3" :key="i" :style="{ animationDelay: `${i*100}ms` }"></span>
    </div>
    <p class="text-loader size-5 color-secondary-0">Sedang mendapatkan data</p>
  </div>
</template>

<style lang="scss">
.__loader {
  min-height: 75vh;
  & .boxes {
    display: flex;
    column-gap: var(--space-5);
    > span {
      height: 12px;
      width: 3px;
      background: #55c09c;
      // transform-origin: bottom center;
      animation: boxes .7s ease-in-out infinite;
    }
  }
}

.text-loader {
  animation: blinkText .75s linear infinite both;
}

@keyframes boxes {
  0%, 100% {
    transform: scaleY(1);
    opacity: 1;
  }
  50% {
    transform: scaleY(.2);
    opacity: .1;
  }
  75% {
    opacity: 0;
    transform: scaleY(0);
  }
}

@keyframes blinkText {
  from, to {
    opacity: 0.75;
  }
  50% {
    opacity: 1;
  }
}


</style>