<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowCircleLeft16Regular, Home16Filled, DocumentPercent20Filled, ShiftsActivity20Filled, PersonInfo16Filled, PeopleTeam20Filled, TextAlignRight16Filled } from '@vicons/fluent'
import { NIcon } from 'naive-ui'
import NavbarDrawer from './NavbarDrawer.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    NIcon,
    Home16Filled,
    DocumentPercent20Filled,
    ShiftsActivity20Filled, 
    PeopleTeam20Filled,
    TextAlignRight16Filled,
    NavbarDrawer,
    PersonInfo16Filled,
    ArrowCircleLeft16Regular
  },
  data: () => ({
    showDrawer: false
  })
})
</script>

<template>
  <div class="bg-panel-primary radius-4 container size-2 p-3 px-4 is-flex is-align-items-center is-justify-content-space-between app-nav">
    <NavbarDrawer style="background-color: var(--bg-primary); width: 80%;" :show="showDrawer" @on-update:show="v => showDrawer = v"/>
    <n-icon class="is-clickable" @click="$router.back()" id="back" size="18" v-if="$route.path !== '/'">
      <ArrowCircleLeft16Regular />
    </n-icon>
    <h4 class="logo gap-x-3 has-text-weight-bold size-1">
      <router-link id="app-logo" to="/">CXBoard</router-link>
    </h4>
    <div class="nav-links-mobile">
      <n-icon @click="showDrawer = !showDrawer" class="is-clickable">
        <TextAlignRight16Filled />
      </n-icon>
    </div>
    <div class="font-secondary size-3 is-flex gap-x-1 nav-links">
      <router-link v-slot:[`default`]="{ isActive }" to="/">
        <div :class="[isActive && 'nav-link-active', 'nav-link gap-x-7 size-4']">
          <n-icon size="14">
            <Home16Filled />
          </n-icon>
          <span>Beranda</span>
        </div>
      </router-link>
      <router-link v-slot:[`default`]="{ isActive }" to="/employees">
        <div :class="[isActive && 'nav-link-active', 'nav-link gap-x-7 size-4']">
          <n-icon size="14">
            <PersonInfo16Filled  />
          </n-icon>
          <span>Karyawan</span>
        </div>
      </router-link>
      <!-- <router-link v-slot:[`default`]="{ isActive }" to="/cash-flow">
        <div :class="[isActive && 'nav-link-active', 'nav-link gap-x-7 size-4']">
          <n-icon size="14">
            <DocumentPercent20Filled />
          </n-icon>
          <span>Keuangan</span>
        </div>
      </router-link> -->
      <router-link v-slot:[`default`]="{ isActive }" to="/activities">
        <div :class="[isActive && 'nav-link-active', 'nav-link gap-x-7 size-4']">
          <n-icon size="14">
            <ShiftsActivity20Filled />
          </n-icon>
          <span>Aktivitas</span>
        </div>
      </router-link>
      <router-link v-slot:[`default`]="{ isActive }" to="/teams">
        <div :class="[isActive && 'nav-link-active', 'nav-link gap-x-7 size-4']">
          <n-icon size="14">
            <PeopleTeam20Filled />
          </n-icon>
          <span>Teams</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #back {
    display: flex;
    align-items: center;
    color: var(--color-primary-0);

    @include res('small') {
      display: none;
    }
  }
  #app-logo {
    color: var(--color-primary-0);
    font-weight: 900;
    color: #55c09c
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .nav {
    &-link {
      display: flex;
      align-items: center;
      font-weight: 600;
      color: var(--color-primary-1);
      transition: 250ms;
      cursor: pointer;
      &-active {
        color: #55c09c;
        &:hover {
          color: #55cca4 !important;
        }
      }
      &:hover {
        color: var(--color-primary-0);
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