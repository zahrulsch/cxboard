<script lang="ts">
import { defineComponent } from 'vue';
import NavbarVue from '../components/navbar/Navbar.vue';
import EmployeeCard from '../components/employee/EmployeeCard.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    NavbarVue,
    EmployeeCard
  }
})
</script>

<template>
  <div class="p-2">
    <navbar-vue />
    <div class="container py-2 gap-y-4 px-1 is-flex is-flex-direction-column">
      <h4 class="size-3 panel-header my-1 has-text-weight-medium font-secondary">Daftar Pegawai</h4>
      <div class="employee-list">
        <employee-card v-for="i in 5" :key="i"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.employee-list {
  display: grid;
  width: 100%;
  gap: .65rem;;
  width: 100%;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(50px, 1fr);
  @include res('small') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include res('medium') {
    grid-template-columns: repeat(3, 1fr);
  }
  @include res('large') {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>