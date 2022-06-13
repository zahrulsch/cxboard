<script lang="ts">
import { defineComponent } from 'vue'
import { NConfigProvider, darkTheme, NLayout, NNotificationProvider } from 'naive-ui'

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
    NNotificationProvider
  }
})
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-notification-provider>
      <n-layout style="height: 100vh;" :native-scrollbar="false">
        <router-view />
      </n-layout>
    </n-notification-provider>
  </n-config-provider>
</template>

<style lang="scss">
@import "./app.scss";
</style>

