<script setup lang="ts">
import { NImage, NEllipsis } from 'naive-ui';
import user from '../../assets/user.png'

const props = defineProps<{
  name?: string
  photo?: string | null
  type?: string
  id?: number
}>()
</script>

<template>
  <div class="employee-suggestions">
    <template v-if="props.id">
      <router-link class="link" :to="`/employees/${props.id}`" />
    </template>
    <div class="photo">
      <n-image 
        :src="props.photo || user"
        width="50"
        height="50"
        :preview-disabled="true"
      />
    </div>
    <div class="detail">
      <n-ellipsis :line-clamp="1">
        <span style="-webkit-line-clamp: 1;" class="size-3 color-primary-0">{{props.name}}</span>
      </n-ellipsis>
      <span class="size-5 color-primary-6 font-secondary">{{props.type}}</span>
    </div>
  </div>
</template>

<style lang="scss">
.employee-suggestions {
  display: flex;
  padding-block: var(--space-4);
  padding-inline: var(--space-3);
  background-color: var(--bg-primary);
  row-gap: var(--space-3);
  column-gap: var(--space-3);
  position: relative;
  & .link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  & .photo {
    width: max-content;
    display: flex;
    align-items: center;
    background-color: var(--bg-secondary);
  }
  & .detail {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>