<script lang="ts">
import { defineComponent } from 'vue'
import { Home16Regular, DocumentPercent20Regular, ShiftsActivity20Filled, PeopleTeam20Regular, TextAlignRight16Filled } from '@vicons/fluent'
import { NIcon } from 'naive-ui'
import NavbarDrawer from './NavbarDrawer.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    NIcon,
    Home16Regular,
    DocumentPercent20Regular,
    ShiftsActivity20Filled, 
    PeopleTeam20Regular,
    TextAlignRight16Filled,
    NavbarDrawer
  },
  data: () => ({
    showDrawer: false
  })
})
</script>

<template>
  <div class="bg-panel-primary radius-4 container size-2 p-3 px-4 is-flex is-align-items-center is-justify-content-space-between">
    <NavbarDrawer style="background-color: var(--bg-primary); width: 80%;" :show="showDrawer" @on-update:show="v => showDrawer = v"/>
    <h4 class="has-text-weight-bold size-2">CXBoard</h4>
    <div class="nav-links-mobile">
      <n-icon @click="showDrawer = !showDrawer" class="is-clickable">
        <TextAlignRight16Filled />
      </n-icon>
    </div>
    <div class="font-secondary size-3 is-flex gap-x-1 nav-links">
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
  /* .cxboard {
    color: #FF4C29;
    /* background: rgb(220,217,35);
    background-image: linear-gradient(83deg, rgba(220,217,35,1) 0%, rgba(35,220,125,1) 31%, rgba(35,38,220,1) 66%, rgba(220,35,130,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  } */
  .nav {
    &-link {
      display: flex;
      align-items: center;
      font-weight: 500;
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