<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NIcon, useMessage, useNotification } from 'naive-ui';
import { Save16Filled } from '@vicons/fluent'
import { useAddEmployeePayload } from '../../stores/addEmployeePayload';
import { useCMutation } from '../../apis/customMutation'

export default defineComponent({
  name: 'EmployeeActions',
  components: {
    NButton,
    NIcon,
    Save16Filled
  },
  setup: function() {
    const { isLoading, mutateAsync } = useCMutation('addEmployee', '/employees/create/', 'POST')
    return {
      addPayload: useAddEmployeePayload(),
      message: useMessage(),
      notif: useNotification(),
      isLoading, 
      mutateAsync
    }
  },
  methods: {
    createNew: function() {
      const invalids = this.addPayload.validateAll()

      if (invalids.length) {
        this.notif.error({
          title: 'Input Invalid',
          description: invalids.map(inv => inv.name).join(', '),
          closable: true,
          duration: 3000
        })
        return
      }

      this.mutateAsync(this.addPayload.$state, {
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
    delete this.addPayload.schools
    delete this.addPayload.photo
    console.log(this.addPayload)
  }
})
</script>

<template>
  <div class="font-secondary is-flex is-flex-direction-column gap-y-4">
    <n-button
      :bordered="!1"
      type="primary"
      size="small"
      @click="createNew"
      :loading="isLoading"
    >
      <template #icon>
        <n-icon>
          <Save16Filled class="size-2" />
        </n-icon>
      </template>
      <span class="font-secondary has-text-weight-medium size-4">Simpan</span>
    </n-button>
  </div>
</template>