<script lang="ts" setup>
import { NIcon, NEllipsis } from 'naive-ui'
import { CalendarLtr16Filled, Location16Filled } from '@vicons/fluent'
import { computed } from 'vue'
import map from '../../assets/map.png'

const props = defineProps<{
  name?: string | null
  date?: number | string | null
  place?: string | null
  pic?: string | null
  status?: string
  id: number
}>()

const cbg = computed(() => {
  if (props.pic) return `url("${props.pic}")`
  return `url(${map})`
})

const cdate = computed(() => {
  if (props.date) {
    return new Date(props.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
  }
  return 'Belum terjadawal'
})

</script>

<template>
  <div class="activity-item">
    <span class="status px-2 py-1 size-5">{{ props.status }}</span>
    <div class="activity-item-info p-2">
      <router-link :to="`/activities/${props.id}`" class="is-inline-flex color-primary-0">
        <n-ellipsis>
          <p class="size-3 has-text-weight-medium">{{props.name}}</p>
        </n-ellipsis>
      </router-link>
      <p class="is-flex gap-x-6 is-align-items-center color-primary-3">
        <n-icon class="size-3">
          <calendar-ltr16-filled />
        </n-icon>
        <span class="size-5 font-secondary has-text-weight-medium">{{cdate}}</span>
      </p>
      <p class="is-flex gap-x-6 is-align-items-center color-primary-3">
        <n-icon class="size-3">
          <location16-filled />
        </n-icon>
        <span class="size-5 font-secondary has-text-weight-medium">{{props.place}}</span>
      </p>
    </div>
    <router-link :to="`/activities/${props.id}`" class="is-inline-flex activity-link">
      <div class="activity-item-info-layer p-2">
        <p class="size-3 has-text-weight-medium text-center">{{props.name}}</p>
        <p class="is-flex gap-x-6 is-align-items-center color-primary-3">
          <n-icon class="size-3">
            <calendar-ltr16-filled />
          </n-icon>
          <span class="size-5 font-secondary">{{cdate}}</span>
        </p>
        <p class="is-flex gap-x-6 is-align-items-center color-primary-3">
          <n-icon class="size-3">
            <location16-filled />
          </n-icon>
          <span class="size-5 font-secondary">{{props.place}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
.activity-link {
  color: rgb(234, 234, 234);
  transition: 150ms ease;
  &:hover {
    color: rgb(215, 215, 215);
  }
}

.activity-item {
  width: 100%;
  position: relative;
  padding-top: 100%;
  background-image: v-bind(cbg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgb(18, 18, 18);
  cursor: pointer;
  overflow: hidden;

  & > .status {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(238, 202, 42);
    text-transform: capitalize;
    color: rgb(46, 46, 46);
    font-weight: 500;
    margin-top: 5px;
    margin-left: 5px;
  }

  &:hover &-info {
    opacity: 0;
    transition: 150ms;
  }

  &:hover &-info-layer {
    transform: translateY(0%);
  }

  & &-info-layer {
    transition: transform 150ms ease;
    transform: translateY(100%);
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%; 
    height: 100%;   
    top: 0;
    left: 0;
    column-gap: var(--space-6);
    row-gap: var(--space-6);
    background: rgba(28, 28, 28, 0.8);
    align-items: center;
    justify-content: center;
    @include ua('backdrop-filter', 'blur(2.5px)');
  }

  & &-info {
    transition: 150ms ease;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;    
    bottom: 0;
    left: 0;
    column-gap: var(--space-6);
    row-gap: var(--space-6);
    background: rgba(35, 35, 35, 0.5);
    @include ua('backdrop-filter', 'blur(1.5px)');
  }
}
</style>