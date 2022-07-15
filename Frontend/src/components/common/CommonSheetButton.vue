<script lang="ts" setup>
import sheets from '../../assets/sheets.png'
const props = defineProps<{
  text?: string
  loading?: boolean
}>()
</script>

<template>
	<div>
    <div :class="'sheet-pick-btn px-2'">
      <template v-if="!loading" >
        <img width="14" height="14" :src="sheets" alt="google-logo"/>
        <span class="size-4 font-secondary has-text-weight-medium">{{props.text || "Akun Sheet belum terhubung"}}</span>
      </template>
      <template v-else>
        <div class="s-loading">
          <div>
            <span v-for="i in 3" :key="i" :style="{ animationDelay: `${i * 50}ms` }"></span>
          </div>
        </div>
      </template>
    </div>
	</div>
</template>

<style lang="scss">
@keyframes bounces {
  0%, 100% {
    transform: scaleY(1);
  }
  75% {
    transform: scaleY(.75);
  }
}
.s-loading {
  min-width: 160px;
  display: flex;
  height: 25px;
  align-items: center;
  > div {
    flex: 1;
    display: flex;
    column-gap: 2px;
    justify-content: center;
    > span {
      width: 2px;
      background-color: rgb(18, 113, 2);
      height: 6px;
      animation: bounces .5s linear infinite;
    }
  }
}
.sheet-pick-btn {
  width: 100%;
  display: flex;
  height: 25px;
  column-gap: var(--space-3);
  align-items: center;
  justify-content: center;
  background-color: rgba(231, 231, 231, 0.95);

  color: rgb(5, 5, 5);
  cursor: pointer;
  transition: 250ms ease;
  &:hover, &:active {
    background-color: rgb(231, 231, 231);
  }
}
</style>