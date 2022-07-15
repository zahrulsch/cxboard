<script setup lang="ts">
import united from '../../assets/united.png'
import { NIcon, NImage } from 'naive-ui'
import { Add16Filled } from '@vicons/fluent'
</script>

<template>
  <div class="no-team">
    <n-image 
      :src="united"
      width="75"
      style="filter: saturate(.75);"
    />
    <span class="color-primary-5 size-5 has-text-weight-medium mt-2">Belum ada team yang terdaftar</span>
    <router-link to="/teams/create">
      <p class="no-team-link">
        <n-icon class="size-3">
          <add16-filled />
        </n-icon>
        <span class="font-secondary size-4 has-text-weight-medium">Buat Team Baru</span>
      </p>
    </router-link>
  </div>
</template>

<style lang="scss">
.no-team {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: .4rem;
  &-link {
    color: rgb(184, 34, 79);
    align-content: center;
    display: flex;
    align-items: center;
    column-gap: .2rem;
    transition: 185ms;
    &:hover {
      color: rgb(172, 41, 80) !important;
    }
  }
}
</style>