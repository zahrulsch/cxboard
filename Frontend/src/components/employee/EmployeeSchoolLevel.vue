<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmployeeSchoolLevel',
  props: {
    level: String,
    name: String,
    graduateYear: Number
  }
})
</script>

<template>
  <div class="educard px-2 gap-x-5 py-2">
    <span :class="[level, 'level is-uppercase size-7 font-secondary']">{{ level }}</span>
    <p class="size-4 is-uppercase">{{ name }}</p>
    <span class="size-7 color-primary-6 font-secondary has-text-weight-bold">({{ graduateYear }})</span>
  </div>
</template>

<style lang="scss" scoped>
.educard {
  display: flex;
  height: min-content;
  align-items: center;
}
.level {
  padding-inline: .35rem;
  padding-block: .15rem;
  color: black;
  margin: 0 !important;
}
.sd {
  background-color: #ef5a63;
}
.smp {
  background-color: #ffad51;
}
.sma {
  background-color: #8cc639;
}
.ptn {
  background-color: #2d9cd2;
}
.pts {
  background-color: #425a73;
}
</style>