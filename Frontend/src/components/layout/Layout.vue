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
  },
})
</script>

<template>
  <div class="before-container">
    <div class="before-container-layer">
      <n-layout style="height: 100vh; background-color: transparent;" :native-scrollbar="false">
        <div style="height: 100%;" class="container x-container">
          <navbar-vue class="mb-1 mt-2" />
          <div class="with-min-height">
            <slot name="default"></slot>
          </div>
          <NDivider />
          <footer-vue />
        </div>
      </n-layout>
    </div>
  </div>
</template>

<style lang="scss">
.x-container {
  padding: 10px;
  @include res('large') {
    padding: 0;
  }
}
.with-min-height {
  min-height: 85vh;
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
    background-color: rgba(12, 12, 12, 0.89);
    @include res('small') {
      background-color: rgba(0, 0, 0, 0.85);
    }
    @include ua('backdrop-filter', 'blur(5px)');
    height: auto;
  }
}
</style>