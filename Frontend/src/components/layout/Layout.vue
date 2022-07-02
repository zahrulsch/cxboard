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
    NDivider,
    NLayout
  }
})
</script>

<template>
  <div class="before-container">
    <div class="before-container-layer">
      <n-layout style="height: 100vh; background-color: transparent;" :native-scrollbar="false">
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
  overflow-y: auto;
  background-color:#ff9999;
  background-image:
  radial-gradient(at 49% 51%, hsla(0,100%,72%,1) 0px, transparent 50%),
  radial-gradient(at 28% 14%, hsla(286,63%,76%,1) 0px, transparent 50%),
  radial-gradient(at 72% 75%, hsla(60,89%,62%,1) 0px, transparent 50%);
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