<script lang="ts">
import { defineComponent } from 'vue';
import { NDivider, NLayout } from 'naive-ui';
import NavbarVue from '../navbar/Navbar.vue'
import FooterVue from '../footer/Footer.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    NavbarVue,
    FooterVue,
    NDivider
  }
})
</script>

<template>
  <div class="before-container">
    <div class="before-container-layer">
        <n-layout style="height: 100vh;" :native-scrollbar="false">
          <div class="p-2 container">
            <navbar-vue class="mb-1 mt-2" />
            <slot name="default"></slot>
            <NDivider />
            <footer-vue />
          </div>
        </n-layout>
    </div>
  </div>
</template>

<style lang="scss">
.before-container {
  width: 100%;
  height: 100vh;
  background-color:hsla(0,100%,50%,1);
  background-image:
  radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
  radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
  radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
  radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);

  & &-layer {
    background-color: rgba(0, 0, 0, 0.863);
    height: 100%;
    backdrop-filter: blur(5px);
  }
}
</style>