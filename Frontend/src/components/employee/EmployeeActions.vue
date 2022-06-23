<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NIcon, useMessage } from 'naive-ui';
import { Save16Regular } from '@vicons/fluent'
import { useAddEmployeePayload } from '../../stores/addEmployeePayload';
import { useCMutation } from '../../apis/customMutation'

export default defineComponent({
  name: 'EmployeeActions',
  components: {
    NButton,
    NIcon,
    Save16Regular
  },
  setup: function() {
    const { isLoading, mutateAsync } = useCMutation('addEmployee', '/employees/create/', 'POST')
    return {
      addPayload: useAddEmployeePayload(),
      message: useMessage(),
      isLoading, 
      mutateAsync
    }
  },
  methods: {
    createNew: function() {
      this.mutateAsync(this.addPayload, {
        onSuccess: () => {
          this.message.success('Pegawai Berhasil ditambahkan')
        },
        onError: () => {
          this.message.error('Data pegawai gagal dimasukan')
        }
      })
    }
  },
  unmounted: function() {
    this.addPayload.$reset();
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4 px-2">
    <n-button
      :bordered="!1"
      type="primary"
      size="small"
      class="radius-4"
      @click="createNew"
      :loading="isLoading"
    >
      <template #icon>
        <n-icon>
          <Save16Regular />
        </n-icon>
      </template>
      <span class="font-secondary size-4">Simpan</span>
    </n-button>
  </div>
</template>