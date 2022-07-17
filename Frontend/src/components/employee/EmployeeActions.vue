<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, useMessage, useNotification } from 'naive-ui';
import { useAddEmployeePayload } from '../../stores/addEmployeePayload';
import { useCMutation } from '../../apis/customMutation'

export default defineComponent({
  name: 'EmployeeActions',
  components: {
    NButton,
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
    this.addPayload.schools = []
    this.addPayload.photo = ''
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
      <span class="font-secondary has-text-weight-semibold size-4">Simpan</span>
    </n-button>
  </div>
</template>