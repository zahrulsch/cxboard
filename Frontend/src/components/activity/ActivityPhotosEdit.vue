<script lang="ts" setup>
import { ref } from 'vue';
import { NFormItem, NIcon, NImage, NButton, useMessage } from 'naive-ui'
import { Image16Filled, Delete16Filled } from '@vicons/fluent'
import { tFileReader, tFileReaderDrop } from '../../helpers/fileReader'

const message = useMessage()
const droptext = ref('Drop gambar disini / Klik untuk memilih file')

const props = defineProps<{
  photo?: string | null
}>()

const emits = defineEmits<{
  ( e: 'update:photo', value: string ): void
}>()

const onDrop = (e: DragEvent) => {
  droptext.value = 'Drop gambar disini / Klik untuk memilih file'
  tFileReaderDrop(e, {
    onSuccess: ({ base64Text }) => {
      emits('update:photo', String(base64Text))
    },
    onError: e => message.error(e, { closable: true, duration: 2750 })
  })
}

const onChange = (e: Event) => {
  droptext.value = 'Drop gambar disini / Klik untuk memilih file'
  tFileReader(e, {
    onSuccess: ({ base64Text }) => {
      emits('update:photo', String(base64Text))
    },
    onError: e => message.error(e, { closable: true, duration: 2750 })
  })
}

const onRemovePhoto = () => {
  emits('update:photo', '')
}

</script>

<template>
  <n-form-item label="Foto" :show-feedback="false" :label-props="{class: 'size-5 mb-1'}">
    <div v-if="!photo" class="activity-photos-input">
      <div>
        <input 
          type="file" 
          accept=".jpeg,.jpg,.png" 
          @dragover="droptext = 'Lepaskan file'"
          @dragleave="droptext = 'Drop gambar disini / Klik untuk memilih file'"
          @drop="onDrop"
          @change="onChange"
        />
        <n-icon size="25">
          <image16-filled class="color-secondary-3"/>
        </n-icon>
        <label class="text-center size-5 color-secondary-2 font-secondary px-4">{{droptext}}</label>
      </div>
    </div>
    <div class="activity-photos-preview" v-else>
      <div>
        <n-image 
          :src="photo"
          object-fit="contain"
          style="width: 100%; height: 100%"
        />
        <n-button 
          class="delete-btn"
          type="error"
          @click="onRemovePhoto"
        >
          <n-icon size="18">
            <delete16-filled />
          </n-icon>
        </n-button>
      </div>
    </div>
  </n-form-item>
</template>

<style lang="scss">

.activity-photos-preview {
  padding-top: 100%;
  position: relative;
  width: 100%;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-primary);
    & > .delete-btn {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      margin-top: 10px;
      margin-left: 10px;
    }
  }
}

.activity-photos-input {
  position: relative;
  width:100%;
  padding-top: 100%;
  background-color: var(--bg-primary);
  align-self: flex-start;

  & > div {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: var(--space-5);

    & > input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
}
</style>