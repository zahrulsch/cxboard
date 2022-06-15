<script lang="ts">
import { defineComponent } from 'vue';
import { NDivider } from 'naive-ui';
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
  <div class="p-2 container">
    <navbar-vue class="mb-1 mt-2" />
    <slot name="default"></slot>
    <NDivider />
    <footer-vue />
  </div>
</template>