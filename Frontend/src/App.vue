<script lang="ts">
import { defineComponent } from 'vue'
import { NConfigProvider, NMessageProvider, darkTheme, NLayout, NNotificationProvider } from 'naive-ui'

export default defineComponent({
  name: 'App',
  setup: function() {
    return {
      darkTheme
    }
  },
  components: {
    NConfigProvider,
    NLayout,
    NNotificationProvider,
    NMessageProvider
  }
})
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider :max="2">
      <n-notification-provider placement="bottom">
        <n-layout style="height: 100vh;" :native-scrollbar="false">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component"/>
            </transition>
          </router-view>
        </n-layout>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style lang="scss">
@import "./app.scss";
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>

