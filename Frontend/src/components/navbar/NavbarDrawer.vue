<script lang="ts">
import { defineComponent } from 'vue';
import { NDrawer, NDrawerContent, NIcon } from 'naive-ui'
import { Home16Regular, DocumentPercent20Regular, PersonInfo16Regular, ShiftsActivity20Filled, PeopleTeam20Regular, Dismiss20Filled } from '@vicons/fluent'

export default defineComponent({
  name: 'NavbarDrawer',
  components: {
    NDrawer,
    NDrawerContent,
    NIcon,
    Home16Regular, DocumentPercent20Regular, ShiftsActivity20Filled, PeopleTeam20Regular,
    Dismiss20Filled,
    PersonInfo16Regular
  },
  emits: ['on-update:show'],
  props: {
    show: Boolean
  }
})
</script>

<template>
  <n-drawer @mask-click="$emit('on-update:show', false)" :trap-focus="false" :show="show" @update-show="v => $emit('on-update:show', v)" placement="left">
    <n-drawer-content>
      <div class="is-flex is-justify-content-end p-2">
        <n-icon @click="$emit('on-update:show', false)" class="is-clickable">
          <Dismiss20Filled />
        </n-icon>
      </div>
      <div class="p-2 font-secondary mb-2 is-flex gap-x-2 is-align-items-center">
        <div class="avatar-image radius-4"></div>
        <div>
          <p class="size-2 color-primary">Muhammad Zahrul</p>
          <p class="size-4 color-secondary-2 has-text-weight-light">mantracode@yahoo.com</p>
        </div>
      </div>
      <div class="font-secondary size-3 p-2 is-flex is-flex-direction-column gap-y-1 nav-links-mob">
        <router-link to="/">
          <div class="nav-link gap-x-5">
            <n-icon>
              <Home16Regular size="16" />
            </n-icon>
            <span>Beranda</span>
          </div>
        </router-link>
        <router-link to="/employees">
          <div class="nav-link gap-x-5">
            <n-icon>
              <PersonInfo16Regular size="16" />
            </n-icon>
            <span>Karyawan</span>
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
    </n-drawer-content>
  </n-drawer>
</template>

<style lang="scss" scoped>
.avatar-image {
  width: 48px;
  height: 48px;
  background-image: url('https://ik.imagekit.io/q8c93uv11zf/Muhammad_Zahrul--GA-00--pdc-images_rvJ9kjIm8?ik-sdk-version=javascript-1.4.3&updatedAt=1643965740975');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
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