<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowCircleLeft16Regular, Home16Filled, MailAttach16Filled, SignOut20Filled, Person16Filled, Settings16Filled, ShiftsActivity20Filled, PersonInfo16Filled, PeopleTeam20Filled, TextAlignRight16Filled } from '@vicons/fluent'
import { NIcon, NPopover, NAvatar, NButton, NDivider } from 'naive-ui'
import { useCQuery } from '../../apis/customQuery'
import { useUserData } from '../../stores/userDataStore'
import { useRoute } from 'vue-router'
import NavbarDrawer from './NavbarDrawer.vue'
import CommonCardLoader from '../common/CommonCardLoader.vue'
import ruangcxo from '../../assets/ruangcxo.png'

const userData = useUserData()
const showDrawer = ref(false)
const route = useRoute()

const groupRoute = computed(() => route.meta.group)

const logout = () => {
  localStorage.clear()
  window.location.replace('/login')
}

const { data, isLoading: loadUser } = useCQuery('getUserInfo', '/users/info', 'get', null, null, {
  onSuccess: ({ data }) => {
    const { createdAt, email, id, picture, username, centerSheetId, googleCredential } = data
    userData.$patch({ createdAt, centerSheetId, email, id, picture, username, googleCredential })
  },
  onError: logout,
  refetchOnWindowFocus: false
})

</script>

<template>
  <div class="container size-2 py-1 is-flex is-align-items-center is-justify-content-space-between app-nav">
    <NavbarDrawer style="background-color: var(--bg-primary-solid); width: 80%;" :show="showDrawer" @on-update:show="v => showDrawer = v"/>
    <n-icon class="is-clickable" @click="$router.back()" id="back" size="18" v-if="$route.path !== '/'">
      <ArrowCircleLeft16Regular />
    </n-icon>
    <div id="noback" v-if="$route.path === '/'">
      <n-icon size="18">
      </n-icon>
    </div>
    <router-link to="/" class="is-flex is-align-items-center">
      <img alt="logo" title="RuangCXO" :src="ruangcxo" style="width: 72px;"/>
    </router-link>
    <div class="nav-links-mobile">
      <n-icon @click="showDrawer = !showDrawer" class="is-clickable">
        <TextAlignRight16Filled />
      </n-icon>
    </div>
    <div class="font-secondary size-3 is-flex gap-x-1 nav-links is-align-items-center">
      <router-link to="/">
        <div :class="[ groupRoute === 'beranda' && 'nav-link-active' , 'nav-link gap-x-7 size-4']">
          <n-icon size="14">
            <Home16Filled />
          </n-icon>
          <span>Beranda</span>
        </div>
      </router-link>
      <router-link to="/employees">
        <div :class="[groupRoute === 'karyawan' && 'nav-link-active', 'nav-link gap-x-7 size-4']">
          <n-icon size="14">
            <PersonInfo16Filled  />
          </n-icon>
          <span>Karyawan</span>
        </div>
      </router-link>
      <router-link to="/activities">
        <div :class="[groupRoute === 'aktivitas' && 'nav-link-active', 'nav-link gap-x-7 size-4']">
          <n-icon size="14">
            <ShiftsActivity20Filled />
          </n-icon>
          <span>Aktivitas</span>
        </div>
      </router-link>
      <router-link to="/teams">
        <div :class="[groupRoute === 'team' && 'nav-link-active', 'nav-link gap-x-7 size-4']">
          <n-icon size="14">
            <PeopleTeam20Filled />
          </n-icon>
          <span>Teams</span>
        </div>
      </router-link>
      <n-popover style="background-color: #272727;" arrow-style="background-color: #272727;" trigger="click" placement="bottom-end">
        <template #trigger>
          <n-avatar
            :size="'small'"
            class="is-clickable"
            round
            :src="data?.data.picture"
          >
            <template v-if="!data?.data.picture">
              {{ data?.data.username[0].toUpperCase() || "U" }}
            </template>
          </n-avatar>
        </template>
        <div class="menus p-1">
          <div class="menus-userinfo">
            <n-avatar
              :src="data?.data.picture"
              size="large"
              round
            ></n-avatar>
            <div class="is-flex is-flex-direction-column">
              <div class="is-flex is-align-items-center gap-x-5">
                <n-icon>
                  <Person16Filled />
                </n-icon>
                <common-card-loader v-if="loadUser" :height="12" :speed="'fast'" :width="100"/>
                <h4 v-if="!loadUser && data?.data.username" title="Nama Pengguna" class="font-primary size-3 has-text-weight-semibold">{{ data.data.username }}</h4>
                <h4 v-if="!loadUser && !data" title="Email Pengguna" class="size-5 color-primary-4">Gagal memuat username</h4>
              </div>
              <div class="is-flex is-align-items-center gap-x-5">
                <n-icon>
                  <MailAttach16Filled class="color-primary-5" />
                </n-icon>
                <common-card-loader v-if="loadUser" :height="12" :speed="'fast'" :width="100"/>
                <span v-if="!loadUser && data?.data.email" title="Email Pengguna" class="size-4 color-primary-4">{{ data.data.email }}</span>
                <span v-if="!loadUser && !data" title="Email Pengguna" class="size-4 color-primary-4">Gagal memuat email</span>
              </div>
            </div>
          </div>
          <n-divider class="my-0" />
          <router-link to="/user_setting" class="is-flex">
            <n-button
              size="tiny"
              secondary
              block
            >
              <template #icon>
                <n-icon >
                  <Settings16Filled />
                </n-icon>
              </template>
              <span class="font-secondary size-4 has-text-weight-medium">Pengaturan akun</span>
            </n-button>
          </router-link>
          <n-button
            size="tiny"
            type="error"
            block
            @click="logout"
          >
            <template #icon>
              <n-icon >
                <SignOut20Filled />
              </n-icon>
            </template>
            <span class="font-secondary size-4 has-text-weight-medium">Keluar</span>
          </n-button>
        </div>
      </n-popover>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menus {
  display: flex;
  flex-direction: column;
  row-gap: var(--space-3);
  min-width: 160px;
  & &-userinfo {
    display: flex;
    column-gap: var(--space-2);
    align-items: center;
  }
}
#back, #noback {
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
    position: relative;
    &-active {
      color: #61d2aa !important;
    }
    &:hover {
      color: var(--color-primary-0);
      &::after {
        transform: scale(1);
      }
    }
    &::after {
      content: "";
      background-color: #55c09c;
      height: 3px;
      width: 25%;
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: scale(0);
      transition: 150ms ease-in-out;
      transform-origin: center;
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