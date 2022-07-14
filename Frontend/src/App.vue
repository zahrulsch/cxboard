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
          <div class="before-container">
            <div class="before-container-layer">
              <router-view v-slot="{ Component }">
                <component :is="Component"/>
              </router-view>
            </div>
          </div>
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
.before-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color:#042407;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & &-layer {
    background-color: rgba(12, 12, 12, 0.96);
    @include res('small') {
      background-color: rgba(0, 0, 0, 0.98);
    }
    @include ua('backdrop-filter', 'blur(5px)');
    height: auto;
  }
}
</style>

