<script lang="ts">
import { defineComponent } from 'vue'
import { Home16Regular, DocumentPercent20Regular, ShiftsActivity20Filled, PeopleTeam20Regular, TextAlignRight16Filled } from '@vicons/fluent'
import { NIcon, NPopover } from 'naive-ui'

export default defineComponent({
  name: 'Navbar',
  components: {
    NIcon,
    Home16Regular,
    DocumentPercent20Regular,
    ShiftsActivity20Filled, 
    PeopleTeam20Regular,
    TextAlignRight16Filled,
    NPopover
  }
})
</script>

<template>
  <div class="bg-panel-primary radius-4 container size-2 p-3 px-4 is-flex is-align-items-center is-justify-content-space-between">
    <h4 class="has-text-weight-bold nav-logo">CXBoard</h4>
    <div class="nav-links-mobile">
      <n-popover placement="bottom" trigger="click" style="background-color: var(--bg-secondary);" arrow-style="background-color: var(--bg-secondary);" >
        <template #trigger>
          <n-icon class="is-clickable">
            <TextAlignRight16Filled />
          </n-icon>
        </template>
        <div class="font-secondary size-3 p-2 is-flex is-flex-direction-column gap-y-2 nav-links-mob">
          <router-link to="/">
            <div class="nav-link gap-x-5">
              <n-icon>
                <Home16Regular size="16" />
              </n-icon>
              <span>Beranda</span>
            </div>
          </router-link>
          <router-link to="/">
            <div class="nav-link gap-x-5">
              <n-icon>
                <DocumentPercent20Regular />
              </n-icon>
              <span>Keuangan</span>
            </div>
          </router-link>
          <router-link to="/">
            <div class="nav-link gap-x-5">
              <n-icon>
                <ShiftsActivity20Filled />
              </n-icon>
              <span>Aktivitas</span>
            </div>
          </router-link>
          <router-link to="/">
            <div class="nav-link gap-x-5">
              <n-icon>
                <PeopleTeam20Regular />
              </n-icon>
              <span>Teams</span>
            </div>
          </router-link>
        </div>
      </n-popover>
    </div>
    <div class="font-secondary size-4 is-flex gap-x-1 nav-links">
      <router-link to="/">
        <div class="nav-link gap-x-7">
          <n-icon>
            <Home16Regular size="16" />
          </n-icon>
          <span>Beranda</span>
        </div>
      </router-link>
      <router-link to="/">
        <div class="nav-link gap-x-7">
          <n-icon>
            <DocumentPercent20Regular />
          </n-icon>
          <span>Keuangan</span>
        </div>
      </router-link>
      <router-link to="/">
        <div class="nav-link gap-x-7">
          <n-icon>
            <ShiftsActivity20Filled />
          </n-icon>
          <span>Aktivitas</span>
        </div>
      </router-link>
      <router-link to="/">
        <div class="nav-link gap-x-7">
          <n-icon>
            <PeopleTeam20Regular />
          </n-icon>
          <span>Teams</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .nav {
    &-link {
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    &-link, &-logo {
      color: #bebebe;
      transition: 250ms;
      cursor: pointer;
      &-active {
        color: #dfdfdf;
      }
      &:hover {
        color: #dfdfdf;
      }
    }
    &-links {
      display: none !important;
      @include res('small') {
        display: inherit !important;
      }
      &-mobile {
        display: inherit;
        @include res('small') {
          display: none !important;
        }
      }
    }
  }
</style>